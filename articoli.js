
function caricaArticoli() {
    fetch('https://serverlafornace.adaptable.app/api/articoli')
        .then(response => response.json())
        .then(articoli => {
            var bacheca = document.getElementById('bacheca');
            bacheca.innerHTML = ''; // Pulisce il contenuto della bacheca
            articoli.forEach(function(articolo) {
                var p = document.createElement('div');
                p.textContent = articolo;
                p.className = 'listing-item'; // Aggiunge la classe 'articolo' a ogni paragrafo
                bacheca.appendChild(p);
            });
        });
}
function cancellaArticoli() {
    var password = prompt("Inserisci Password")
    if(password == "password"){
        fetch('https://serverlafornace.adaptable.app/api/articoli', {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
                caricaArticoli(); // Ricarica la bacheca per mostrare che è vuota
            } else {
                alert('Errore: ' + data.error);
            }
        });
    }else{
        alert("Password incorretta!")
    }
}
// Carica gli articoli quando la pagina viene caricata
window.onload = caricaArticoli;