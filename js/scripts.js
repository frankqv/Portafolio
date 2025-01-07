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
