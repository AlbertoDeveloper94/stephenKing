const requestURL = https://stephen-king-api.onrender.com/api/shorts;

function createDataCard({image, title, type, handle, descriptoriginallyPublishedIn, collectedIn, notes, year, created_at, villains }) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="Imagen del vino">
            <div class="card-body">
                <h3 class="card-title">${title}</h3>
                <h4 class="card-title">${type} - ${handle} </h4>
                <h5 class="card-text">${descriptoriginallyPublishedIn} — ${collectedIn}</h5>
                <p class="card-text">${notes} — ${year}— ${created_at}— ${villains} </p>
            </div>
        </div>
    `;
}

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

async function displayData() {
    const dataSection = document.getElementById('dataSection');
    const dataData = await fetchDataJson();

    if (dataData && dataData.data) {
        dataSection.innerHTML = dataData.data.map(createDataCard).join('');
    } else {
        dataSection.innerHTML = '<p>No se pudieron cargar los libros.</p>';
    }
}

displayData();
