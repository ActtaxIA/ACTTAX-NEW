# ================================================================
# Script de Deploy Automatizado para ACTTAX
# ================================================================
# 
# Este script automatiza el proceso completo de:
# 1. Añadir archivos al staging (git add)
# 2. Crear commit
# 3. Push a GitHub
# 4. Verificar que todo está correcto
#
# USO: .\push-deploy.ps1
# ================================================================

param(
    [string]$CommitMessage = ""
)

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "  ACTTAX - Deploy Automatizado a AWS" -ForegroundColor Cyan
Write-Host "============================================`n" -ForegroundColor Cyan

# 1. Verificar estado actual
Write-Host "[1/6] Verificando estado actual..." -ForegroundColor Yellow
git status --short

$hasChanges = git status --porcelain
if (-not $hasChanges) {
    Write-Host "`n✅ No hay cambios para commitear. El repositorio está limpio." -ForegroundColor Green
    Write-Host "`n📍 Última versión en producción:" -ForegroundColor Cyan
    git log --oneline -1
    exit 0
}

Write-Host "`n✓ Hay cambios pendientes`n" -ForegroundColor Green

# 2. Añadir todos los archivos al staging
Write-Host "[2/6] Añadiendo archivos al staging (git add -A)..." -ForegroundColor Yellow
git add -A
Write-Host "✓ Todos los archivos añadidos al staging`n" -ForegroundColor Green

# 3. Verificar que los archivos están en staging
Write-Host "[3/6] Verificando archivos en staging..." -ForegroundColor Yellow
$stagedFiles = git diff --cached --name-only
if ($stagedFiles) {
    Write-Host "✓ Archivos listos para commit:" -ForegroundColor Green
    $stagedFiles | ForEach-Object { Write-Host "  - $_" -ForegroundColor Gray }
} else {
    Write-Host "❌ ERROR: No hay archivos en staging" -ForegroundColor Red
    exit 1
}

# 4. Solicitar mensaje de commit si no se proporcionó
if (-not $CommitMessage) {
    Write-Host "`n[4/6] Ingresa el mensaje del commit:" -ForegroundColor Yellow
    Write-Host "Ejemplos:" -ForegroundColor Gray
    Write-Host "  - feat: Añadir nueva funcionalidad" -ForegroundColor Gray
    Write-Host "  - fix: Corregir bug en formulario" -ForegroundColor Gray
    Write-Host "  - docs: Actualizar README" -ForegroundColor Gray
    $CommitMessage = Read-Host "`nMensaje"
    
    if (-not $CommitMessage) {
        Write-Host "❌ ERROR: Debes proporcionar un mensaje de commit" -ForegroundColor Red
        exit 1
    }
}

# 5. Crear commit
Write-Host "`n[5/6] Creando commit..." -ForegroundColor Yellow
git commit -m $CommitMessage

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Commit creado exitosamente" -ForegroundColor Green
    git log --oneline -1
} else {
    Write-Host "❌ ERROR: Falló la creación del commit" -ForegroundColor Red
    exit 1
}

# 6. Push a GitHub
Write-Host "`n[6/6] Subiendo cambios a GitHub..." -ForegroundColor Yellow
$branch = git branch --show-current
git push origin $branch --verbose

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ ¡Deploy completado exitosamente!" -ForegroundColor Green
    Write-Host "`n============================================" -ForegroundColor Cyan
    Write-Host "  SIGUIENTE PASO" -ForegroundColor Cyan
    Write-Host "============================================`n" -ForegroundColor Cyan
    Write-Host "AWS Amplify detectará el cambio y comenzará el deployment automáticamente." -ForegroundColor White
    Write-Host "Tiempo estimado: 2-3 minutos`n" -ForegroundColor White
    Write-Host "📊 Ver progreso en:" -ForegroundColor Yellow
    Write-Host "https://eu-north-1.console.aws.amazon.com/amplify/apps/d1jo624cg4rv3f/branches/main/deployments`n" -ForegroundColor Blue
    Write-Host "🌐 Repositorio GitHub:" -ForegroundColor Yellow
    Write-Host "https://github.com/ActtaxIA/ACTTAX-NEW`n" -ForegroundColor Blue
} else {
    Write-Host "`n❌ ERROR: Falló el push a GitHub" -ForegroundColor Red
    Write-Host "Posibles causas:" -ForegroundColor Yellow
    Write-Host "  - Sin conexión a internet" -ForegroundColor Gray
    Write-Host "  - Credenciales de GitHub incorrectas" -ForegroundColor Gray
    Write-Host "  - Conflictos con el repositorio remoto" -ForegroundColor Gray
    exit 1
}



