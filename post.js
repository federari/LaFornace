function aggiungiArticolo() {
    var articolo = document.getElementById('articoloInput').value;
    if (articolo) {
        fetch('/api/articoli', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ articolo: articolo })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
                document.getElementById('articoloInput').value = ''; // Pulisce l'input dopo l'inserimento
            } else {
                alert('Errore: ' + data.error);
            }
        });
    } else {
        alert('Per favore, inserisci un articolo.');
    }
}