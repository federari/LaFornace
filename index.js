
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

var imageSources = ["https://fai-platform.imgix.net/uploads/897d0abd-3216-4078-bf8a-2acb474b7bbe.jpg?crop=fit&w=1440&h=800&auto=format,compress", "https://digilander.libero.it/elephoto/2007.06.15_a__bell_1.JPG", "https://image.jimcdn.com/app/cms/image/transf/none/path/sa1093cbe9aed8aa9/image/i6cceb00c75f15990/version/1648300000/image.jpg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("center_image").src = imageSources[index];
  index++;
} , 15000);

// Link a cui andare in un'altra pagina se necessario
function redirect(){
  location.href="https://www.youtube.com";
}


