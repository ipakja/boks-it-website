# Vollstaendiger Deploy ohne Cloudflare-Login – ueber GitHub Pages (von mir verwaltet)
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

Write-Host ">> Build lokal pruefen..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ">> Push nach GitHub (Auto-Deploy auf Pages)..." -ForegroundColor Cyan
git add -A
$status = git status --porcelain
if ($status) {
    git commit -m "Deploy update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}
git push origin main

Write-Host ""
Write-Host "LIVE: https://ipakja.github.io/boks-it-website/" -ForegroundColor Green
Write-Host "GitHub Actions baut automatisch. Status:" -ForegroundColor Cyan
gh run list -R ipakja/boks-it-website --limit 1
