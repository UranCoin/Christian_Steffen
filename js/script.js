
AOS.init({
    duration: 1000,
    once: false
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

// Hover Effect on Links for Cursor
document.querySelectorAll('a, .skill-pill, .work-card').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
        cursor.style.backgroundColor = 'rgba(255,255,255,0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// Simple Typewriter Effect for Hero
const text = document.querySelector('.typewriter');
const originalText = text.innerHTML;
text.innerHTML = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        text.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;