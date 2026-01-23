# Run server tests

# Determine project root
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

# Activate virtual environment
$ActivateScript = "$ProjectRoot\venv\Scripts\Activate.ps1"
if (Test-Path $ActivateScript) {
    & $ActivateScript
} else {
    Write-Host "Virtual environment not found. Running setup-env.ps1..."
    & "$ScriptDir\setup-env.ps1"
    & $ActivateScript
}

# Run server tests
Set-Location "$ProjectRoot\server"
Write-Host "Running server tests..."

python -m unittest discover -s tests -p "*.py"
