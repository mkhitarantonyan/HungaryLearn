$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

# SetEnvironmentVariable(..., 'User') updates future terminals, not the current
# PowerShell process. Import the saved value so `npm run site` also works in the
# terminal where the variable was originally configured.
if ([string]::IsNullOrWhiteSpace($env:GOOGLE_APPLICATION_CREDENTIALS)) {
  $savedCredentials = [Environment]::GetEnvironmentVariable(
    'GOOGLE_APPLICATION_CREDENTIALS',
    'User'
  )

  if (-not [string]::IsNullOrWhiteSpace($savedCredentials)) {
    $env:GOOGLE_APPLICATION_CREDENTIALS = $savedCredentials
  }
}

if ([string]::IsNullOrWhiteSpace($env:GOOGLE_APPLICATION_CREDENTIALS)) {
  throw 'GOOGLE_APPLICATION_CREDENTIALS is not configured for this Windows user.'
}

if (-not (Test-Path -LiteralPath $env:GOOGLE_APPLICATION_CREDENTIALS -PathType Leaf)) {
  throw 'The file configured in GOOGLE_APPLICATION_CREDENTIALS does not exist.'
}

Write-Host 'Building the website and Functions...'
& npm.cmd run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

& npm.cmd run functions:build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# The generated functions.yaml normally avoids HTTP discovery entirely. Keep a
# longer local fallback for environments where the manifest has been removed.
if ([string]::IsNullOrWhiteSpace($env:FUNCTIONS_DISCOVERY_TIMEOUT)) {
  $env:FUNCTIONS_DISCOVERY_TIMEOUT = '60'
}

Write-Host 'Starting Magyaro at http://127.0.0.1:5000'
& npm.cmd exec -- firebase emulators:start --only functions,hosting
exit $LASTEXITCODE
