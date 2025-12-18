# stephenKing — Descripción del proyecto y estructura

Proyecto frontend que muestra información de libros de Stephen King mediante tarjetas responsivas. El repositorio contiene HTML, CSS, JS y datos JSON; además incluí documentación de la API en `docs/API_README.md`.

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
- Frontend: las páginas HTML y los CSS gestionan el layout; los scripts en `js/` realizan `fetch` a fuentes de datos para renderizar tarjetas.
- Datos por defecto: `json/cardsAndTable.json` actúa como fuente local para evitar depender de un backend durante desarrollo.
- Imágenes: guarda portadas y recursos visuales en `images/bookCovers` y subcarpetas relacionadas.

**Cómo ejecutar el proyecto (modo rápido)**

1) Servir solo frontend (sin backend)
```bash
# Desde la raíz del proyecto
python -m http.server 8000
# o
npx http-server -p 8000
```
Abrir: http://localhost:8000

2) Usar Live Server en VS Code
- Abrir el proyecto en VS Code y elegir `Open with Live Server` sobre `index.html`.

**Uso de la API (opcional)**
- Documentación completa de la API y endpoints en `docs/API_README.md`.
- Si quieres levantar un backend local mínimo (Node/Express) puedes crear `server.js` que sirva `/api/books` usando `json/cardsAndTable.json` como fuente; ejemplo y comandos en `docs/API_README.md`.

**Dónde cambiar la fuente de datos**
- Actualmente el frontend apunta a `json/cardsAndTable.json`. Para consumir una API remota o local reemplaza la URL en `js/cardsAndTable.js` por `/api/books` o por la URL deseada.

**Buenas prácticas y recomendaciones**
- En producción añade autenticación (JWT/API keys) y valida CORS en el backend.
- Si piensas crecer la app, separa la lógica de fetch en un módulo `api.js` y centraliza rutas.

**Siguientes pasos (puedo hacerlo por ti)**
- Implementar `server.js` y `package.json` con scripts `start` y `dev`.
- Actualizar `js/cardsAndTable.js` para detectar si debe usar `/api/books` o el JSON local.
- Añadir pequeños tests o un script para validar el JSON de datos.

Si quieres, implemento ahora el `server.js` y los scripts `npm` para arrancar la API localmente.
