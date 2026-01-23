# Setup environment: Python virtualenv and dependencies

# Determine project root
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

Set-Location $ProjectRoot

# Create and activate virtual environment
python -m venv venv
& "$ProjectRoot\venv\Scripts\Activate.ps1"

Write-Host "Installing Python dependencies..."
pip install -r server\requirements.txt

Write-Host "Installing client dependencies..."
Set-Location client
npm install
npx playwright install

# Return to project root
Set-Location $ProjectRoot
