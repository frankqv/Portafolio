const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);




function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = '20px monospace';
    drops.forEach((y, i) => {
        const char = Math.random() > 0.995 ? String.fromCodePoint(0x1F600 + Math.floor(Math.random() * 79)) : String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(char, i * 20, y);
        drops[i] = y > canvas.height || Math.random() > 0.95 ? 0 : y + 20;
    });
}
setInterval(drawMatrix, 50);


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    document.getElementById('scrollToTop').style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
};


// Obtener el año UTC actual y actualizar el contenido del elemento con id "current-year"
document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        const currentYearUTC = new Date().getUTCFullYear();
        currentYearElement.textContent = currentYearUTC;
    }
});





/* testeo javascript */

let currentSlide = 0;
let slideInterval;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselSlides = document.querySelector('.carousel-slides');

    // Calcula el índice del siguiente slide
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Actualiza la posición del carrusel usando translateX
    const offset = -currentSlide * 100; // Calcula el desplazamiento en porcentaje
    carouselSlides.style.transform = `translateX(${offset}%)`;

    resetAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => moveSlide(1), 5000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // Manejo de carrusel
    const slides = document.querySelectorAll('.carousel-item');
    const carouselSlides = document.querySelector('.carousel-slides');

    if (slides.length > 0) { // Verifica si hay slides
        // Inicializa la posición del carrusel
        carouselSlides.style.transform = 'translateX(0%)';

        document.querySelector('.prev').addEventListener('click', () => {
            moveSlide(-1);
        });

        document.querySelector('.next').addEventListener('click', () => {
            moveSlide(1);
        });

        startAutoSlide();

        // Detiene el auto-slide cuando el usuario pasa el ratón sobre el carrusel
        document.querySelector('.carousel').addEventListener('mouseenter', stopAutoSlide);
        // Reinicia el auto-slide cuando el ratón sale del carrusel
        document.querySelector('.carousel').addEventListener('mouseleave', startAutoSlide);
    }

    // Manejo de menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) { // Verifica si los elementos existen
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    navLinks.classList.remove('active'); // Cierra el menú móvil
                }
            });
        });
    }

    // Manejo de cuadrícula de elementos
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            // Elimina la clase 'active' de todos los elementos
            gridItems.forEach(i => i.classList.remove('active'));
            
            // Agrega la clase 'active' al elemento clicado
            item.classList.add('active');
        });
    });
});

// Obtener el año UTC actual y actualizar el contenido del elemento con id "current-year"
document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        const currentYearUTC = new Date().getUTCFullYear();
        currentYearElement.textContent = currentYearUTC;
    }
});


