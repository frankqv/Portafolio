let currentSlide = 0;
let slideInterval;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
  updateCarousel();
}

function updateCarousel() {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.opacity = i === currentSlide ? 1 : 0;
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-item');
  slides[0].classList.add('active');
  updateCarousel();

  document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.next').addEventListener('click', () => moveSlide(1));

  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

/* Botones Menú */ 
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      const targetId = this.getAttribute('href').substring(1); // Obtener el id de destino
      const targetSection = document.getElementById(targetId); // Encontrar la sección correspondiente

      // Desplazarse suavemente hacia la sección
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});






