document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titolo = document.getElementById('titolo').value;
    const descrizione = document.getElementById('descrizione').value;
    const password = document.getElementById('password').value;
    const giornata = new Date();
    const giornataformatt = giornata.getFullYear()*1000000 + giornata.getMonth()*10000 + giornata.getDate()*100 + giornata.getHours();
    const preview = document.getElementById('preview');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const uploadButton = document.getElementById('uploadButton');
    
    const fileInput = document.getElementById('immagine');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Per favore seleziona un\'immagine');
        return;
    }


    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                preview.innerHTML = `<img src="${event.target.result}" class="preview" alt="Anteprima immagine">`;
            }
            reader.readAsDataURL(file);
        }
    });

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