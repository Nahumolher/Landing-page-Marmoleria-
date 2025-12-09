// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Animaciones del Timeline de Historia
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineContainer = document.querySelector('.historia-timeline');
    
    if (timelineItems.length > 0 && timelineContainer) {
        const timelineObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animar la línea central del timeline
                    if (entry.target === timelineContainer) {
                        timelineContainer.classList.add('animate');
                    }
                    
                    // Animar cada item del timeline
                    if (entry.target.classList.contains('timeline-item')) {
                        entry.target.classList.add('animate');
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observar el contenedor del timeline
        timelineObserver.observe(timelineContainer);
        
        // Observar cada item del timeline
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.card, .section-header, .hero-content');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Efecto parallax sutil en el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Formulario de contacto con PHP
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Cambiar estado del botón
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Crear FormData con los datos del formulario
            const formData = new FormData(this);
            
            // Enviar datos con fetch
            fetch('enviar-formulario.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Éxito
                    submitBtn.textContent = 'Mensaje Enviado ✓';
                    submitBtn.style.background = '#A0926B';
                    submitBtn.style.color = '#FEFDFB';
                    
                    // Limpiar formulario
                    this.reset();
                    
                    // Mostrar mensaje de éxito
                    showMessage('success', data.message);
                    
                } else {
                    // Error
                    submitBtn.textContent = 'Error al Enviar';
                    submitBtn.style.background = '#D32F2F';
                    submitBtn.style.color = '#FEFDFB';
                    
                    // Mostrar mensaje de error
                    if (data.errors) {
                        showMessage('error', data.message + '<br>' + data.errors.join('<br>'));
                    } else {
                        showMessage('error', data.message);
                    }
                }
                
                // Restaurar botón después de 3 segundos
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                }, 3000);
                
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.textContent = 'Error de Conexión';
                submitBtn.style.background = '#D32F2F';
                submitBtn.style.color = '#FEFDFB';
                
                showMessage('error', 'Error de conexión. Verifica tu conexión a internet e intenta nuevamente.');
                
                // Restaurar botón después de 3 segundos
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                }, 3000);
            });
        });
    }
});

// Función para mostrar mensajes
function showMessage(type, message) {
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    
    // Estilos del mensaje
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 12px;
        color: #FEFDFB;
        font-weight: 400;
        font-size: 14px;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease-out;
        ${type === 'success' ? 'background: #A0926B;' : 'background: #D32F2F;'}
    `;
    
    // Agregar animación CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Agregar al DOM
    document.body.appendChild(messageDiv);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 5000);
}

// Función para manejar el cambio de tamaño de ventana
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Agregar clase al header cuando se hace scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Función para destacar el enlace activo en la navegación
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Inicializar cuando la página se carga
document.addEventListener('DOMContentLoaded', updateActiveNavLink);
