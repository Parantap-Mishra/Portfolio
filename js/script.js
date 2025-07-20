// Theme Toggle
/*const themeIcon = document.getElementById('theme-icon');

// 1. Load stored preference or system setting
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  themeIcon.className = 'fas fa-moon';
} else {
  document.documentElement.classList.remove('dark');
  themeIcon.className = 'fas fa-sun';
}

// 2. Toggle on click, update both class + icon + localStorage
document.getElementById('theme-toggle').addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    themeIcon.className = 'fas fa-sun';
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    themeIcon.className = 'fas fa-moon';
    localStorage.theme = 'dark';
  }
});*/


// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
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

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.remove('opacity-100', 'visible');
        backToTopBtn.classList.add('opacity-0', 'invisible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active navigation highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-primary');
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Initialize Lottie animation for hero section
const heroLottie = document.getElementById('hero-lottie');

// Create a simple animated SVG as placeholder for Lottie
if (heroLottie) {
    heroLottie.innerHTML = `
        <svg viewBox="0 0 400 400" class="w-full h-full">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.8">
                <animate attributeName="r" values="150;160;150" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="200" r="100" fill="none" stroke="#16f2b3" stroke-width="2" opacity="0.6">
                <animate attributeName="r" values="100;120;100" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="200" r="50" fill="#16f2b3" opacity="0.9">
                <animate attributeName="r" values="50;60;50" dur="1.5s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all sections for animations
sections.forEach(section => {
    observer.observe(section);
});

// Add fade-in animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.classList.add('loaded');
});