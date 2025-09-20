// Loading Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const progress = document.getElementById('loader-progress');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 30;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            setTimeout(() => {
                gsap.to(loader, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loader.style.display = 'none';
                        initAnimations();
                    }
                });
            }, 500);
        }
        progress.style.width = width + '%';
    }, 100);
});

// Initialize Animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Hero animations
    const tl = gsap.timeline();
    tl.from('.hero-badge', { opacity: 0, y: -30, duration: 1, ease: 'back.out(1.7)' })
      .from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' }, '-=0.5')
      .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .from('.hero-buttons', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .from('.social-links .social-link', { 
            opacity: 0, 
            y: 30, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: 'back.out(1.7)' 
        }, '-=0.4')
      .from('.scroll-indicator', { opacity: 0, y: 20, duration: 0.8 }, '-=0.2');

    // Typing animation
    const phrases = [
        "Building scalable web applications",
        "Creating AI-powered solutions",
        "Designing user-centric experiences",
        "Solving complex problems with code"
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    function typeText() {
        const phrase = phrases[currentPhrase];
        
        if (isDeleting) {
            typingElement.innerHTML = phrase.substring(0, currentChar - 1) + '<span class="cursor">|</span>';
            currentChar--;
        } else {
            typingElement.innerHTML = phrase.substring(0, currentChar + 1) + '<span class="cursor">|</span>';
            currentChar++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentChar === phrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeText, typeSpeed);
    }

    setTimeout(typeText, 1000);

    // Scroll animations
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.utils.toArray('.stat-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.utils.toArray('.skill-category').forEach((skill, index) => {
        gsap.from(skill, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: skill,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.utils.toArray('.project-card').forEach((project, index) => {
        gsap.from(project, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: project,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Experience cards animation
    gsap.utils.toArray('.experience-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Achievement cards animation
    gsap.utils.toArray('.achievement-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            scale: 0.8,
            duration: 1,
            delay: index * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hover effects for interactive elements
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, rotation: 360, duration: 0.5, ease: 'back.out(1.7)' });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    document.querySelectorAll('.shape').forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${parallax * speed}px)`;
    });
});

// Add some interactive particles on mouse move
document.addEventListener('mousemove', (e) => {
    const cursor = { x: e.clientX, y: e.clientY };
    
    // Create a subtle particle effect
    if (Math.random() > 0.98) {
        createParticle(cursor.x, cursor.y);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'linear-gradient(45deg, var(--primary), var(--secondary))';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    
    document.body.appendChild(particle);
    
    gsap.to(particle, {
        opacity: 0,
        y: -50,
        x: Math.random() * 100 - 50,
        scale: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
            particle.remove();
        }
    });
}