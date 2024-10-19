document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titolo = document.getElementById('titolo').value;
    const descrizione = document.getElementById('descrizione').value;
    const password = document.getElementById('password').value;
    const giornata = new Date();
    const giornataformatt = giornata.getFullYear()*1000000 + giornata.getMonth()*10000 + giornata.getDate()*100 + giornata.getHours();
    
    const fileInput = document.getElementById('immagine');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Per favore seleziona un\'immagine');
        return;
    }

    // Crea un form data per caricare l'immagine
    const formData = new FormData();
    formData.append('immagine', file);

    // Prima carica l'immagine al server
    fetch('https://serverlafornace.adaptable.app/uploadImage', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.imageUrl) {
            const articoloData = {
                titolo: titolo,
                descrizione: descrizione,
                immagine: data.imageUrl, // Usa l'URL dell'immagine caricata
                giornata: giornataformatt,
                password: password
            };

            // Invia i dati dell'articolo insieme all'URL dell'immagine
            return fetch('https://serverlafornace.adaptable.app/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(articoloData)
            });
        } else {
            throw new Error('Errore durante il caricamento dell\'immagine');
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Articolo caricato con successo!');
        } else {
            alert('Errore nel caricamento dell\'articolo: ' + data.error);
        }
    })
    .catch((error) => {
        console.error('Errore:', error);
        alert('Errore nel caricamento dell\'articolo.');
    });
});