# Start the Tailspin Toys application (Flask API + Astro client)

# Store initial directory and script directory
$InitialDir = Get-Location
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

# Navigate to project root
Set-Location $ProjectRoot

Write-Host "Starting API (Flask) server..."

# Source environment setup script
& "$ScriptDir\setup-env.ps1"

# Start Flask server
Set-Location server
$env:FLASK_DEBUG = "1"
$env:FLASK_PORT = "5100"

$ServerJob = Start-Job -ScriptBlock {
    param($ProjectRoot)
    Set-Location "$ProjectRoot\server"
    & "$ProjectRoot\venv\Scripts\Activate.ps1"
    python app.py
} -ArgumentList $ProjectRoot

Write-Host "Starting client (Astro)..."
Set-Location "$ProjectRoot\client"
npm install

$ClientJob = Start-Job -ScriptBlock {
    param($ProjectRoot)
    Set-Location "$ProjectRoot\client"
    npm run dev -- --no-clearScreen
} -ArgumentList $ProjectRoot

# Sleep for 5 seconds
Start-Sleep -Seconds 5

# Display the server URLs
Write-Host ""
Write-Host "Server (Flask) running at: http://localhost:5100" -ForegroundColor Green
Write-Host "Client (Astro) server running at: http://localhost:4321" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the servers"

# Function to handle cleanup
function Stop-Servers {
    Write-Host "Shutting down servers..."
    Stop-Job $ServerJob -ErrorAction SilentlyContinue
    Stop-Job $ClientJob -ErrorAction SilentlyContinue
    Remove-Job $ServerJob -ErrorAction SilentlyContinue
    Remove-Job $ClientJob -ErrorAction SilentlyContinue
    Set-Location $InitialDir
}

# Register cleanup on script termination
try {
    # Keep the script running and show output
    while ($true) {
        Receive-Job $ServerJob -ErrorAction SilentlyContinue
        Receive-Job $ClientJob -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
    }
} finally {
    Stop-Servers
}
