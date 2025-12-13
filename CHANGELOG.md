# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.0] - 2024-12-03 🚀

### 🎉 LANZAMIENTO OFICIAL EN PRODUCCIÓN

Primera versión estable de la web corporativa de ACTTAX desplegada en producción con dominio personalizado.

### ✨ Características Principales

#### 🌐 Infraestructura
- **Dominio**: www.acttax.es configurado con SSL
- **Hosting**: AWS Amplify (eu-north-1)
- **CDN**: CloudFront (d1kzabs7vfit89.cloudfront.net)
- **DNS**: Gestionado por OVH con redirección acttax.es → www.acttax.es
- **SSL**: Certificado administrado por AWS Certificate Manager
- **CI/CD**: Despliegue automático desde GitHub (branch main)

#### 📝 Sistema de Blog
- 106 artículos técnicos sobre precios de transferencia, valoración y IA financiera
- Formateo automático con OpenAI GPT-4o
- Base de datos Supabase PostgreSQL
- Paginación (5, 10, 20 artículos por página)
- Filtros por categoría (3 categorías principales)
- Búsqueda textual en títulos y contenido
- Artículos destacados con carrusel interactivo
- Contador de vistas y artículos relacionados
- SEO optimizado con metadata dinámica

#### 🎨 Diseño y UX
- Diseño responsive mobile-first
- Hero con animación "VALORA" (letras animadas)
- Animaciones con Framer Motion
- Paleta de colores corporativa (azul #424dae + amarillo #F8EA5D)
- Tipografía: Gasoek One (hero), Space Grotesk (títulos), Inter (cuerpo)
- Botón "Back to Top" en todas las páginas
- Transiciones suaves y microinteracciones

#### 📄 Páginas Implementadas
- **Home**: Hero animado + secciones de servicios, testimonios, CTA
- **Servicios**: Vista general + 4 páginas detalladas
  - Operaciones Vinculadas y Precios de Transferencia
  - Valoración de Empresas
  - Inteligencia Artificial aplicada a Fiscalidad
- **Blog**: Listado con filtros + páginas individuales de artículos
- **Sobre Nosotros**: Historia, equipo, valores
- **Contacto**: Formulario funcional integrado con Resend
- **Legal**: Aviso Legal, Política de Privacidad, Política de Cookies

#### 🔧 Funcionalidades
- Formulario de contacto con validación y envío de emails
- Google Analytics (ID: G-P9TL3LBM5R)
- Sitemap XML dinámico (/sitemap.xml)
- Robots.txt optimizado para SEO
- Structured Data (JSON-LD): Organization, LocalBusiness, Article, Breadcrumbs
- Open Graph y Twitter Cards para redes sociales
- URLs canónicas para evitar contenido duplicado
- Optimización de imágenes con Next.js Image

#### 🛠️ Scripts de Utilidad
- `import-articles-to-supabase.js`: Importar artículos desde Excel
- `format-all-articles.js`: Formatear artículos con IA
- `set-publication-dates.js`: Asignar fechas de publicación
- `update-article-status.js`: Actualizar status de artículos programados
- `categorize-articles-with-ai.js`: Categorización automática con IA
- `simulate-views.js`: Simular vistas para artículos destacados

### 🔒 Seguridad
- Variables de entorno protegidas en AWS Amplify
- API keys de Supabase y OpenAI seguras
- Headers de seguridad configurados
- HTTPS obligatorio (SSL/TLS)

### 📊 SEO
- Metadata dinámica por página
- Keywords específicas por sección
- URLs amigables y semánticas
- Schema.org markup completo
- Sitemap automático con 120+ páginas

### 🎯 Métricas Iniciales
- Lighthouse Score: 95+ Performance
- 106 artículos publicados
- 3 categorías principales
- 4 servicios detallados
- Tiempo de carga inicial: < 2s

---

## [0.9.0] - 2024-11-30

### Añadido
- Integración completa con AWS Amplify
- Configuración de CI/CD automático
- Variables de entorno en Amplify
- Build settings optimizados

### Cambiado
- Optimización de imágenes para producción
- Mejoras en performance de carga
- Caché configurado en Amplify

---

## [0.8.0] - 2024-11-28

### Añadido
- Google Analytics integrado
- Formulario de contacto funcional con Resend
- Página de contacto completa
- Validación de formularios

### Mejorado
- SEO en todas las páginas
- Metadata dinámica
- Structured data completo

---

## [0.7.0] - 2024-11-25

### Añadido
- Sistema completo de blog
- Integración con Supabase
- Formateo automático con OpenAI GPT-4o
- 106 artículos importados
- Paginación y filtros
- Artículos destacados con carrusel
- Búsqueda textual

### Scripts
- Scripts de importación y formateo
- Categorización automática
- Gestión de fechas de publicación

---

## [0.6.0] - 2024-11-20

### Añadido
- Páginas de servicios completas (4 servicios)
- FAQs por servicio
- Casos de uso
- Artículos relacionados por categoría

### Mejorado
- Navegación entre servicios
- CTAs específicos por servicio
- Contenido optimizado para conversión

---

## [0.5.0] - 2024-11-15

### Añadido
- Página "Sobre Nosotros"
- Sección de testimonios
- Footer con enlaces legales
- Páginas legales (Aviso Legal, Privacidad, Cookies)

### Cambiado
- Estructura de navegación
- Diseño del footer
- Enlaces de redes sociales

---

## [0.4.0] - 2024-11-10

### Añadido
- Hero con animación "VALORA"
- Animaciones con Framer Motion
- Sección de servicios en home
- Botón "Back to Top"

### Mejorado
- Rendimiento de animaciones
- Responsive design
- Accesibilidad

---

## [0.3.0] - 2024-11-05

### Añadido
- Sistema de componentes UI (Button, Card, Input, Badge)
- Layout base (Header, Footer, Container)
- Navegación responsive con menú móvil
- Sistema de diseño completo

---

## [0.2.0] - 2024-11-01

### Añadido
- Configuración de Tailwind CSS
- Configuración de TypeScript
- Estructura de carpetas
- Componentes base

---

## [0.1.0] - 2024-10-28

### Añadido
- Inicialización del proyecto Next.js 14
- Configuración inicial
- README y documentación básica
- Repositorio en GitHub

---

## Tipos de cambios

- **Añadido**: para nuevas funcionalidades
- **Cambiado**: para cambios en funcionalidades existentes
- **Obsoleto**: para funcionalidades que pronto se eliminarán
- **Eliminado**: para funcionalidades eliminadas
- **Corregido**: para corrección de errores
- **Seguridad**: en caso de vulnerabilidades

---

**Formato de versionado**: MAJOR.MINOR.PATCH

- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH**: Correcciones de errores compatibles con versiones anteriores







