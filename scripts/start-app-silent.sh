#!/bin/bash

# Silent version of start-app.sh for e2e tests
# This script suppresses all server output while maintaining functionality

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

# Wait for Flask server to start
sleep 3

# Seed the database (suppress output)
export PYTHONPATH=$PYTHONPATH:$(pwd)
if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
    py utils/seed_database.py &> /dev/null
else
    python3 utils/seed_database.py &> /dev/null
fi

cd ../client || {
    echo "Error: client directory not found" >&2
    cd "$INITIAL_DIR"
    exit 1
}
npm install &> /dev/null
npm run dev -- --no-clearScreen &> /dev/null &

# Store the SvelteKit server process ID
CLIENT_PID=$!

# Sleep for 5 seconds to ensure both servers are ready
sleep 5

# Function to handle script termination
cleanup() {
    # Kill processes and their child processes (suppress output)
    if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        taskkill //F //T //PID $SERVER_PID 2>/dev/null
        taskkill //F //T //PID $CLIENT_PID 2>/dev/null
    else
        # Send SIGTERM first to allow graceful shutdown
        kill -TERM $SERVER_PID 2>/dev/null
        kill -TERM $CLIENT_PID 2>/dev/null
        
        # Wait briefly for graceful shutdown
        sleep 2
        
        # Then force kill if still running
        if ps -p $SERVER_PID > /dev/null 2>&1; then
            pkill -P $SERVER_PID 2>/dev/null
            kill -9 $SERVER_PID 2>/dev/null
        fi
        
        if ps -p $CLIENT_PID > /dev/null 2>&1; then
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
