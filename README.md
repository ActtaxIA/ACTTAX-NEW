# 🏛️ ACTTAX - Web Corporativa

> **Despacho de abogados y economistas en Murcia especializado en precios de transferencia, operaciones vinculadas y valoración empresarial.**

[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-black)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)]()

---

## 📋 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Desarrollo](#-instalación-y-desarrollo)
- [Progreso del Proyecto](#-progreso-del-proyecto)
- [Guía de Estilos](#-guía-de-estilos)
- [SEO y Metadatos](#-seo-y-metadatos)
- [Despliegue](#-despliegue)
- [Roadmap Futuro](#-roadmap-futuro)

---

## 📝 Descripción

ACTTAX es la página web corporativa de un despacho especializado en **fiscalidad avanzada**, con foco en:

- **Precios de Transferencia**: Documentación y defensa ante inspecciones fiscales
- **Operaciones Vinculadas**: Valoración y justificación de transacciones entre partes relacionadas
- **Valoración de Empresas**: Informes periciales y valoraciones financieras
- **Inteligencia Artificial**: IA aplicada a fiscalidad y automatización de procesos financieros

### 🎯 Propuesta de Valor

A diferencia de los despachos tradicionales, ACTTAX presenta una **imagen transgresora y moderna**, demostrando que la especialización fiscal puede comunicarse de forma innovadora sin perder rigor profesional.

### 👤 Fundador

**Narciso Pardo** - Asesor fiscal especializado en precios de transferencia con base en Murcia, España.

---

## ✨ Características

### Implementadas
- [x] Diseño responsive mobile-first
- [x] Animaciones de entrada (hero "VALORA" con letras animadas)
- [x] Sistema de blog dinámico con Supabase
- [x] Formateo automático de artículos con IA (OpenAI GPT-4o)
- [x] Paginación y filtros en el blog (categorías, búsqueda)
- [x] Artículos destacados con carrusel
- [x] SEO optimizado con metadata dinámica
- [x] Formulario de contacto funcional
- [x] Sitemap XML automático

### Planificadas (Fase 2)
- [ ] Chat con IA para consultas básicas
- [ ] Calculadora de operaciones vinculadas
- [ ] Área de clientes con acceso privado
- [ ] Newsletter con suscripción
- [ ] Multi-idioma (ES/EN)

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Versión | Propósito |
|-----------|------------|---------|-----------|
| **Framework** | Next.js | 14.x | App Router, SSR, API Routes |
| **Lenguaje** | TypeScript | 5.x | Tipado estático |
| **Estilos** | Tailwind CSS | 3.4.x | Utility-first CSS + Typography |
| **Animaciones** | Framer Motion | 11.x | Animaciones declarativas |
| **Base de Datos** | Supabase | - | PostgreSQL para artículos del blog |
| **IA** | OpenAI GPT-4o | - | Formateo automático de contenido |
| **Iconos** | Lucide React | - | Iconografía consistente |
| **Formularios** | React Hook Form | 7.x | Validación de formularios |
| **Email** | Resend | - | Envío de emails de contacto |
| **Linting** | ESLint + Prettier | - | Calidad de código |

---

## 📁 Estructura del Proyecto

```
ACTTAX/
├── 📄 README.md                    # Este archivo
├── 📄 package.json                 # Dependencias y scripts
├── 📄 next.config.js               # Configuración de Next.js
├── 📄 tailwind.config.ts           # Configuración de Tailwind
├── 📄 tsconfig.json                # Configuración de TypeScript
│
├── 📂 docs/                        # Documentación del proyecto
│   ├── 📄 SITEMAP.md               # Mapa completo de URLs
│   ├── 📄 CHANGELOG.md             # Historial de cambios
│   └── 📄 DEPLOYMENT.md            # Guía de despliegue en AWS
│
├── 📂 public/                      # Archivos estáticos
│   ├── 📂 images/
│   │   ├── 📂 logo/                # Variantes del logo
│   │   │   ├── logo_acttax4.png
│   │   │   ├── logo_acttax4-white.png
│   │   │   └── logo_acttax_negro.png
│   │   ├── 📂 team/                # Fotos del equipo
│   │   ├── 📂 testimonials/        # Fotos de testimonios
│   │   ├── 📂 blog/                # Imágenes de artículos
│   │   └── 📂 services/            # Iconos/imágenes de servicios
│   ├── favicon.ico
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml                 # Generado automáticamente
│
├── 📂 src/
│   ├── 📂 app/                     # Next.js App Router
│   │   ├── 📄 layout.tsx           # Layout raíz (HTML, metadata global)
│   │   ├── 📄 page.tsx             # Home page
│   │   ├── 📄 globals.css          # Estilos globales + Tailwind
│   │   ├── 📄 not-found.tsx        # Página 404
│   │   │
│   │   ├── 📂 (marketing)/         # Grupo de rutas marketing
│   │   │   ├── 📂 sobre-nosotros/
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📂 contacto/
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📂 servicios/
│   │   │       ├── 📄 page.tsx     # Overview de servicios
│   │   │       ├── 📂 precios-transferencia/
│   │   │       │   └── 📄 page.tsx
│   │   │       ├── 📂 operaciones-vinculadas/
│   │   │       │   └── 📄 page.tsx
│   │   │       ├── 📂 valoracion-empresas/
│   │   │       │   └── 📄 page.tsx
│   │   │       └── 📂 inteligencia-artificial/
│   │   │           └── 📄 page.tsx
│   │   │
│   │   ├── 📂 blog/
│   │   │   ├── 📄 page.tsx         # Listado de artículos con filtros y paginación
│   │   │   ├── 📄 layout.tsx       # Layout del blog
│   │   │   └── 📂 [slug]/
│   │   │       ├── 📄 page.tsx     # Artículo individual (dinámico)
│   │   │       └── 📄 not-found.tsx # 404 para artículos
│   │   │
│   │   ├── 📂 herramientas/        # Futuras herramientas interactivas
│   │   │   ├── 📄 page.tsx         # Listado de herramientas
│   │   │   ├── 📂 calculadora-ov/
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📂 chat-fiscal/
│   │   │       └── 📄 page.tsx
│   │   │
│   │   ├── 📂 legal/
│   │   │   ├── 📂 aviso-legal/
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📂 privacidad/
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📂 cookies/
│   │   │       └── 📄 page.tsx
│   │   │
│   │   └── 📂 api/                 # API Routes
│   │       ├── 📂 contact/
│   │       │   └── 📄 route.ts     # POST /api/contact
│   │       ├── 📂 newsletter/
│   │       │   └── 📄 route.ts     # POST /api/newsletter
│   │       └── 📂 chat/
│   │           └── 📄 route.ts     # POST /api/chat (futuro IA)
│   │
│   ├── 📂 components/
│   │   ├── 📂 ui/                  # Componentes UI reutilizables
│   │   │   ├── 📄 Button.tsx
│   │   │   ├── 📄 Card.tsx
│   │   │   ├── 📄 Input.tsx
│   │   │   ├── 📄 Badge.tsx
│   │   │   ├── 📄 Modal.tsx
│   │   │   └── 📄 index.ts         # Barrel export
│   │   │
│   │   ├── 📂 layout/              # Componentes de layout
│   │   │   ├── 📄 Header.tsx
│   │   │   ├── 📄 Footer.tsx
│   │   │   ├── 📄 MobileMenu.tsx
│   │   │   ├── 📄 Container.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📂 sections/            # Secciones de página
│   │   │   ├── 📄 Hero.tsx         # Hero con animación "VALORA"
│   │   │   ├── 📄 Services.tsx
│   │   │   ├── 📄 About.tsx
│   │   │   ├── 📄 Testimonials.tsx
│   │   │   ├── 📄 BlogPreview.tsx
│   │   │   ├── 📄 CTA.tsx
│   │   │   ├── 📄 Contact.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📂 blog/                # Componentes del blog
│   │   │   ├── 📄 PostCard.tsx
│   │   │   ├── 📄 PostList.tsx
│   │   │   ├── 📄 PostHeader.tsx
│   │   │   ├── 📄 TableOfContents.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📂 forms/               # Componentes de formularios
│   │   │   ├── 📄 ContactForm.tsx
│   │   │   ├── 📄 NewsletterForm.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   └── 📂 animations/          # Componentes con animación
│   │       ├── 📄 AnimatedLetters.tsx  # Para el hero "VALORA"
│   │       ├── 📄 FadeIn.tsx
│   │       ├── 📄 SlideIn.tsx
│   │       └── 📄 index.ts
│   │
│   │
│   │
│   ├── 📂 lib/                     # Utilidades y configuración
│   │   ├── 📄 utils.ts             # Funciones helper (cn, formatDate...)
│   │   ├── 📄 constants.ts         # Constantes del sitio
│   │   ├── 📄 supabase.ts          # Cliente Supabase y tipos
│   │   ├── 📄 aiFormatter.ts       # Formateo de artículos con OpenAI
│   │   ├── 📄 articleFormatter.ts  # Utilidades para artículos
│   │   └── 📄 seo.ts               # Helpers de SEO
│   │
│   ├── 📂 hooks/                   # Custom React hooks
│   │   ├── 📄 useMediaQuery.ts
│   │   ├── 📄 useScrollPosition.ts
│   │   └── 📄 useIntersection.ts
│   │
│   ├── 📂 types/                   # TypeScript types/interfaces
│   │   ├── 📄 index.ts
│   │   ├── 📄 blog.ts
│   │   └── 📄 services.ts
│   │
│   └── 📂 data/                    # Datos estáticos
│       ├── 📄 services.ts          # Info de servicios
│       ├── 📄 testimonials.ts      # Testimonios
│       └── 📄 navigation.ts        # Estructura de navegación
│
└── 📂 scripts/                     # Scripts de utilidad
    ├── 📄 import-articles-to-supabase.js  # Importar artículos desde Excel
    ├── 📄 format-all-articles.js          # Formatear artículos con IA
    ├── 📄 set-publication-dates.js        # Asignar fechas de publicación
    └── 📄 simulate-views.js               # Simular vistas para artículos destacados
```

---

## 📝 Sistema de Blog y Formateo con IA

### Arquitectura del Blog

El blog utiliza **Supabase** como base de datos para almacenar los artículos, permitiendo gestión dinámica del contenido sin necesidad de rebuilds.

### Proceso de Formateo Automático

Los artículos se formatean automáticamente usando **OpenAI GPT-4o** para convertir texto plano en HTML estructurado y profesional:

1. **Importación**: Los artículos se importan desde Excel a Supabase usando `scripts/import-articles-to-supabase.js`
2. **Formateo**: El script `scripts/format-all-articles.js` procesa todos los artículos con IA
3. **Almacenamiento**: El HTML formateado se guarda en la columna `formatted_content` de Supabase
4. **Renderizado**: La página del artículo renderiza directamente el HTML formateado

### Características del Blog

- ✅ **Paginación**: 5, 10 o 20 artículos por página
- ✅ **Filtros por categoría**: Filtrado dinámico de artículos
- ✅ **Búsqueda textual**: Búsqueda en títulos y contenido
- ✅ **Artículos destacados**: Carrusel con los 5 artículos más visitados
- ✅ **Formato profesional**: HTML estructurado con h2/h3, listas (ul/ol), párrafos cortos y términos destacados

### Scripts Disponibles

```bash
# Importar artículos desde Excel a Supabase
node scripts/import-articles-to-supabase.js

# Formatear todos los artículos con IA
node scripts/format-all-articles.js

# Asignar fechas de publicación
node scripts/set-publication-dates.js

# Simular vistas para artículos destacados
node scripts/simulate-views.js
```

### Variables de Entorno Requeridas

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

# OpenAI (para formateo de artículos)
OPENAI_API_KEY=tu_openai_api_key
```

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Instalación

```bash
# Clonar o acceder al directorio
cd ACTTAX

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Compila el proyecto para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run format` | Formatea código con Prettier |
| `npm run type-check` | Verifica tipos de TypeScript |

---

## 📊 Progreso del Proyecto

### Fase 1: Fundamentos ✅ Completado
| Tarea | Estado | Notas |
|-------|--------|-------|
| Documentación inicial (README, SITEMAP) | ✅ Completado | |
| Configuración del proyecto (Next.js, TS, Tailwind) | ✅ Completado | |
| Sistema de diseño (colores, tipografía, componentes UI) | ✅ Completado | |
| Layout base (Header, Footer, Container) | ✅ Completado | |
| Página Home | ✅ Completado | |
| Hero con animación "VALORA" | ✅ Completado | Animaciones responsive |

### Fase 2: Páginas Principales
| Tarea | Estado | Notas |
|-------|--------|-------|
| Página Sobre Nosotros | ⬜ Pendiente | |
| Página Servicios (overview) | ⬜ Pendiente | |
| Página Precios de Transferencia | ⬜ Pendiente | |
| Página Operaciones Vinculadas | ⬜ Pendiente | |
| Página Valoración de Empresas | ⬜ Pendiente | |
| Página Inteligencia Artificial | ⬜ Pendiente | IA aplicada a fiscalidad |
| Página Contacto | ⬜ Pendiente | |
| Páginas Legales | ⬜ Pendiente | |

### Fase 3: Blog ✅ Completado
| Tarea | Estado | Notas |
|-------|--------|-------|
| Integración con Supabase | ✅ Completado | Base de datos PostgreSQL |
| Listado de artículos | ✅ Completado | Con paginación y filtros |
| Página de artículo individual | ✅ Completado | Renderizado dinámico |
| Formateo automático con IA | ✅ Completado | OpenAI GPT-4o |
| Importación desde Excel | ✅ Completado | Script automatizado |
| Artículos destacados | ✅ Completado | Carrusel con top 5 |

### Fase 4: Funcionalidades Avanzadas
| Tarea | Estado | Notas |
|-------|--------|-------|
| Formulario de contacto funcional | ⬜ Pendiente | |
| Google Analytics | ⬜ Pendiente | |
| SEO (metadata, sitemap, robots) | ⬜ Pendiente | |
| Optimización de imágenes | ⬜ Pendiente | |
| Testing responsive | ⬜ Pendiente | |

### Fase 5: Herramientas (Futuro)
| Tarea | Estado | Notas |
|-------|--------|-------|
| Calculadora de Operaciones Vinculadas | ⬜ Futuro | |
| Chat con IA fiscal | ⬜ Futuro | |
| Área de clientes | ⬜ Futuro | |
| Newsletter | ⬜ Futuro | |

---

## 🎨 Guía de Estilos

### Paleta de Colores

```css
/* Colores Principales */
--color-primary: #424dae;       /* Azul corporativo */
--color-primary-dark: #2d3578;  /* Azul oscuro (hover) */
--color-primary-light: #6b74c9; /* Azul claro */

/* Acentos */
--color-accent: #F8EA5D;        /* Amarillo (CTAs destacados) */
--color-accent-dark: #e6d84a;

/* Neutros */
--color-white: #ffffff;
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;
--color-black: #000000;

/* Semánticos */
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
```

### Tipografía

| Uso | Fuente | Peso | Tamaño |
|-----|--------|------|--------|
| Headlines (Hero) | Gasoek One | 400 | 60px - 350px (responsive) |
| Títulos | Space Grotesk | 700 | 24px - 80px |
| Cuerpo | Inter | 400 | 16px - 18px |
| UI/Menú | Space Grotesk | 600-700 | 14px - 18px |

### Breakpoints (Mobile-First)

```css
/* Tailwind defaults */
sm: 640px   /* Móviles grandes */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

---

## 🔍 SEO y Metadatos

### Metadata por Defecto

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'ACTTAX | Precios de Transferencia y Valoración de Empresas',
    template: '%s | ACTTAX'
  },
  description: 'Despacho de abogados y economistas en Murcia especializado en precios de transferencia, operaciones vinculadas y valoración empresarial.',
  keywords: [
    'precios de transferencia',
    'operaciones vinculadas',
    'valoración de empresas',
    'asesoría fiscal Murcia',
    'transfer pricing España'
  ],
  authors: [{ name: 'Narciso Pardo' }],
  creator: 'ACTTAX',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.acttax.es',
    siteName: 'ACTTAX',
    // ... más configuración
  },
  twitter: {
    card: 'summary_large_image',
    // ... más configuración
  },
  robots: {
    index: true,
    follow: true,
  }
}
```

### URLs Canónicas

Todas las páginas incluyen URL canónica automática para evitar contenido duplicado.

### Structured Data (JSON-LD)

- **Organization**: Datos de la empresa
- **LocalBusiness**: Para SEO local en Murcia
- **Article**: Para posts del blog
- **BreadcrumbList**: Navegación estructurada

---

## ☁️ Despliegue

### Opción A: AWS Amplify (Recomendada)

```bash
# Instalar Amplify CLI
npm install -g @aws-amplify/cli

# Configurar
amplify configure

# Inicializar proyecto
amplify init

# Deploy
amplify publish
```

### Opción B: AWS S3 + CloudFront (Exportación Estática)

```bash
# Build estático
npm run build

# Los archivos generados en /out se suben a S3
# CloudFront como CDN
```

### Variables de Entorno (Producción)

```env
# .env.production
NEXT_PUBLIC_SITE_URL=https://www.acttax.es
RESEND_API_KEY=re_xxxxxxxxxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# OpenAI (para formateo de artículos)
OPENAI_API_KEY=sk-xxxxxxxxxxxx
```

---

## 🗺️ Roadmap Futuro

### Q1 2025
- [x] Documentación y planificación
- [ ] Desarrollo web completa
- [ ] Blog funcional
- [ ] Deploy en AWS

### Q2 2025
- [ ] Calculadora de Operaciones Vinculadas
- [ ] Integración Google Analytics
- [ ] Optimización SEO avanzada

### Q3 2025
- [ ] Chat con IA para consultas fiscales
- [ ] Área de clientes
- [ ] Newsletter automatizado

### Q4 2025
- [ ] Multi-idioma (ES/EN)
- [ ] Integraciones con herramientas de CRM

---

## 📞 Contacto

**ACTTAX - Derecho Fiscal y Tributario, S.L.**

- 🌐 Web: [www.acttax.es](https://www.acttax.es)
- 📧 Email: contacto@acttax.es
- 📍 Ubicación: Murcia, España

---

## 📄 Licencia

Este proyecto es privado y propietario de ACTTAX.

© 2025 ACTTAX - Todos los derechos reservados.
