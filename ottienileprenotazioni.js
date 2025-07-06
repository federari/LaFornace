var n = 0
var g
var giorni = []
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
var spanmese = document.getElementById("mese");
var spananno = document.getElementById("anno");
var datadioggi = new Date();
var numero_mese = datadioggi.getMonth(); // Restituisce un numero da 0 a 11
var numero_anno = datadioggi.getFullYear()
var t = 0

function bisestile(){
  document.getElementById("giorno31").style.display = "block"
  document.getElementById("giorno30").style.display = "block"
  document.getElementById("giorno29").style.display = "block"
  if(numero_mese == 3){
    document.getElementById("giorno31").style.display = "none"
  } else if(numero_mese == 5){
    document.getElementById("giorno31").style.display = "none"
  } else if(numero_mese == 8){
    document.getElementById("giorno31").style.display = "none"
  } else if(numero_mese == 10){
    document.getElementById("giorno31").style.display = "none"
  } else if(numero_mese == 1){
    document.getElementById("giorno31").style.display = "none"
    document.getElementById("giorno30").style.display = "none"
    if(numero_anno%4 != 0){
      document.getElementById("giorno29").style.display = "none"
    } else if(numero_anno%100 != 0){
      
    } else{
      if(numero_anno%400 == 0){
      } else{
        document.getElementById("giorno29").style.display = "none"
      }
    }
  }
}

// Imposta il contenuto del div
spanmese.innerHTML = mesi[numero_mese];
spananno.innerHTML = numero_anno;
bisestile()






function sinistraMese() {
  numero_mese--
  if(numero_mese < 0){
    numero_mese = 11
  }
  spanmese.innerHTML = mesi[numero_mese];
  bisestile()
  ottieniDefault()
}
function destraMese() {
  numero_mese++
  if(numero_mese > 11){
    numero_mese = 0
  }
  spanmese.innerHTML = mesi[numero_mese];
  bisestile()
  ottieniDefault()
}

function sinistraAnno() {
  numero_anno--
  spananno.innerHTML = numero_anno;
  bisestile()
  ottieniDefault()
}
function destraAnno() {

  numero_anno++
  spananno.innerHTML = numero_anno;
  bisestile()
  ottieniDefault()
}



function loadJSON(callback) {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'https://lafornaceserver.onrender.com/prenotazioni', true); // URL del tuo server su Adaptable
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == 200) { // Cambiato 'status' in 200 senza virgolette
          callback(JSON.parse(xobj.responseText));
      }
  };
  xobj.send(null);
}

function caricaDati(callback) {
  loadJSON(function(response) {
      // response è l'oggetto JSON ricevuto dal server
      const datiRicevuti = response;
      
      // Esegui la callback passata con i dati necessari
      callback(datiRicevuti);
  });
}


var j = 0


function titolo(titolo) {
  var title= document.createElement("p");
  var testo = document.createTextNode(titolo);
  title.appendChild(testo);
  title.classList.add('mese')
  document.getElementById("div-prenotazioni" + j).appendChild(title);
}
function paragrafo(paragrafo) {
  var paragraph= document.createElement("p");
  var testo2 = document.createTextNode(paragrafo);
  paragraph.appendChild(testo2);
  paragraph.classList.add('mese')
  document.getElementById("div-prenotazioni" + j).appendChild(paragraph);
}
function giornif(paragrafo2) {
  let giorniFormattati = paragrafo2.map(g => g.giorno).join(", ");
  let paragraph2 = document.createElement("p");
  let testo3 = document.createTextNode("Ha prenotato i giorni: " + giorniFormattati);
  paragraph2.appendChild(testo3);
  paragraph2.classList.add('mese');
  document.getElementById("div-prenotazioni" + j).appendChild(paragraph2);
  j++;
}

function div(){
  var div = document.createElement("div")
  div.classList.add("listing-item")
  div.setAttribute("id", "div-prenotazioni" + j);
  document.getElementById("main-prenotazioni").appendChild(div);
}


function ottieni() {
  const password = "Password123"
  if(prompt("inserisci la password")  != password){
    alert("Password Errata")
    return
  }
  // Chiama la funzione per caricare e processare i dati
  caricaDati(function(datiRicevuti) { // Passa 'datiRicevuti' come parametro
      if (datiRicevuti.length > 0) {
          for (var l = 0; l < datiRicevuti.length; l++) { // Inizializza l a 0
              let Elemento = datiRicevuti[l];
              let nomesrv = Elemento.nome;
              let cellularesrv = Elemento.cellulare;
              let giornisrv = Elemento.giorni;
              let mesesrv = Elemento.mese;
              let annosrv = Elemento.anno;
              
              if (annosrv === numero_anno && mesesrv === numero_mese + 1) {
                  for (var a = 0; a < giornisrv.length; a++) { 
                      let giornoSingolo = giornisrv[a];
                      if (giornoSingolo.mese === numero_mese + 1 && giornoSingolo.anno === numero_anno) {
                          let idGiorno = giornoSingolo.giorno;
                          let cell = document.getElementById(idGiorno);
                          if (cell) {
                              cell.style.backgroundColor = "rgb(0 43 57)";
                          }
                      }
                  }
              }

              div()
              titolo(nomesrv)
              paragrafo(cellularesrv)
              giornif(giornisrv)
          }
      }
  });
}

function ottieniDefault() {
  for(var p = 1; p <= 31; p++){
    if(document.getElementById(p)){
      document.getElementById(p).style.backgroundColor = "rgb(214, 56, 56)";
    }
  }
  caricaDati(function(datiRicevuti) {
    if (datiRicevuti.length > 0) {
      for (var l = 0; l < datiRicevuti.length; l++) {
        let Elemento = datiRicevuti[l];
        let giornisrv = Elemento.giorni;

        for (var a = 0; a < giornisrv.length; a++) {
          let giornoSingolo = giornisrv[a];

          if (
            giornoSingolo.anno === numero_anno &&
            giornoSingolo.mese === numero_mese + 1 &&
            giornoSingolo.giorno >= 1 &&
            giornoSingolo.giorno <= 31
          ) {
            let idGiorno = giornoSingolo.giorno;

            const giornoElem = document.getElementById(idGiorno);

            if (giornoElem) {
              giornoElem.style.backgroundColor = "rgb(0, 43, 57)";
            }
          }
        }
      }
    }
  });
}
ottieniDefault()
