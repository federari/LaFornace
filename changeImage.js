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
var currentImage = 1; // To track which image is visible
var fadeDuration = 2000; // Duration of the fade in milliseconds
var intervalDelay = 6000; // Time the image is visible between changes

async function fadeImages() {
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");

  while (true) {
    var nextIndex = (index + 1) % imageSources.length;
    var currentImgElement = currentImage === 1 ? image1 : image2;
    var nextImgElement = currentImage === 1 ? image2 : image1;

    // Set the next image, but wait for it to load first
    nextImgElement.src = imageSources[nextIndex];
    await new Promise((resolve) => {
      nextImgElement.onload = resolve;
    });

    // Start crossfade
    currentImgElement.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
    nextImgElement.style.transition = `opacity ${fadeDuration}ms ease-in-out`;

    currentImgElement.style.opacity = 0;
    nextImgElement.style.opacity = 1;

    // Wait for the fade to complete
    await delay(fadeDuration);

    // Update the index and current image
    index = nextIndex;
    currentImage = currentImage === 1 ? 2 : 1;

    // Wait before changing the image again
    await delay(intervalDelay);
  }
}

// Start the slideshow
fadeImages();