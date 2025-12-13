# 📄 Página Directrices OCDE - Documentación

**Fecha de creación**: 7 de diciembre de 2024  
**URL**: https://www.acttax.es/recursos/directrices-ocde-precios-transferencia  
**Estado**: ✅ Publicada - Fase 1 Completa

---

## 📋 Resumen Ejecutivo

Se ha creado una página completa de contenido evergreen sobre las **Directrices de la OCDE sobre Precios de Transferencia**, optimizada para capturar tráfico informacional de búsquedas relacionadas con "directrices ocde precios transferencia" y convertir ese tráfico en leads cualificados.

### Métricas de Contenido

- **Palabras**: ~2.500 palabras (excede mínimo de 2.000)
- **Tiempo de lectura**: 15 minutos
- **Secciones**: 10 secciones principales
- **FAQs**: 5 preguntas frecuentes respondidas
- **Enlaces externos**: 4 recursos oficiales OCDE
- **Internal links**: Enlaces desde /servicios/operaciones-vinculadas

---

## 🎯 Objetivo Estratégico

### Problema Detectado
- **Alto volumen de impresiones** en "directrices ocde precios transferencia"
- **Bajo CTR** porque faltaba contenido informacional específico
- Competencia con páginas puramente educativas de instituciones

### Solución Implementada
Crear página "hub" que:
1. Satisface intención informativa (educar sobre Directrices OCDE)
2. Demuestra expertise y autoridad (E-E-A-T)
3. Captura tráfico cualificado
4. Convierte a través de CTAs suaves (consulta gratuita)

---

## 📐 Estructura de la Página

### 1. Hero Section
- **H1**: "Directrices de la OCDE sobre Precios de Transferencia"
- Badge "Recurso Actualizado 2024"
- Descripción clara del contenido
- Metadatos: Última actualización + tiempo de lectura

### 2. Introducción (¿Qué son?)
- Definición clara y simple
- Contexto histórico básico
- Por qué son importantes
- A quién afectan (empresas + administraciones)
- Aplicación en España (Modelo 232, art. 18 LIS)

### 3. Historia y Evolución
- **Timeline interactivo** desde 1979 hasta 2024:
  - 1979: Primera publicación
  - 1995: Directrices oficiales
  - 2010: Actualización importante
  - 2015-2017: Proyecto BEPS
  - 2022: Versión consolidada actual
  - 2024: BEPS 2.0 (Pilares Uno y Dos)

### 4. Los 10 Capítulos de las Directrices
Cada capítulo con:
- Número romano (I-X)
- Título completo
- Descripción ejecutiva
- 3 puntos clave

**Capítulos cubiertos**:
- I: Principio de Plena Competencia
- II: Métodos de Precios de Transferencia
- III: Análisis de Comparabilidad
- IV: Procedimientos Administrativos
- V: Documentación
- VI: Activos Intangibles
- VII: Servicios Intragrupo
- VIII: Acuerdos de Reparto de Costes
- IX: Reestructuraciones Empresariales
- X: Materias Primas (Commodities)

### 5. Novedades y Actualizaciones 2024
- **BEPS 2.0**: Pilares Uno y Dos
- Amount A (redistribución de beneficios)
- Amount B (simplificación distribuidores)
- Pilar Dos (impuesto mínimo global 15%)
- Consultas públicas en curso

### 6. Recursos Oficiales OCDE
4 enlaces a recursos oficiales:
- Directrices OCDE 2022 (versión completa)
- Portal de Transfer Pricing OCDE
- Informes País por País (CBC)
- BEPS - Erosión de Base

### 7. Cómo Implementar las Directrices
- **Checklist de cumplimiento** (8 pasos)
- CTA destacado: Consulta gratuita + Ver servicios
- Diseño premium con fondo primary

### 8. FAQs (5 preguntas)
- ¿Son obligatorias en España?
- ¿Qué países las aplican?
- ¿Relación con Modelo 232?
- ¿Qué cambió en versión 2022?
- ¿Frecuencia de actualizaciones?

### 9. CTA Final
- CTASection reutilizable
- Variante "dark"
- Mensaje: "¿Necesitas asesoramiento sobre Directrices OCDE?"

---

## 🔍 SEO On-Page Implementado

