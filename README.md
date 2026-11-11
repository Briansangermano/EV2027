# Conferencia de Jóvenes · Éxodo (3)

Página informativa del campamento de jóvenes, construida con **Astro 5** y CSS puro.
Sin frameworks de UI, sin dependencias de animación y sin base de datos: es un sitio
estático que se puede publicar en cualquier hosting.

---

## 🚀 Comandos

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # servidor local en http://localhost:4321
npm run build    # generar el sitio en /dist
npm run preview  # previsualizar el build
```

---

## ✏️ Cómo actualizar la información

**Todo el contenido está en un solo archivo:**

```
src/data/contenido.ts
```

No hace falta tocar componentes ni estilos para cambiar textos, fechas o contactos.

| Qué querés cambiar | Campo |
|---|---|
| Título del tema | `evento.titulo` |
| Antetítulo / eje temático | `evento.antetitulo` |
| Año y fecha de inicio (countdown) | `evento.anio` y `evento.inicioISO` |
| Fecha y hora de cierre | `evento.finISO` |
| Días y números de las fechas | `evento.fechas` |
| Horario de cada día | `evento.horario` |
| Lugar y dirección | `evento.lugar` |
| Precio y recargo | `evento.pago` |
| Fecha límite y localidades | `evento.inscripcion` |
| WhatsApp y email | `evento.contacto` |
| Requisitos de participantes | `evento.participantes` |
| Lista de materiales | `evento.materiales` |
| Qué traer / qué provee el predio | `evento.alojamiento` |
| Comidas y avisos | `evento.comidas` |
| Texto de cierre y firma | `evento.compartir` |

### Fechas y cuenta regresiva

`evento.inicioISO` usa el formato ISO con zona horaria de Argentina:

```ts
inicioISO: '2027-01-11T10:00:00-03:00',
finISO: '2027-01-16T15:00:00-03:00',
```

> **Importante:** si la fecha de inicio ya pasó, la cuenta regresiva no se muestra
> (para evitar un contador en cero). Al actualizarla a una fecha futura,
> vuelve a aparecer automáticamente.

### Horario

El cronograma muestra la apertura (10:00 del lunes 11) y el cierre (15:00 del
sábado 16). Los días intermedios figuran como "Jornada completa"; cuando estén
los horarios finos, editá `evento.horario`:

```ts
horario: [
  { dia: 'Lunes 11', detalle: 'Apertura · 10:00' },
  { dia: 'Martes 12', detalle: 'Jornada completa' },
  { dia: 'Sábado 16', detalle: 'Cierre · 15:00' },
],
```

### Número de WhatsApp

Va sin `+`, sin espacios ni guiones: `5491168884108`.
El texto que se envía precargado se edita en `evento.contacto.mensajeWhatsapp`.

---

## 🌐 Publicar

### Netlify / Vercel
1. Subí el proyecto a un repositorio.
2. Importalo en la plataforma.
3. Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages
El sitio es 100% estático, pero si se publica en un subdirectorio hay que
configurar `base` en `astro.config.mjs`.

### Antes de publicar
Cambiá la URL real en `astro.config.mjs`:

```js
site: 'https://tu-dominio.com',
```

Eso actualiza el canonical y la imagen que se ve al compartir el link por WhatsApp
(`public/og-image.jpg`).

---

## 🗂️ Estructura

```
public/
  fonts/          Fuentes self-hosted (Fraunces + Manrope)
  contours.svg    Textura topográfica
  favicon.svg
  og-image.jpg    Imagen 1200×630 para redes
src/
  data/contenido.ts   ← TODO el contenido editable
  styles/global.css   Tokens, tipografía y utilidades
  layouts/Base.astro  Head, SEO y Open Graph
  components/         Una sección por componente
  scripts/main.ts     Reveals, countdown, parallax, menú, copiar/compartir
  pages/index.astro   Ensamblado de la página
```

---

## ♿ Accesibilidad y rendimiento

- HTML semántico, `skip-link`, foco visible y etiquetas ARIA en iconos.
- Respeta `prefers-reduced-motion`: desactiva animaciones y parallax.
- Sin librerías externas: ~5 KB de JS y fuentes locales.
- Responsive verificado en 320, 390, 768, 1440 y 1920 px.
