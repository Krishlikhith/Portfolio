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

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
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

    // Scroll animations with mobile optimizations
    const isMobile = window.innerWidth <= 768;
    
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            duration: isMobile ? 0.8 : 1,
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
            y: isMobile ? 20 : 30,
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
            y: isMobile ? 30 : 50,
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
            y: isMobile ? 30 : 50,
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
            y: isMobile ? 20 : 30,
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
            x: isMobile ? -30 : -50,
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
            y: isMobile ? 30 : 50,
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
            y: isMobile ? 30 : 50,
            scale: isMobile ? 0.9 : 0.8,
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

// Navbar scroll effect with mobile optimizations
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
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
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200 && scrollY < sectionTop + sectionHeight - 200) {
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

// Smooth scroll for navigation links with mobile offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const isMobile = window.innerWidth <= 768;
            const offset = isMobile ? 80 : 100;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced hover effects for interactive elements
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        }
    });
    
    btn.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        }
    });
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            gsap.to(link, { scale: 1.1, rotation: 360, duration: 0.5, ease: 'back.out(1.7)' });
        }
    });
    
    link.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            gsap.to(link, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        }
    });
});

// Enhanced parallax effect with mobile considerations
window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        document.querySelectorAll('.shape').forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${parallax * speed}px)`;
        });
    }
});

// Mobile-optimized particle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const cursor = { x: e.clientX, y: e.clientY };
        
        // Create a subtle particle effect (reduced frequency for performance)
        if (Math.random() > 0.985) {
            createParticle(cursor.x, cursor.y);
        }
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

// Touch event handlers for mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.project-card, .skill-category, .achievement-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Resize handler to optimize animations and effects
window.addEventListener('resize', debounce(() => {
    // Reinitialize ScrollTrigger on resize
    ScrollTrigger.refresh();
    
    // Close mobile menu on desktop
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
}, 250));

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimizations
// Reduce motion for users with motion sensitivity
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01ms !important';
        el.style.animationIterationCount = '1 !important';
        el.style.transitionDuration = '0.01ms !important';
    });
}

// Intersection Observer for better performance
const observerOptions = {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all sections for lazy loading effects
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Preload critical images for better performance
const criticalImages = [
    // Add any critical image URLs here if you have them
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Service Worker registration for PWA functionality (optional)
if ('serviceWorker' in navigator && 'caches' in window) {
    window.addEventListener('load', () => {
        // You can uncomment this if you want to add SW functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // Tab navigation improvements
    if (e.key === 'Tab') {
        // Ensure focus is visible on keyboard navigation
        document.body.classList.add('keyboard-nav');
    }
});

// Remove keyboard navigation class on mouse interaction
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add skip link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.setAttribute('aria-label', 'Main content');
        heroSection.id = 'main-content';
    }
    
    // Improve button accessibility
    document.querySelectorAll('.btn').forEach(btn => {
        if (!btn.getAttribute('aria-label') && !btn.textContent.trim()) {
            btn.setAttribute('aria-label', 'Button');
        }
    });
    
    // Improve navigation accessibility
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.setAttribute('role', 'navigation');
        navbar.setAttribute('aria-label', 'Main navigation');
    }
    
    // Mobile menu button accessibility
    if (navToggle) {
        navToggle.setAttribute('aria-label', 'Toggle navigation menu');
        navToggle.setAttribute('aria-expanded', 'false');
        
        // Update aria-expanded when menu opens/closes
        const originalToggle = navToggle.onclick;
        navToggle.addEventListener('click', () => {
            const isExpanded = navLinks.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded.toString());
        });
    }
    
    // Add reduced motion CSS if user prefers it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        // Log performance metrics for debugging
        if (entry.entryType === 'navigation') {
            console.log(`Page load time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    });
});

// Start observing navigation performance
if (window.PerformanceObserver) {
    try {
        performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });
    } catch (e) {
        // Fallback for browsers that don't support certain entry types
        console.log('Performance observer not fully supported');
    }
}

// Final initialization check
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully');
    
    // Ensure GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded. Animations may not work properly.');
    }
    
    // Check if all critical elements exist
    const criticalElements = ['navbar', 'nav-toggle', 'nav-links'];
    criticalElements.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`Critical element #${id} not found`);
        }
    });
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createParticle,
        debounce
    };
}