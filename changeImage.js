var imageSources = [
  "foto/IMG_0234.jpg",
  "foto/IMG_0263.jpg",
  "foto/IMG_0238.jpg",
  "foto/IMG_0242.jpg",
  "foto/IMG_0244.jpg",
  "foto/IMG_0247.jpg",
  "foto/IMG_0249.jpg",
  "foto/IMG_0227.jpg"
];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var index = 0;
var currentImage = 1; // Per tracciare quale immagine è visibile
var fadeDuration = 2000; // Durata della dissolvenza in millisecondi
var intervalDelay = 6000; // Tempo di visibilità dell'immagine tra i cambiamenti

async function fadeImages() {
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");

  while (true) {
    var nextIndex = (index + 1) % imageSources.length;
    var currentImgElement = currentImage === 1 ? image1 : image2;
    var nextImgElement = currentImage === 1 ? image2 : image1;

    // Imposta l'immagine successiva
    nextImgElement.src = imageSources[nextIndex];

    // Inizia la dissolvenza incrociata
    currentImgElement.style.opacity = 0;
    nextImgElement.style.opacity = 1;

    // Attendi che la transizione sia completa
    await delay(fadeDuration);

    // Aggiorna l'indice e l'immagine corrente
    index = nextIndex;
    currentImage = currentImage === 1 ? 2 : 1;

    // Aspetta prima di cambiare di nuovo immagine
    await delay(intervalDelay);
  }
}

// Avvia lo slideshow
fadeImages();
