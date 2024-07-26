document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('imglogo');

  function updateImageSource() {
      const width = window.innerWidth;

      if (width >= 1138) {
          image.src = 'logo_fornace_bianco.png';
      } else {
          image.src = 'logo_fornace_piccolo.png';
      }
  }

  // Update image source when the page loads
  updateImageSource();

  // Update image source when the window is resized
  window.addEventListener('resize', updateImageSource);
});
