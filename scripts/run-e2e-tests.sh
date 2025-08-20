#!/bin/bash

# Run end-to-end tests: Playwright will automatically start servers via webServer config

# Define color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Determine project root
if [[ $(basename $(pwd)) == "scripts" ]]; then
    PROJECT_ROOT=$(pwd)/..
else
    PROJECT_ROOT=$(pwd)
fi

cd "$PROJECT_ROOT/client" || exit 1

echo -e "${BLUE}Starting Tailspin Toys E2E Tests${NC}"
echo -e "${GREEN}Starting servers...${NC}"
echo -e "  • Flask API server: http://localhost:5100"
echo -e "  • Astro client server: http://localhost:4321"
echo ""
echo -e "${BLUE}Running tests:${NC}"

# Run Playwright tests - this will automatically start the servers silently
npm run test:e2e

# Store the exit code
TEST_EXIT_CODE=$?

echo ""
echo -e "${BLUE}E2E tests completed with exit code: $TEST_EXIT_CODE${NC}"
exit $TEST_EXIT_CODE