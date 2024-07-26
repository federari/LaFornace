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
        container.innerHTML = ''; // Pulisci i risultati precedenti
        data.forEach(item => {
            const div = createDiv(item);
            container.insertBefore(div, container.firstChild); // Inserisci il div all'inizio
        });
    } else {
        console.error('Element with id "content" not found');
    }
}

async function searchArticles() {
  const query = document.getElementById('searchInput').value;
  const response = await fetch('http://serverlafornace.adaptable.app/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: query })
  });

  const results = await response.json();
  populateDivs(results);
}