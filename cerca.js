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
  const noResultsDiv = document.getElementById('noResults');
  
  if (container) {
      container.innerHTML = ''; // Pulisci i risultati precedenti

      if (data.length === 0) {
          noResultsDiv.style.display = 'block'; // Mostra il messaggio di "nessun risultato"
      } else {
          noResultsDiv.style.display = 'none'; // Nascondi il messaggio di "nessun risultato"
          data.forEach(item => {
              const div = createDiv(item);
              container.insertBefore(div, container.firstChild); // Inserisci il div all'inizio
          });
      }
  } else {
      console.error('Element with id "content" not found');
  }
}

async function searchArticles() {
const query = document.getElementById('searchInput').value;
try {
  const response = await fetch('https://lafornaceserver.onrender.com/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: query })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const results = await response.json();
  console.log(`Search results: ${JSON.stringify(results)}`); // Log results
  populateDivs(results);
} catch (error) {
  console.error('Error fetching search results:', error);
}
}