const requestURL = '../json/prueba.json';
const API_URL = "https://stephen-king-api.onrender.com/api/books";



function createData({image, Title, Year, Publisher, ISBN, Pages,Notes, created_at}) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="Imagen del libro">
            <div class="card-body">
                <h4 class="card-title">${Title}</h4>
                <h5 class="card-title">${Year}</h5>
                <h5 class="card-text">${Publisher} — ${ISBN}</h5>
                <p class="card-text">
                    ${Notes} — ${Pages} — ${created_at}</p>
            </div>
        </div>
    `;
}
async function fetchDataJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error('Error al cargar data');
        return await response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function displayData() {
    const dataSection = document.getElementById('dataSection');
    const dataData = await fetchDataJson();

    if (dataData && dataData.data) {
        dataSection.innerHTML = dataData.data.map(createData).join('');
    } else {
        dataSection.innerHTML = '<p>No se pudieron cargar los libros.</p>';
    }
}
fetch(API_URL)
.then(response => response.json())
.then(result => {
    const tableBody = document.querySelector("#booksTable tbody");

    result.data.forEach(book => {
    const row = document.createElement("tr");

    const villains = book.villains.length
        ? book.villains.map(v => v.name).join(", ")
        : "Sin villanos";

    row.innerHTML = `
        <td>${book.Year}</td>
        <td>${book.Title}</td>
        <td>${book.Publisher}</td>
        <td>${book.Pages}</td>
        <td>${villains}</td>
    `;

    tableBody.appendChild(row);
    });
})
.catch(error => {
    console.error("Error al cargar la API:", error);
});
displayData();