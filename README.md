# stephenKing — Descripción del proyecto y estructura

![Captura de pantalla banner del index.html](/StephenKing/images/readme/screenshotIndex.png)

Proyecto frontend que muestra información de libros de Stephen King mediante tarjetas responsives. El repositorio contiene HTML, CSS, JS y datos JSON; incluyendo documentación de la API en `docs/API_README.md`.

**Estructura principal de carpetas y archivos**

- `index.html`: página principal del proyecto.
- `README.md`: este archivo (visión general y cómo iniciar).
- `css/`:
  - `aboutHe.css`, `cardsAndTable.css`, `carrousel.css`, `footer.css`, `header.css` — estilos por secciones.
- `html/`:
  - `cardsAndTable.html`, `carrousel.html` — plantillas/fragmentos HTML usados por la app.
- `images/`:
  - Subcarpetas: `aboutHe/`, `background/`, `bookCovers/`, `carrousel/`, `logo/` — recursos gráficos y portadas.
- `js/`:
  - `cardsAndTable.js` — lógica para mostrar las tarjetas y consumir datos.
  - `carrousel.js`, `footer.js`, `header.js` — scripts de la UI.
- `json/`:
  - `cardsAndTable.json` — datos de ejemplo que utiliza el frontend por defecto.
- `pages/`:
  - `aboutHe.html`, `footer.html`, `header.html` — fragmentos reutilizables.
- `pdf/` y `videos/`: carpetas para recursos multimedia (vacías o con assets opcionales).

**Qué hace cada parte**

- Frontend: las páginas HTML y los CSS gestionan el layout; los scripts en `js/` realizan `fetch` en las fuentes de datos para renderizar cards.
- Datos por defecto: `json/cardsAndTable.json` actúa como fuente local para evitar depender de un backend durante desarrollo.
- Imágenes: guarda portadas y recursos visuales en `images/bookCovers` y subcarpetas relacionadas.

**Cómo ejecutar el proyecto**

1. Servir solo frontend (sin backend)

Para ver el proyecto en vivo, clica en el siguiente enlace:

 [Stephen King - Pagina de inicio](https://albertodeveloper94.github.io/stephenKing/index.html)


**Instalación del proyecto**

1. Clona el repositorio:

```bash
git clone https://github.com/albertodeveloper94/stephenKing.git
```
2. Cambia al directorio:

```bash
cd stephenKing
```

Ejecuta index.html en tu navegador.