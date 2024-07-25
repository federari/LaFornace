document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titolo = document.getElementById('titolo').value;
    const descrizione = document.getElementById('descrizione').value;
    const link = document.getElementById('link').value;
    const immagine = document.getElementById('immagine').value;

    const data = {
        titolo: titolo,
        descrizione: descrizione,
        link: link,
        immagine: immagine
    };

    fetch('https://serverlafornace.adaptable.app/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Articolo caricato con successo!');
        } else {
            alert('Errore nel caricamento dell\'articolo.');
        }
    })
    .catch((error) => {
        console.error('Errore:', error);
        alert('Errore nel caricamento dell\'articolo.');
    });
});
