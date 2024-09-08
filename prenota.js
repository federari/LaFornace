var i = 0
var g
var d

  // Aggiungi un event listener per ogni bottone
function prenota(g) {

  if(g < 10){
    g = "" + 0 + g
  }
  // Seleziona il div con la classe "prenota-bottom" all'interno del bottone cliccato
  const divToChange = document.getElementById(g);

    // Ottieni lo stile computato del div
    const style = getComputedStyle(divToChange);
    // Cambia il colore di background del div selezionato
    if(style.backgroundColor == "rgb(214, 56, 56)"){
      divToChange.style.backgroundColor = 'rgb(57, 54, 196)'; // Cambia da rosso a blu
      if(i == 0){
        d = g
        i = 1
      }else{
        d = "" + d + g
      }
    }else{
      divToChange.style.backgroundColor = 'rgb(214, 56, 56)'; // Cambia da blu a rosso
      d = "" + d - g
    }


    alert(d)
};
