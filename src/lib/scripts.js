const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Función para establecer el modo inicial según el navegador
function setDefaultTheme() {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDarkMode) {
        body.classList.add("night-mode");
        themeToggle.textContent = "☀️ Modo Claro";
    } else {
        body.classList.remove("night-mode");
        themeToggle.textContent = "🌙 Modo Oscuro";
    }
}

// Llamar a la función al cargar la página
setDefaultTheme();

// Agregar el evento de clic para alternar entre los modos
themeToggle.addEventListener("click", () => {
    body.classList.toggle("night-mode");

    if (body.classList.contains("night-mode")) {
        themeToggle.textContent = "☀️ Modo Claro";
    } else {
        themeToggle.textContent = "🌙 Modo Oscuro";
    }
});




// Obtener el año UTC actual y actualizar el contenido del elemento con id "current-year"
document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        const currentYearUTC = new Date().getUTCFullYear();
        currentYearElement.textContent = currentYearUTC;
    }
});


// Obtén el elemento del nav
const nav = document.querySelector('header', 'div', 'a');
const initialNavPosition = nav.offsetTop;

// Detecta cuando el nav se mueve
window.addEventListener('scroll', () => {
  // Verifica si la pantalla es grande
  if (window.innerWidth > 768) {
    if (window.scrollY > initialNavPosition) {
      nav.classList.add('blur'); 
    } else {
      nav.classList.remove('blur'); 
    }
  } else {
    // Elimina el blur en pantallas pequeñas
    nav.classList.remove('blur');
  }
});









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