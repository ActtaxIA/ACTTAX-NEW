# Script para hacer push y verificar deployment en AWS Amplify

Write-Host "=== VERIFICANDO ESTADO ACTUAL ===" -ForegroundColor Cyan
git status

Write-Host "`n=== VERIFICANDO ULTIMOS COMMITS ===" -ForegroundColor Cyan
git log --oneline -3

Write-Host "`n=== VERIFICANDO RAMA ACTUAL ===" -ForegroundColor Cyan
$branch = git branch --show-current
Write-Host "Rama actual: $branch" -ForegroundColor Green

Write-Host "`n=== HACIENDO PUSH AL REPOSITORIO REMOTO ===" -ForegroundColor Yellow
git push origin $branch --verbose

Write-Host "`n=== VERIFICANDO QUE EL PUSH SE COMPLETO ===" -ForegroundColor Cyan
git status

Write-Host "`n=== DEPLOYMENT INICIADO ===" -ForegroundColor Green
Write-Host "Abre AWS Amplify Console para ver el progreso:" -ForegroundColor Yellow
Write-Host "https://eu-north-1.console.aws.amazon.com/amplify/apps/d1jo624cg4rv3f/branches/main/deployments" -ForegroundColor Blue
Write-Host "`nEl deployment deberia aparecer en 30-60 segundos..." -ForegroundColor White
