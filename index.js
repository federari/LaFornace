
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
}

var imageSources = ["foto/IMG_0234.jpg", "foto/IMG_0263.jpg", "foto/IMG_0238.jpg", "foto/IMG_0242.jpg", "foto/IMG_0244.jpg", "foto/IMG_0247.jpg", "foto/IMG_0249.jpg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("center_image").src = imageSources[index];
  index++;
} , 15000);

// Link a cui andare in un'altra pagina se necessario



