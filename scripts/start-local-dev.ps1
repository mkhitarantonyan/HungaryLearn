$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

$localPorts = [ordered]@{
  'Emulator UI' = 4000
  'Firebase Hosting Emulator' = 5000
  'Magyaro frontend' = 5173
  'Functions Emulator' = 5001
  'Firestore Emulator' = 8080
  'Auth Emulator' = 9099
  'Storage Emulator' = 9199
}

function Assert-PortAvailable {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Name,
    [Parameter(Mandatory = $true)]
    [int]$Port
  )

  $listener = [System.Net.Sockets.TcpListener]::new(
    [System.Net.IPAddress]::Parse('127.0.0.1'),
    $Port
  )
  try {
    $listener.Start()
  } catch {
    throw "$Name cannot start because 127.0.0.1:$Port is already in use. Stop the process using that port and run npm run dev:full again."
  } finally {
    $listener.Stop()
  }
}

function Stop-ProcessTree {
  param([System.Diagnostics.Process]$Process)

  if ($null -eq $Process -or $Process.HasExited) { return }
  & taskkill.exe /PID $Process.Id /T /F 2>$null | Out-Null
}

foreach ($entry in $localPorts.GetEnumerator()) {
  Assert-PortAvailable -Name $entry.Key -Port $entry.Value
}

$localProjectId = 'demo-hungarylearn'
$env:VITE_USE_FIREBASE_EMULATORS = 'true'
$env:VITE_FIREBASE_API_KEY = 'local-emulator-api-key'
$env:VITE_FIREBASE_AUTH_DOMAIN = "$localProjectId.firebaseapp.com"
$env:VITE_FIREBASE_PROJECT_ID = $localProjectId
$env:VITE_FIREBASE_APP_ID = '1:000000000000:web:local'
$env:VITE_FIREBASE_STORAGE_BUCKET = "$localProjectId.appspot.com"
$env:VITE_FIREBASE_MESSAGING_SENDER_ID = '000000000000'
$env:FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099'
$env:FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080'
$env:FIREBASE_STORAGE_EMULATOR_HOST = '127.0.0.1:9199'
$env:GCLOUD_PROJECT = $localProjectId
$env:GOOGLE_CLOUD_PROJECT = $localProjectId
$env:FUNCTIONS_DISCOVERY_TIMEOUT = '60'
$env:LOCAL_DEV_API_ONLY = 'true'
Remove-Item Env:GOOGLE_APPLICATION_CREDENTIALS -ErrorAction SilentlyContinue

Write-Host 'Building Firebase Functions for the local emulator...'
& npm.cmd run functions:build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$hostingRoot = Join-Path $projectRoot 'dist'
$hostingIndex = Join-Path $hostingRoot 'index.html'
if (-not (Test-Path -LiteralPath $hostingIndex -PathType Leaf)) {
  New-Item -ItemType Directory -Path $hostingRoot -Force | Out-Null
  Set-Content -LiteralPath $hostingIndex -Encoding utf8 -Value '<!doctype html><title>Magyaro local API proxy</title>'
}

Write-Host ''
Write-Host 'Magyaro local development'
Write-Host '  Magyaro frontend:          http://127.0.0.1:5173'
Write-Host '  Firebase Hosting Emulator: http://127.0.0.1:5000'
Write-Host '  Functions Emulator:        http://127.0.0.1:5001'
Write-Host '  Firestore Emulator:        http://127.0.0.1:8080'
Write-Host '  Auth Emulator:             http://127.0.0.1:9099'
Write-Host '  Storage Emulator:          http://127.0.0.1:9199'
Write-Host '  Emulator UI:               http://127.0.0.1:4000'
Write-Host '  API health through Vite:   http://127.0.0.1:5173/api/health'
Write-Host ''
Write-Host 'Local Auth, Firestore, and Storage are enforced for this process.'
Write-Host 'The billing Function is not started. Press Ctrl+C to stop everything.'
Write-Host ''

$viteProcess = $null
$firebaseProcess = $null
$exitCode = 0

try {
  $firebaseProcess = Start-Process -FilePath 'firebase.cmd' -ArgumentList @(
    'emulators:start',
    '--only',
    'auth,functions:api,firestore,hosting,storage',
    '--project',
    $localProjectId
  ) -WorkingDirectory $projectRoot -NoNewWindow -PassThru

  $viteProcess = Start-Process -FilePath 'npm.cmd' -ArgumentList @(
    'run',
    'dev'
  ) -WorkingDirectory $projectRoot -NoNewWindow -PassThru

  while (-not $firebaseProcess.HasExited -and -not $viteProcess.HasExited) {
    Start-Sleep -Milliseconds 500
  }

  if ($firebaseProcess.HasExited) {
    $exitCode = $firebaseProcess.ExitCode
    if ($exitCode -eq 0) { $exitCode = 1 }
    Write-Error "Firebase Emulator Suite stopped unexpectedly with exit code $($firebaseProcess.ExitCode)."
  } else {
    $exitCode = $viteProcess.ExitCode
    if ($exitCode -eq 0) { $exitCode = 1 }
    Write-Error "Vite stopped unexpectedly with exit code $($viteProcess.ExitCode)."
  }
} finally {
  Stop-ProcessTree -Process $viteProcess
  Stop-ProcessTree -Process $firebaseProcess
}

exit $exitCode
