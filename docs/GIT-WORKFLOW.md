# 🔄 Git Workflow - Guía Completa

## ⚠️ IMPORTANTE: Proceso Correcto de Commit y Push

### 📋 Checklist Antes de Commit

Antes de hacer commit, **SIEMPRE** verifica:

```powershell
# 1. Ver qué archivos han cambiado
git status

# 2. Ver los cambios específicos
git diff
```

---

## ✅ Proceso Correcto (3 Pasos)

### Paso 1: ADD - Añadir Archivos al Staging

**SIEMPRE hacer esto primero:**

```powershell
cd c:\Users\NARCISOPARDOBUENDA\Desktop\ACTTAX

# Añadir TODOS los archivos modificados y nuevos
git add -A

# O añadir archivos específicos
git add src/app/blog/page.tsx
git add src/components/ui/Breadcrumbs.tsx
```

**Verificar que se añadieron:**

```powershell
git status
# Deberías ver: "Changes to be committed:" en VERDE
```

### Paso 2: COMMIT - Crear el Commit

```powershell
git commit -m "feat: Descripción clara del cambio"
```

**Verificar que el commit se creó:**

```powershell
git log --oneline -1
# Deberías ver tu nuevo commit
```

### Paso 3: PUSH - Subir a GitHub

```powershell
git push origin main
```

**Verificar que se subió:**

```powershell
git status
# Debería decir: "Your branch is up to date with 'origin/main'"
```

---

## 🚀 Comando Todo en Uno (Recomendado)

**Para hacer todo de una vez SIN ERRORES:**

```powershell
cd c:\Users\NARCISOPARDOBUENDA\Desktop\ACTTAX
git add -A
git commit -m "feat: Tu mensaje aquí"
git push origin main
git status
```

O en una sola línea:

```powershell
cd c:\Users\NARCISOPARDOBUENDA\Desktop\ACTTAX; git add -A; git commit -m "feat: Tu mensaje"; git push origin main
```

---

## ❌ Errores Comunes y Soluciones

### Error 1: "Everything up-to-date"

**Problema:** No hiciste `git add` antes del commit

**Solución:**

```powershell
git add -A
git commit -m "feat: Tu mensaje"
git push origin main
```

### Error 2: "Changes not staged for commit"

**Problema:** Los archivos no están en staging

**Solución:**

```powershell
git add -A
git status  # Verificar que aparecen en verde
git commit -m "feat: Tu mensaje"
```

### Error 3: "nothing to commit, working tree clean"

**Problema:** Ya hiciste commit pero no push

**Solución:**

```powershell
git push origin main
```

---

## 🎯 Verificación Rápida

Después de hacer push, verifica en:

1. **GitHub**: https://github.com/ActtaxIA/ACTTAX-NEW
2. **AWS Amplify**: https://eu-north-1.console.aws.amazon.com/amplify/apps/d1jo624cg4rv3f/branches/main/deployments

El deployment en AWS Amplify debería aparecer en **30-60 segundos**.

---

## 📝 Convenciones de Mensajes de Commit

Usa estos prefijos:

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de estilo (CSS, formato)
- `refactor:` - Refactorización de código
- `perf:` - Mejoras de rendimiento
- `test:` - Añadir tests
- `chore:` - Tareas de mantenimiento

**Ejemplos:**

```
feat: Añadir breadcrumbs a artículos del blog
fix: Corregir canonical URLs en páginas de servicios
docs: Actualizar README con instrucciones de deployment
style: Mejorar diseño del footer
perf: Optimizar carga de imágenes
```

---

## 🔧 Script Automatizado

Usa el script `push-deploy.ps1` para automatizar el proceso:

```powershell
cd c:\Users\NARCISOPARDOBUENDA\Desktop\ACTTAX
.\push-deploy.ps1
```

Este script hace:
1. ✅ Muestra el estado actual
2. ✅ Muestra últimos commits
3. ✅ Hace push al repositorio
4. ✅ Muestra enlace a AWS Amplify

---

## 🆘 Si Algo Sale Mal

### Deshacer último commit (SIN perder cambios):

```powershell
git reset --soft HEAD~1
```

### Deshacer cambios locales (⚠️ PIERDES LOS CAMBIOS):

```powershell
git restore .
```

### Ver diferencias antes de commit:

```powershell
git diff
```

### Ver qué está en staging:

```powershell
git diff --staged
```

---

## ✅ Checklist Final

Antes de cerrar, verifica:

- [ ] `git status` muestra "working tree clean"
- [ ] `git log -1` muestra tu commit más reciente
- [ ] GitHub muestra el nuevo commit
- [ ] AWS Amplify muestra nueva implementación
- [ ] La web en producción tiene los cambios (espera 3-5 minutos)

---

**Recuerda:** El orden es siempre **ADD → COMMIT → PUSH** 🚀