### Metadata Completa
```typescript
title: "Directrices OCDE Precios de Transferencia 2024 | Guía Completa"
description: "Guía actualizada sobre las Directrices OCDE de Precios de Transferencia. Capítulos, novedades BEPS 2.0 y cómo implementarlas en España."
canonical: "https://www.acttax.es/recursos/directrices-ocde-precios-transferencia"
```

### Keywords Target
- directrices ocde precios de transferencia (principal)
- oecd transfer pricing guidelines
- directrices ocde 2022
- guía precios transferencia ocde
- beps ocde
- principio de plena competencia
- arm's length principle

### Structured Data (JSON-LD)
1. **Article Schema**
   - @type: Article
   - Autor: Narciso Pardo
   - Publisher: ACTTAX
   - datePublished/Modified: 2024-12-07
   - articleSection: Recursos Fiscales

2. **Breadcrumb Schema**
   - Inicio > Recursos > Directrices OCDE

### Open Graph Completo
- title, description, url, locale
- type: article
- images: og-image.jpg (1200x630)

---

## 🔗 Internal Linking Implementado

### 1. Desde /servicios/operaciones-vinculadas
**Tarjeta destacada** después de FAQs:
- Diseño premium con fondo degradado
- Badge "Recurso Recomendado"
- Título + descripción
- CTA: "Leer Guía Completa"
- Metadata: tiempo de lectura + actualización

**Visible solo** cuando `service.id === 'operaciones-vinculadas'`

### 2. Footer Navigation
Nueva sección **"Recursos"** en footer:
- Grid ajustado a 6 columnas (lg:grid-cols-6)
- Enlace directo a "Directrices OCDE"
- Escalable para futuros recursos

### 3. Breadcrumbs
- Componente Breadcrumbs con tema claro
- Inicio > Recursos > Directrices OCDE
- Incluye structured data

---

## 📊 Sitemap Actualizado

```typescript
{
  url: `${baseUrl}/recursos/directrices-ocde-precios-transferencia`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9, // Alta prioridad (solo superada por homepage)
}
```

**Prioridades comparadas**:
- Homepage: 1.0
- Servicios: 0.9
- **Recursos OCDE: 0.9** ⭐
- Blog: 0.9
- Páginas de servicios: 0.8

---

## 🎨 Diseño y UX

### Componentes Reutilizados
- `Container`
- `Breadcrumbs`
- `Button`
- `CTASection`
- Iconos de `lucide-react`

### Diseño Personalizado
- **Hero gradient**: from-primary to-primary-700
- **Timeline**: Círculos numerados con línea vertical
- **Capítulos**: Cards con hover effects
- **Recursos OCDE**: Cards con enlace externo
- **Checklist**: Items con CheckCircle icons

### Responsive
- Mobile-first design
- Grid adaptativos (md:grid-cols-2, lg:grid-cols-3)
- Texto responsive (text-4xl md:text-5xl lg:text-6xl)

---

## 📈 Métricas de Éxito Esperadas

### Corto Plazo (1-3 meses)
- [ ] CTR "directrices ocde" pasa de <2% a 8-12%
- [ ] Posición en SERPs: Top 5 en España
- [ ] Tiempo en página: >4 minutos (contenido denso)
- [ ] Tasa de rebote: <60%

### Medio Plazo (3-6 meses)
- [ ] 300-500 visitantes/mes desde keyword target
- [ ] 5-10 leads cualificados/mes
- [ ] Featured snippet en Google (objetivo ambicioso)
- [ ] Enlaces desde otros sitios fiscales (backlinks naturales)

### Largo Plazo (6-12 meses)
- [ ] Top 3 en SERPs para keyword principal
- [ ] 1.000+ visitantes/mes
- [ ] 20+ leads/mes
- [ ] Autoridad de dominio aumentada

---

## 🔄 Plan de Mantenimiento

### Trimestral (cada 3 meses)
- [ ] Revisar novedades OCDE oficiales
- [ ] Actualizar sección "Novedades 2024"
- [ ] Verificar que enlaces externos funcionen
- [ ] Actualizar fecha de "Última actualización"

### Semestral (cada 6 meses)
- [ ] Revisar estadísticas y casos prácticos
- [ ] Añadir nuevos FAQs basados en consultas reales
- [ ] Optimizar según datos de Google Analytics
- [ ] Mejorar CTAs según tasa de conversión

