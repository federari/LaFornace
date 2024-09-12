var n = 0
var g
var giorni = []

  // Aggiungi un event listener per ogni bottone
function prenota(g) {


  // Seleziona il div con la classe "prenota-bottom" all'interno del bottone cliccato
  const divToChange = document.getElementById(g);

    // Ottieni lo stile computato del div
    const style = getComputedStyle(divToChange);
    // Cambia il colore di background del div selezionato
    if(style.backgroundColor == "rgb(214, 56, 56)"){
      divToChange.style.backgroundColor = 'rgb(57, 54, 196)'; // Cambia da rosso a blu
        giorni[n] = g
        n++
    }else{
      divToChange.style.backgroundColor = 'rgb(214, 56, 56)'; // Cambia da blu a rosso
      for( var i = 0; i < giorni.length; i++){ 
        if ( giorni[i] === g) {
          giorni.splice(i, 1); 
        }
     }
     n--
    }
};


function invia(){

  const nome = prompt("Inserire un nome")
  const cellulare = prompt("inserire un numero di telefono")
    const data = {
      nome: nome,
      cellulare: cellulare,
      giorni: giorni,
  };

    fetch('https://serverlafornace.adaptable.app/prenota', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Prenotazione avvenuta con successo!');
      } else {
          alert('Errore nel caricamento della prenotazione: ' + data.error + "Chiama l'assistenza");
      }
  })
  .catch((error) => {
      console.error('Errore:', error);
      alert("Errore nel caricamento della prenotazione, Chiama l'assistenza");
  });
};

