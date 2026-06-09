# Lokaler Testserver
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root
Write-Host ">> http://localhost:3000" -ForegroundColor Cyan
npm run dev
