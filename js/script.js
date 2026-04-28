// Initialize Scroll Animations
AOS.init({
    duration: 1000,
    once: false
});

// Custom Cursor Spielerei
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
        cursor.style.borderColor = 'transparent';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.borderColor = 'var(--accent-red)';
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

// Smooth Scrolling logic for menu links (Spielerei 2)
document.querySelectorAll('nav .nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});