
function caricaArticoli(){
    var articoli = JSON.parse(localStorage.getItem('articoli')) || [];
    var bacheca = document.getElementById('bacheca');
    articoli.forEach(function(articolo) {
        var p = document.createElement('div');
        p.textContent = articolo;
        p.className = "listing-item"
        bacheca.appendChild(p);
    });
}

function cancella(){
    var password
    password = prompt("inserisci Password")
    if(password == "password"){
        localStorage.removeItem("articoli")
        location.reload()
    }else{
        alert("Password incorretta!")
    }
}

// Carica gli articoli quando la pagina viene caricata
window.onload = caricaArticoli;