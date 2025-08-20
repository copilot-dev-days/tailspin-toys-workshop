#!/bin/bash

# Silent version of start-app.sh for e2e tests
# This script suppresses all server output while maintaining functionality
# Checks if servers are already running and reuses them if available

# Define color codes
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Store initial directory and script directory
INITIAL_DIR=$(pwd)
SCRIPT_DIR=$(dirname "$(realpath "$0")")

# Check if we're in scripts, client, or server directory and navigate up one level
current_directory=$(basename $(pwd))
if [[ "$current_directory" =~ ^(scripts|client|server)$ ]]; then
    cd ..
fi

# Function to check if a port is in use
check_port() {
    local port=$1
    if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        netstat -an | grep ":$port " | grep LISTENING &> /dev/null
    else
        lsof -ti:$port &> /dev/null
    fi
}

# Function to check if server is responding
check_server_health() {
    local url=$1
    curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null | grep -q "200\|404"
}

# Variables to track if we started servers
STARTED_FLASK=false
STARTED_CLIENT=false
SERVER_PID=""
CLIENT_PID=""

# Check if Flask server (port 5100) is already running
if check_port 5100 && check_server_health "http://localhost:5100"; then
    echo "Flask server already running on port 5100" >&2
else
    # Source environment setup script (suppress output)
    source "${SCRIPT_DIR}/setup-env.sh" &> /dev/null

    # Continue with server startup
    cd server || {
        echo "Error: server directory not found" >&2
        cd "$INITIAL_DIR"
        exit 1
    }
    export FLASK_DEBUG=1
    export FLASK_PORT=5100

    # Use appropriate Python command based on OS (suppress output)
    if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        py app.py &> /dev/null &
    else
        python3 app.py &> /dev/null &
    fi

    # Store the Python server process ID
    SERVER_PID=$!
    STARTED_FLASK=true

    # Wait for Flask server to start
    sleep 3

    # Seed the database (suppress output)
    export PYTHONPATH=$PYTHONPATH:$(pwd)
    if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        py utils/seed_database.py &> /dev/null
    else
        python3 utils/seed_database.py &> /dev/null
    fi

    cd .. || {
        echo "Error: cannot navigate back to project root" >&2
        cd "$INITIAL_DIR"
        exit 1
    }
fi

# Check if Astro client (port 4321) is already running
if check_port 4321 && check_server_health "http://localhost:4321"; then
    echo "Astro client already running on port 4321" >&2
else
    cd client || {
        echo "Error: client directory not found" >&2
        cd "$INITIAL_DIR"
        exit 1
    }
    npm install &> /dev/null
    npm run dev -- --no-clearScreen &> /dev/null &

    # Store the client server process ID
    CLIENT_PID=$!
    STARTED_CLIENT=true

    # Sleep for 5 seconds to ensure client server is ready
    sleep 5
fi

# Function to handle script termination
cleanup() {
    # Only kill processes that we started
    if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        if [[ "$STARTED_FLASK" == "true" && -n "$SERVER_PID" ]]; then
            taskkill //F //T //PID $SERVER_PID 2>/dev/null
        fi
        if [[ "$STARTED_CLIENT" == "true" && -n "$CLIENT_PID" ]]; then
            taskkill //F //T //PID $CLIENT_PID 2>/dev/null
        fi
    else
        # Send SIGTERM first to allow graceful shutdown
        if [[ "$STARTED_FLASK" == "true" && -n "$SERVER_PID" ]]; then
            kill -TERM $SERVER_PID 2>/dev/null
        fi
        if [[ "$STARTED_CLIENT" == "true" && -n "$CLIENT_PID" ]]; then
            kill -TERM $CLIENT_PID 2>/dev/null
        fi
        
        # Wait briefly for graceful shutdown
        sleep 2
        
        # Then force kill if still running
        if [[ "$STARTED_FLASK" == "true" && -n "$SERVER_PID" ]] && ps -p $SERVER_PID > /dev/null 2>&1; then
            pkill -P $SERVER_PID 2>/dev/null
            kill -9 $SERVER_PID 2>/dev/null
        fi
        
        if [[ "$STARTED_CLIENT" == "true" && -n "$CLIENT_PID" ]] && ps -p $CLIENT_PID > /dev/null 2>&1; then
            pkill -P $CLIENT_PID 2>/dev/null
            kill -9 $CLIENT_PID 2>/dev/null
        fi
    fi

    # Deactivate virtual environment if active
    if [[ -n "${VIRTUAL_ENV}" ]]; then
        deactivate
    fi

    # Return to initial directory
    cd "$INITIAL_DIR"
    exit 0
}

# Trap multiple signals
trap cleanup SIGINT SIGTERM SIGQUIT EXIT

# Keep the script running
wait
