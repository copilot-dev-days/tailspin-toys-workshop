#!/bin/bash

# Determine project root
if [[ $(basename $(pwd)) == "scripts" || $(basename $(pwd)) == "server" ]]; then
    PROJECT_ROOT=$(pwd)/..
else
    PROJECT_ROOT=$(pwd)
fi

# Activate virtual environment
source "$PROJECT_ROOT/venv/bin/activate" || . "$PROJECT_ROOT/venv/bin/activate"

# Check if the virtual environment is activated
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "Virtual environment not activated. Running setup-env.sh..."
    bash "$PROJECT_ROOT/scripts/setup-env.sh"
    
    # Re-activate virtual environment after setup
    source "$PROJECT_ROOT/venv/bin/activate" || . "$PROJECT_ROOT/venv/bin/activate"
fi

# Run server tests
cd "$PROJECT_ROOT/server" || exit 1
echo "Running server tests..."

python3 -m unittest discover -s tests -p "*.py"