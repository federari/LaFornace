// Funzione per caricare i dati dal server
function loadJSON(callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://serverlafornace.adaptable.app/data', true); // URL del tuo server su Adaptable
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

// Funzione per creare il contenuto del div dinamicamente
function createDiv(item) {
    const div = document.createElement('div');
    div.className = 'listing-item';

    const link = document.createElement('a');
    link.href = item.link;
    const title = document.createElement('p');
    title.className = 'titolo-post';
    title.textContent = item.titolo;
    link.appendChild(title);

    const description = document.createElement('p');
    description.className = 'testo-post';
    description.textContent = item.descrizione;

    const image = document.createElement('img');
    image.src = item.immagine;
    image.className = 'img-articolo';

    div.appendChild(link);
    div.appendChild(description);
    div.appendChild(image);

    return div;
}

// Funzione per inserire i div nel contenitore
function populateDivs(data) {
    const container = document.getElementById('content');
    
    if (container) {
        data.forEach(item => {
            const div = createDiv(item);
            container.insertBefore(div, container.firstChild); // Inserisci il div all'inizio
        });
    } else {
        console.error('Element with id "container" not found');
    }
}

// Carica il JSON e popola i div quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    loadJSON(populateDivs);
});
