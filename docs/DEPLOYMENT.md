# 🚀 Guía de Despliegue - ACTTAX v1.0

Esta guía documenta el proceso completo de despliegue de la web de ACTTAX en producción utilizando AWS Amplify y OVH.

---

## 📋 Índice

1. [Arquitectura de Producción](#arquitectura-de-producción)
2. [Configuración DNS en OVH](#configuración-dns-en-ovh)
3. [Configuración AWS Amplify](#configuración-aws-amplify)
4. [Variables de Entorno](#variables-de-entorno)
5. [Proceso de Despliegue](#proceso-de-despliegue)
6. [Verificación Post-Despliegue](#verificación-post-despliegue)
7. [Rollback y Troubleshooting](#rollback-y-troubleshooting)

---

## 🏗️ Arquitectura de Producción

```
Usuario
   ↓
acttax.es (OVH DNS)
   ↓
Redirección 301 → www.acttax.es (OVH)
   ↓
CloudFront (d1kzabs7vfit89.cloudfront.net)
   ↓
AWS Amplify (eu-north-1)
   ↓
Next.js App
   ↓
├─ Supabase (Base de datos - artículos)
└─ OpenAI API (Formateo de contenido)
```

### Componentes

| Componente | Proveedor | Función |
|------------|-----------|---------|
| **Dominio** | OVH | Gestión DNS y redirecciones |
| **CDN** | AWS CloudFront | Distribución de contenido global |
| **Hosting** | AWS Amplify | Alojamiento de aplicación Next.js |
| **Base de Datos** | Supabase | PostgreSQL para artículos del blog |
| **SSL/TLS** | AWS Certificate Manager | Certificado SSL administrado |
| **Email** | Resend | Envío de emails del formulario de contacto |
| **IA** | OpenAI GPT-4o | Formateo automático de artículos |
| **Analytics** | Google Analytics | Seguimiento de usuarios |

---

## 🌐 Configuración DNS en OVH

### Registros DNS Configurados

#### **Registros principales (Web)**

```dns
Tipo: CNAME
Nombre: www
Destino: d1kzabs7vfit89.cloudfront.net.
TTL: 0
Descripción: Apunta www.acttax.es a CloudFront
```

```dns
Tipo: A
Nombre: @ (acttax.es)
Destino: 213.186.33.5
TTL: 0
Descripción: IP del servidor de redirección de OVH
```

```dns
Tipo: TXT
Nombre: @ (acttax.es)
Valor: "4|https://www.acttax.es"
TTL: 60
Descripción: Configuración de redirección OVH
```

#### **Registro de validación SSL (AWS)**

```dns
Tipo: CNAME
Nombre: _4986ae86c61a6d42ce5e1eeb38784312
Destino: _86c7bfce11927563ac00d93fa9d8b7ce.jkddztzszm.acm-validations.aws.
TTL: 0
Descripción: Validación del certificado SSL de AWS
```

#### **Registros de correo (OVH Email)**

⚠️ **NO MODIFICAR** - Mantener para que funcione el correo corporativo

```dns
# MX Records
acttax.es.  MX  1   mx1.mail.ovh.net.
acttax.es.  MX  5   mx2.mail.ovh.net.
acttax.es.  MX  100 mx3.mail.ovh.net.

# SPF
acttax.es.  TXT  "v=spf1 include:mx.ovh.com ~all"

# DKIM
ovhmo3023871-selector1._domainkey.acttax.es  CNAME  ovhmo3023871-selector1._domainkey.397149.mq.dkim.mail.ovh.net.
ovhmo3023871-selector2._domainkey.acttax.es  CNAME  ovhmo3023871-selector2._domainkey.397148.mq.dkim.mail.ovh.net.

# Autodiscover / Autoconfig
autoconfig.acttax.es     CNAME  mailconfig.ovh.net.
autodiscover.acttax.es   CNAME  mailconfig.ovh.net.
mail.acttax.es           CNAME  ssl0.ovh.net.
smtp.acttax.es           CNAME  ssl0.ovh.net.
imap.acttax.es           CNAME  ssl0.ovh.net.
pop3.acttax.es           CNAME  ssl0.ovh.net.

# Webmail
webmail.acttax.es        A      213.186.33.5
www.webmail.acttax.es    A      213.186.33.5
```

### Redirección Web en OVH

**Configuración de redirección visible permanente:**

```
Desde: acttax.es
Hacia: https://www.acttax.es
Tipo: Redirección visible permanente (301)
Con HTTPS: Sí
```

Esta configuración asegura que:
- `http://acttax.es` → `https://www.acttax.es`
- `https://acttax.es` → `https://www.acttax.es`
- `http://www.acttax.es` → `https://www.acttax.es`

---

## ☁️ Configuración AWS Amplify

### Información del Proyecto

| Campo | Valor |
|-------|-------|
| **Región** | eu-north-1 (Estocolmo) |
| **App ID** | d1jo624cg4rv3f |
| **Nombre** | ACTTAX-NEW |
| **Framework** | Next.js - SSR |
| **Branch principal** | main |
| **URL Amplify** | https://main.d1jo624cg4rv3f.amplifyapp.com |
| **URL Producción** | https://www.acttax.es |

### Configuración de Build

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci --cache .npm --prefer-offline
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - .next/cache/**/*
      - .npm/**/*
      - node_modules/**/*
```

### Configuración de Dominio

1. **En AWS Amplify Console**:
   - Hosting → Administración de dominios
   - Agregar dominio: `acttax.es`
   - Subdominios: `www` (principal)
   - Redirección: `acttax.es` → `www.acttax.es` (✅ activado)
   - Certificado SSL: Amplify administrado

2. **Estado del dominio**:
   ```
   Estado: ✅ Disponible
   Certificado SSL: ✅ Amplify administrado
   Dominio principal: www.acttax.es
   Redirección: acttax.es → www.acttax.es
   ```

### Variables de Entorno en Amplify

Configuradas en: **Build settings → Environment variables**

```env
# Supabase (Base de datos)
NEXT_PUBLIC_SUPABASE_URL=https://rivwqzwxkiwjdkbyniyo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[ANON_KEY]
SUPABASE_SERVICE_ROLE_KEY=[SERVICE_ROLE_KEY]

# OpenAI (IA para formateo)
NEXT_PUBLIC_OPENAI_API_KEY=[API_KEY]
OPENAI_API_KEY=[API_KEY]

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.acttax.es

# Resend (Emails)
RESEND_API_KEY=[API_KEY]

# Google Analytics
NEXT_PUBLIC_GA_ID=G-P9TL3LBM5R
```

⚠️ **Nota**: Los valores entre `[...]` están protegidos y deben configurarse en la consola de AWS Amplify.

### CI/CD Automático

**Trigger**: Push a branch `main` en GitHub

**Proceso**:
1. Detección automática del cambio
2. Checkout del código
3. Instalación de dependencias (`npm ci`)
4. Build de producción (`npm run build`)
5. Deploy automático
6. Invalidación de caché de CloudFront
7. Notificación de estado

**Tiempo promedio**: 3-5 minutos

---

## 🔐 Variables de Entorno

### Archivo .env.local (Desarrollo)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://rivwqzwxkiwjdkbyniyo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

# OpenAI
NEXT_PUBLIC_OPENAI_API_KEY=tu_openai_key
OPENAI_API_KEY=tu_openai_key

# Resend
RESEND_API_KEY=tu_resend_key

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics
NEXT_PUBLIC_GA_ID=G-P9TL3LBM5R
```

### Archivo .env.production (Producción - no commitear)

```env
NEXT_PUBLIC_SUPABASE_URL=https://rivwqzwxkiwjdkbyniyo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
NEXT_PUBLIC_OPENAI_API_KEY=tu_openai_key
OPENAI_API_KEY=tu_openai_key
RESEND_API_KEY=tu_resend_key
NEXT_PUBLIC_SITE_URL=https://www.acttax.es
NEXT_PUBLIC_GA_ID=G-P9TL3LBM5R
```

⚠️ **Importante**: Las variables de producción se configuran directamente en AWS Amplify, NO en el repositorio.

---

## 🚀 Proceso de Despliegue

### Despliegue Manual (desde local)

```bash
# 1. Verificar estado del proyecto
git status

# 2. Asegurarse de estar en la rama main
git checkout main

# 3. Hacer commit de cambios
git add .
git commit -m "feat: descripción del cambio"

# 4. Push a GitHub (trigger automático)
git push origin main

# 5. Verificar en AWS Amplify Console
# El despliegue se iniciará automáticamente
```

### Despliegue desde GitHub (Automático)

Cualquier push a la rama `main` desencadena automáticamente:

1. **Webhook** de GitHub notifica a AWS Amplify
2. **Build** inicia automáticamente
3. **Deploy** si el build es exitoso
4. **Notificación** por email (opcional)

### Verificar Estado del Build

1. Ir a AWS Amplify Console
2. Seleccionar app ACTTAX-NEW
3. Ver el último deployment en la sección "Deployments"
4. Estados posibles:
   - 🟢 **Succeed**: Deploy exitoso
   - 🟡 **In Progress**: En progreso
   - 🔴 **Failed**: Error (ver logs)

---

## ✅ Verificación Post-Despliegue

### Checklist de Verificación

#### 1. **Acceso y SSL**

```bash
# Verificar DNS
nslookup www.acttax.es
nslookup acttax.es

# Verificar redirecciones
curl -I http://acttax.es
curl -I http://www.acttax.es
curl -I https://acttax.es
```

Debe devolver:
- `www.acttax.es` → IP de CloudFront
- `acttax.es` → Redirección 301 a `https://www.acttax.es`
- SSL válido (certificado de Amazon)

#### 2. **Páginas Principales**

Verificar manualmente en el navegador:

- [x] https://www.acttax.es (Home)
- [x] https://www.acttax.es/servicios
- [x] https://www.acttax.es/blog
- [x] https://www.acttax.es/sobre-nosotros
- [x] https://www.acttax.es/contacto

#### 3. **Funcionalidades**

- [x] Formulario de contacto envía emails
- [x] Paginación del blog funciona
- [x] Filtros de categorías funcionan
- [x] Búsqueda de artículos funciona
- [x] Artículos destacados se muestran
- [x] Navegación móvil funciona
- [x] Botón "Back to Top" aparece al hacer scroll

#### 4. **SEO**

```bash
# Verificar robots.txt
curl https://www.acttax.es/robots.txt

# Verificar sitemap
curl https://www.acttax.es/sitemap.xml

# Verificar metadata de una página
curl -s https://www.acttax.es | grep -i "<meta"
```

#### 5. **Performance**

Usar herramientas:
- **Lighthouse**: Score > 90
- **PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com

Métricas objetivo:
- FCP (First Contentful Paint): < 1.8s
- LCP (Largest Contentful Paint): < 2.5s
- TTI (Time to Interactive): < 3.8s
- CLS (Cumulative Layout Shift): < 0.1

#### 6. **Google Analytics**

Verificar en Google Analytics que:
- Se reciben eventos de pageview
- Las páginas se rastrean correctamente
- El tracking ID es correcto: `G-P9TL3LBM5R`

---

## 🔄 Rollback y Troubleshooting

### Rollback a Versión Anterior

#### Opción 1: Desde AWS Amplify Console

1. Ir a **Deployments**
2. Encontrar el deployment exitoso anterior
3. Click en **"..."** → **"Redeploy this version"**
4. Confirmar

#### Opción 2: Desde Git

```bash
# Ver historial de commits
git log --oneline

# Revertir al commit anterior
git revert HEAD

# O hacer reset (destructivo)
git reset --hard <commit-hash>
git push --force origin main
```

⚠️ **Cuidado con `--force`**: Solo usar en emergencias.

### Problemas Comunes y Soluciones

#### 🔴 Build Failed

**Error**: `npm install` falla

**Solución**:
```bash
# Limpiar cache local
rm -rf node_modules package-lock.json
npm install
npm run build

# Si funciona local, commit y push
```

**Error**: TypeScript errors

**Solución**:
```bash
# Verificar tipos localmente
npm run type-check

# Corregir errores y volver a intentar
```

#### 🔴 DNS No Resuelve

**Problema**: `www.acttax.es` no carga

**Pasos**:
1. Verificar en OVH que el CNAME esté correcto
2. Esperar propagación DNS (hasta 48h, normalmente 15-30 min)
3. Probar con `nslookup` o `dig`:

```bash
nslookup www.acttax.es
dig www.acttax.es
```

#### 🔴 SSL No Válido

**Problema**: Certificado SSL muestra error

**Solución**:
1. Ir a AWS Amplify → Administración de dominios
2. Verificar estado del certificado
3. Si está "Pendiente", esperar validación (5-30 min)
4. Si falla, eliminar dominio y volver a añadirlo

#### 🔴 Variables de Entorno No Funcionan

**Problema**: La app no encuentra variables de entorno

**Solución**:
1. Verificar en AWS Amplify → Build settings → Environment variables
2. Asegurarse de que todas las variables estén presentes
3. **Rebuild** la aplicación después de añadir/modificar variables

#### 🔴 Formulario de Contacto No Envía

**Problema**: El formulario no envía emails

**Verificar**:
1. API key de Resend correcta
2. Dominio verificado en Resend
3. Logs en AWS Amplify → Monitoring

---

## 📞 Contacto y Soporte

Para problemas técnicos:

- **AWS Amplify**: Soporte desde consola AWS
- **OVH**: https://www.ovh.es/soporte/
- **Supabase**: https://supabase.com/support
- **Resend**: https://resend.com/support

---

## 📝 Notas Adicionales

### Mantenimiento Regular

- **Dependencias**: Actualizar cada mes
- **Seguridad**: Revisar vulnerabilidades con `npm audit`
- **Performance**: Monitorear con Lighthouse mensualmente
- **Backups**: Supabase hace backups automáticos diarios
- **Logs**: Revisar logs de Amplify semanalmente

### Próximas Mejoras

- [ ] Implementar caché avanzado en CloudFront
- [ ] Configurar alertas en AWS CloudWatch
- [ ] Añadir pre-rendering de páginas estáticas
- [ ] Optimizar imágenes con WebP
- [ ] Implementar lazy loading avanzado

---

**Última actualización**: 3 de diciembre de 2024
**Versión**: 1.0.0
**Responsable**: Narciso Pardo - ACTTAX





