// Funcția pentru a crea efectul de parallax
document.addEventListener('mousemove', function(event) {
  let heroBackground = document.querySelector('.hero-background');
  
  // Obținem poziția cursorului pe ecran
  let x = (event.clientX / window.innerWidth) * 100;
  let y = (event.clientY / window.innerHeight) * 100;
  
  // Aplicația parallax (schimbăm poziția imaginii de fundal)
  heroBackground.style.transform = `translate(-${x / 10}%, -${y / 10}%)`;
});
