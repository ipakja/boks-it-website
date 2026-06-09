# Cloudflare Login in privatem Browserfenster (kein Cursor-Browser, keine gespeicherten Cookies)
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

Write-Host ">> Wrangler OAuth starten..." -ForegroundColor Cyan

$logFile = Join-Path $env:TEMP "wrangler-login-url.txt"
if (Test-Path $logFile) { Remove-Item $logFile -Force }

$job = Start-Job -ScriptBlock {
    Set-Location $using:Root
    npx wrangler login --browser=false 2>&1 | Tee-Object -FilePath $using:logFile
}

$authUrl = $null
for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 2
    if (Test-Path $logFile) {
        $content = Get-Content $logFile -Raw -ErrorAction SilentlyContinue
        if ($content -match '(https://dash\.cloudflare\.com/oauth2/auth\?[^\s]+)') {
            $authUrl = $Matches[1]
            break
        }
    }
}

if (-not $authUrl) {
    Write-Host "OAuth-URL nicht gefunden. Bitte manuell: npx wrangler login" -ForegroundColor Red
    Receive-Job $job
    exit 1
}

Write-Host ">> Privates Fenster oeffnen..." -ForegroundColor Cyan

$opened = $false
$chrome = "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe"
$chromeX86 = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"

if (Test-Path $chrome) {
    Start-Process $chrome @('--incognito', $authUrl)
    $opened = $true
} elseif (Test-Path $chromeX86) {
    Start-Process $chromeX86 @('--incognito', $authUrl)
    $opened = $true
} elseif (Test-Path $edge) {
    Start-Process $edge @('-inprivate', $authUrl)
    $opened = $true
}

if (-not $opened) {
    Write-Host "Browser nicht gefunden. URL manuell im privaten Fenster oeffnen:" -ForegroundColor Yellow
    Write-Host $authUrl
} else {
    Write-Host ">> Im PRIVATEN Fenster bei Cloudflare anmelden/registrieren." -ForegroundColor Green
    Write-Host ">> Wrangler wartet auf Bestaetigung..." -ForegroundColor Green
}

Wait-Job $job | Out-Null
$output = Receive-Job $job
Remove-Job $job
Write-Host $output

if ($output -match 'Successfully logged in') {
    Write-Host ">> Cloudflare Login erfolgreich." -ForegroundColor Green
    exit 0
}

Write-Host ">> Login nicht abgeschlossen. Erneut ausfuehren oder GitHub Pages nutzen." -ForegroundColor Yellow
exit 1
