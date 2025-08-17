/*--------------------------------------------------------------
Menu Toggle para móviles 
--------------------------------------------------------------*/
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const body = document.body;

// Función para cerrar el menú
const closeMenu = () => {
    mainNav.classList.remove('header__nav--open');
    body.classList.remove('menu-open');
};

// Función para alternar el menú
const toggleMenu = () => {
    mainNav.classList.toggle('header__nav--open');
    body.classList.toggle('menu-open');
};

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el click se propague al documento
    toggleMenu();
});

/*--------------------------------------------------------------
Cerrar menu al hacer click en un link
--------------------------------------------------------------*/
const navLinks = document.querySelectorAll('.header__nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

/*--------------------------------------------------------------
Cerrar menu al hacer click en cualquier parte de la página
--------------------------------------------------------------*/
document.addEventListener('click', (e) => {
    // Verifica si el click fue fuera del menú y del botón toggle
    if (mainNav.classList.contains('header__nav--open')) {
        const isClickInsideNav = mainNav.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnToggle) {
            closeMenu();
        }
    }
});

/*--------------------------------------------------------------
Cerrar menu al hacer scroll
--------------------------------------------------------------*/
window.addEventListener('scroll', () => {
    if (mainNav.classList.contains('header__nav--open')) {
        closeMenu();
    }
});

/*--------------------------------------------------------------
Slider de Testimonios
--------------------------------------------------------------*/
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const testimonialSlider = document.getElementById('testimonialSlider');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Mostrar primer testimonio
showTestimonial(currentTestimonial);

// Cambiar testimonio cada 5 segundos
setInterval(nextTestimonial, 5000);

/*--------------------------------------------------------------
Validación del Formulario
--------------------------------------------------------------*/
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Por favor complete todos los campos');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor ingrese un email válido');
        return;
    }
    
    // Simular envío del formulario
    alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
    contactForm.reset();
});

/*--------------------------------------------------------------
Smooth scrolling para enlaces internos
--------------------------------------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});