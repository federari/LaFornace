var imageSources = ["foto/IMG_0234.jpg", "foto/IMG_0263.jpg", "foto/IMG_0238.jpg", "foto/IMG_0242.jpg", "foto/IMG_0244.jpg", "foto/IMG_0247.jpg", "foto/IMG_0249.jpg", "foto/IMG_0227.jpg"];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startAnimation() {
  await delay(2000);
  const elemento = document.querySelector('.immagini_body');
  
  // Rimuovi la classe di animazione se già presente
  elemento.classList.remove('animazione_partita');
  
  // Forza un reflow per far sì che la rimozione della classe venga applicata immediatamente
  void elemento.offsetWidth;
  
  // Attendi il ritardo
  await delay(4000);
  
  // Aggiungi la classe di animazione
  elemento.classList.add('animazione_partita');
}
startAnimation()
var index = 0;
setInterval(function() {
  if (index === imageSources.length) {
    index = 0;
  }
  
  document.getElementById("center_image").src = imageSources[index];
  index++;
  
  startAnimation();
}, 8000);
