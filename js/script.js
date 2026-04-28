// Initialize Scroll Animations (AOS)
AOS.init({
    duration: 1000, // Animation duration in ms
    once: false, // Whether animation should happen only once - while scrolling down
    mirror: true, // Whether elements should animate out while scrolling past them
});

// Custom Mouse Cursor Spielerei
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    // Smooth movement using requestAnimationFrame might be better, but this is simple
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

// Hover Effect on Links for Cursor
document.querySelectorAll('a, .skill-pill, .work-card, .social-icon').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)'; // Scale up cursor
        cursor.style.backgroundColor = 'rgba(255,255,255,0.1)'; // Light white bg
        cursor.style.borderColor = 'transparent';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'; // Back to normal size
        cursor.style.backgroundColor = 'transparent';
        cursor.style.borderColor = 'var(--accent-red)'; // Red border again
    });
});

// Simple Typewriter Effect for Hero Subsection
const text = document.querySelector('.typewriter');
if (text) {
    const originalText = text.innerHTML;
    text.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            text.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 70); // Typing speed
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Smooth Scrolling logic for menu links (Spielerei 2)
document.querySelectorAll('nav .nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Check if nav is fixed to adjust offset
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax movement for Hero clouds (Optional high-end feel)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const clouds = document.querySelector('.hero-clouds');
    if (clouds) {
        clouds.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});


if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40, // Anzahl der Partikel
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // Weiß
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.2, // Sehr dezent transparent
                "random": false
            },
            "size": {
                "value": 2, // Kleine Punkte
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1, // Sehr subtile Linien
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1, // Sehr langsame Bewegung
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Partikel "greifen" nach der Maus
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.3
                    }
                }
            }
        },
        "retina_detect": true
    });
}