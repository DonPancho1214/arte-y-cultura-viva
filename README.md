# Fundación Arte y Cultura Viva — Plantilla Web v2

## Estructura del proyecto

```
arte-cultura-viva/
├── index.html              ← Página de inicio (completa con slider, galería animada, etc.)
├── README.md               ← Este archivo
├── css/
│   ├── styles.css          ← Todos los estilos principales
│   └── accesibilidad.css   ← Estilos del widget de accesibilidad
├── js/
│   ├── nav-footer.js       ← Inyecta nav y footer en todas las páginas
│   ├── main.js             ← Slider, hamburger, cookies, galería, reveals
│   └── accesibilidad.js    ← Widget de herramientas de accesibilidad
└── pages/
    ├── quienes-somos.html
    ├── programas.html
    ├── galeria.html
    ├── noticias.html
    ├── donaciones.html
    ├── contacto.html
    ├── voluntariado.html
    ├── politica-privacidad.html  ← Ley 1581/2012
    ├── terminos.html
    ├── politica-cookies.html
    └── transparencia.html
```

## Tecnología
- HTML5 + CSS3 + JavaScript Vanilla (sin frameworks)
- Fuentes: Google Fonts (Playfair Display + Source Sans 3)
- Sin dependencias externas de JS

## Paleta de colores (variables CSS)
| Variable         | Color    | Uso                          |
|------------------|----------|------------------------------|
| --naranja        | #E8720C  | Color principal              |
| --verde          | #6AAF20  | Color secundario             |
| --morado         | #7B3FA0  | Categoría danza/teatro       |
| --azul           | #2A6DB5  | Categoría música             |
| --rojo           | #D13B2A  | Proyectos especiales         |
| --cafe           | #3D2B1F  | Fondos oscuros / footer      |
| --crema          | #FDF6ED  | Fondo principal              |

## Cómo usar en VS Code
1. Abrir la carpeta raíz en VS Code
2. Instalar extensión **Live Server**
3. Click derecho sobre `index.html` → "Open with Live Server"
4. El sitio abre en `http://127.0.0.1:5500`

## Lo que hay que reemplazar antes de publicar
- [ ] Logo: reemplazar el ícono SVG del árbol por el logo real (PNG/SVG)
- [ ] NIT: `XXX.XXX.XXX-X` → NIT real de la fundación
- [ ] Dirección y teléfonos en nav-footer.js y páginas de contacto
- [ ] Correos electrónicos (info@, privacidad@, pqr@)
- [ ] Textos "Lorem ipsum" → contenido real
- [ ] Imágenes `.img-ph` → fotos reales (reemplazar divs por `<img>`)
- [ ] Fecha de constitución y datos legales en transparencia.html
- [ ] Año en el copyright del footer
- [ ] Enlace a Google Maps en contacto.html (reemplazar placeholder)

## Accesibilidad
El sitio cuenta con un toggle de Modo Oscuro en el menú de navegación principal (icono de sol/luna), así como un widget de accesibilidad (botón lateral derecho) que incluye:
- Aumentar / Disminuir texto
- Escala de grises
- Alto contraste
- Contraste negativo
- Fondo claro
- Subrayar enlaces
- Fuente legible (Arial)
- Restablecer todo

## Animaciones (performance)
Todas las animaciones usan solo `transform` y `opacity` (GPU-friendly):
- Slider hero: CSS animation + JS timer
- Galería vertical: CSS @keyframes (sin JS)
- Mandalas decorativos: CSS animation rotate
- Reveals al scroll: IntersectionObserver + CSS transition
- Animaciones respetan `prefers-reduced-motion`

