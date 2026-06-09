# Build und Deploy auf Cloudflare Pages (Test)
# Voraussetzung: npx wrangler login (einmalig im Browser)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

Write-Host ">> npm run build" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ">> wrangler pages deploy" -ForegroundColor Cyan
npx wrangler pages deploy out --project-name=boks-it-website --branch=main

Write-Host ">> Fertig." -ForegroundColor Green