### Anual (cada año)
- [ ] Revisión completa del contenido
- [ ] Actualizar título (ej: "2025" en vez de "2024")
- [ ] Añadir nuevos capítulos si OCDE los publica
- [ ] Fotografías/diagramas nuevos

---

## 🚀 Próximos Pasos (Fase 2 - Opcional)

### Semana 2-4: Amplificación
1. **Crear 3-4 artículos satélite**:
   - "Cómo aplicar el Capítulo I de las Directrices OCDE"
   - "Diferencias entre Directrices OCDE y normativa española"
   - "Amount A y Amount B del BEPS 2.0: Guía práctica"
   - "Los 5 métodos de precios de transferencia según OCDE"

2. **Promoción**:
   - Newsletter a base de datos
   - Post en LinkedIn (tema perfecto para profesionales)
   - Compartir en grupos fiscales

3. **Internal linking masivo**:
   - Revisar 106 artículos del blog
   - Añadir enlaces a Directrices OCDE donde corresponda
   - Anchor texts variados

### Mes 2: Contenido Multimedia
- [ ] Infografía: "Los 10 Capítulos OCDE en una imagen"
- [ ] Timeline interactivo (JavaScript)
- [ ] Video explicativo corto (3-5 min) sobre principio arm's length
- [ ] PDF descargable: "Checklist Directrices OCDE 2024"

### Mes 3: Contenido Dinámico
- [ ] Sección "Últimas Consultas OCDE" (actualización mensual)
- [ ] Feed automático de noticias OCDE (RSS)
- [ ] Casos jurisprudencia española relacionada
- [ ] Comparativa: Directrices OCDE vs otras jurisdicciones

---

## 📂 Archivos Creados/Modificados

### Nuevos Archivos
1. `src/app/recursos/directrices-ocde-precios-transferencia/page.tsx` (completo)
2. `docs/DIRECTRICES-OCDE-RESOURCE.md` (este documento)

### Archivos Modificados
1. `src/app/sitemap.ts` - Añadida nueva ruta
2. `src/app/servicios/[slug]/page.tsx` - Internal linking card
3. `src/components/layout/Footer.tsx` - Sección "Recursos" en footer

---

## ✅ Checklist de Verificación Post-Lanzamiento

### Inmediato (Hoy)
- [x] Página creada con 2.500+ palabras
- [x] Metadata SEO completa
- [x] Structured data JSON-LD
- [x] Canonical URL configurada
- [x] Sitemap.xml actualizado
- [x] Internal linking desde /servicios/operaciones-vinculadas
- [x] Footer navigation actualizado
- [x] Breadcrumbs implementados
- [x] Commit y push a GitHub

### Próximas 24 horas
- [ ] Verificar que AWS Amplify desplegó correctamente
- [ ] Probar la página en producción (https://www.acttax.es/recursos/directrices-ocde-precios-transferencia)
- [ ] Verificar meta description en código fuente
- [ ] Probar breadcrumbs y enlaces internos
- [ ] Verificar structured data con Rich Results Test

### Próxima semana
- [ ] Enviar URL a Google Search Console
- [ ] Solicitar indexación manual
- [ ] Configurar seguimiento en Google Analytics
- [ ] Crear evento personalizado para "Consulta desde Directrices OCDE"

---

## 🎯 Keywords Objetivo

### Principal
- **directrices ocde precios de transferencia** (high volume, informacional)

### Secundarias
- oecd transfer pricing guidelines
- directrices ocde 2022
- guía precios transferencia ocde
- directrices ocde españa
- beps ocde precios transferencia

### Long-tail
- qué son las directrices ocde precios transferencia
- cómo implementar directrices ocde
- 10 capítulos directrices ocde
- novedades directrices ocde 2024
- obligatorias directrices ocde españa

---

## 💡 Ventajas Competitivas

1. **Contenido en español bien estructurado** (OCDE solo tiene versión oficial en inglés/francés)
2. **Actualización 2024 visible** (mayoría de competencia está desactualizada)
3. **Orientación práctica** (no solo teoría, sino cómo implementar)
4. **Despacho especializado** (E-E-A-T - experiencia demostrable)
5. **Integración con servicios** (path to conversion claro)

---

**Estado final**: ✅ Fase 1 completada exitosamente  
**Siguiente acción**: Esperar deployment y verificar en producción

---

*Documento creado automáticamente - Proyecto ACTTAX*
