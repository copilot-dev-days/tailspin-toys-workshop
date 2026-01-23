# Run end-to-end tests: Playwright will automatically start servers via webServer config

# Determine project root
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

Set-Location "$ProjectRoot\client"

Write-Host "Starting Tailspin Toys E2E Tests" -ForegroundColor Blue
Write-Host "Starting servers..." -ForegroundColor Green
Write-Host "  * Flask API server: http://localhost:5100"
Write-Host "  * Astro client server: http://localhost:4321"
Write-Host ""
Write-Host "Running tests:" -ForegroundColor Blue

# Run Playwright tests - this will automatically start the servers silently
npm run test:e2e

# Store and return the exit code
$TestExitCode = $LASTEXITCODE

Write-Host ""
Write-Host "E2E tests completed with exit code: $TestExitCode" -ForegroundColor Blue
exit $TestExitCode
