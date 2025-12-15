const requestURL = 'https://stephen-king-api.onrender.com/api/shorts';
const DEFAULT_IMAGE = "img/default.jpg";

// 🔹 FUNCIÓN PARA OBTENER PORTADA DESDE GOOGLE BOOKS
async function getBookImage(title) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}+inauthor:Stephen+King&maxResults=1`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        // Si hay portada, usarla; si no, DEFAULT_IMAGE
        return data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMAGE;
    } catch (error) {
        console.error("Error Google Books:", error);
        return DEFAULT_IMAGE;
    }
}

// 🔹 FUNCIÓN PARA CREAR CADA CARD
function createData({image, title, type, handle, originallyPublishedIn, collectedIn, notes, year, created_at, villains }) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <h5 class="card-title">${type || ""} - ${handle || ""}</h5>
                <h5 class="card-text">${originallyPublishedIn || "—"} — ${collectedIn || "—"}</h5>
                <p class="card-text">
                    ${notes.length ? notes.join(", ") : "—"} — ${year || "—"} — ${created_at || "—"} — ${villains.length ? villains.join(", ") : "—"}
                </p>
            </div>
        </div>
    `;
}

// 🔹 FUNCION PARA TRAER DATOS DE LA API ORIGINAL
async function fetchDataJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error('Error al cargar JSON');
        return await response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

// 🔹 FUNCION PARA MOSTRAR LOS DATOS CON IMÁGENES
async function displayData() {
    const dataSection = document.getElementById('dataSection');
    const dataData = await fetchDataJson();

    if (!dataData || !dataData.data) {
        dataSection.innerHTML = '<p>No se pudieron cargar los libros.</p>';
        return;
    }

    // 🔹 Obtener las imágenes de Google Books de forma asíncrona
    const itemsWithImages = await Promise.all(
        dataData.data.map(async item => ({
            ...item,
            image: await getBookImage(item.title)
        }))
    );

    dataSection.innerHTML = itemsWithImages.map(createData).join('');
}

// 🔹 EJECUTAR CUANDO EL DOM ESTÉ LISTO
document.addEventListener("DOMContentLoaded", displayData);
