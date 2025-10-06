
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
  const form = document.getElementById('contact-form');
  form.addEventListener("submit", async function(event) {
    event.preventDefault(); // stop normal form submit
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("✅ Your response has been submitted!");
      form.reset(); // clear the form
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  });

// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Get form data
//     const formData = new FormData(contactForm);
//     const data = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         subject: formData.get('subject'),
//         message: formData.get('message')
//     };
    
//     // Simulate form submission
//     alert('Thank you for your message! I will get back to you soon.');
//     contactForm.reset();
// });

// // Initialize Lottie animation for hero section
// const heroLottie = document.getElementById('hero-lottie');

// // Create a simple animated SVG as placeholder for Lottie
// if (heroLottie) {
//     heroLottie.innerHTML = `
//         <svg viewBox="0 0 400 400" class="w-full h-full">
//             <defs>
//                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
//                     <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
//                 </linearGradient>
//             </defs>
//             <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.8">
//                 <animate attributeName="r" values="150;160;150" dur="3s" repeatCount="indefinite"/>
//             </circle>
//             <circle cx="200" cy="200" r="100" fill="none" stroke="#16f2b3" stroke-width="2" opacity="0.6">
//                 <animate attributeName="r" values="100;120;100" dur="2s" repeatCount="indefinite"/>
//             </circle>
//             <circle cx="200" cy="200" r="50" fill="#16f2b3" opacity="0.9">
//                 <animate attributeName="r" values="50;60;50" dur="1.5s" repeatCount="indefinite"/>
//             </circle>
//         </svg>
//     `;
// }

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


const Eobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            Eobserver.unobserve(entry.target); // Optional: animate only once
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.timeline-item').forEach(item => {
    Eobserver.observe(item);
});

const EMAIL = 'parantap098@gmail.com';
  let fallbackTimeout;

  function tryEmail(e) {
    // Record time before navigation attempt
    const before = Date.now();
    // Try mailto
    window.location.href = `mailto:${EMAIL}`;

    // Show fallback if after ~500ms focus hasn't changed (heuristic)
    clearTimeout(fallbackTimeout);
    fallbackTimeout = setTimeout(() => {
      // Show fallback UI
      document.getElementById('email-fallback').classList.remove('hidden');
    }, 500);
  }

  // Clicking outside hides fallback
  document.addEventListener('click', (e) => {
    const wrapper = document.getElementById('email-wrapper');
    if (!wrapper.contains(e.target)) {
      document.getElementById('email-fallback').classList.add('hidden');
    }
  });

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      const msg = document.getElementById('copy-msg');
      msg.classList.remove('hidden');
      setTimeout(() => msg.classList.add('hidden'), 1500);
    });
  }


/* ===== Extracurriculars: Lightbox + Captions ===== */
(function () {
  // Collect galleries by name
  const galleries = {};
  document.querySelectorAll('[data-gallery]').forEach(btn => {
    const g = btn.getAttribute('data-gallery');
    if (!galleries[g]) galleries[g] = [];
    galleries[g].push(btn);
  });

  const lb = document.getElementById('lightbox');
  if (!lb) return; // bail if section not present
  const lbImg = document.getElementById('lb-image');
  const btnClose = document.getElementById('lb-close');
  const btnPrev  = document.getElementById('lb-prev');
  const btnNext  = document.getElementById('lb-next');

  let currentGallery = null;
  let currentIndex = 0;
  let lastFocus = null;

  function openLightbox(galleryName, index) {
    currentGallery = galleries[galleryName] || [];
    currentIndex = index;
    const src = currentGallery[currentIndex].getAttribute('data-src');
    lbImg.src = src;
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    lastFocus = document.activeElement;
    btnClose.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.add('hidden');
    lb.classList.remove('flex');
    document.body.style.overflow = '';
    lbImg.src = '';
    if (lastFocus) lastFocus.focus();
  }

  function show(delta) {
    if (!currentGallery || !currentGallery.length) return;
    currentIndex = (currentIndex + delta + currentGallery.length) % currentGallery.length;
    const src = currentGallery[currentIndex].getAttribute('data-src');
    lbImg.src = src;
  }

  // Bind clicks on tiles
  Object.entries(galleries).forEach(([name, items]) => {
    items.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(el.getAttribute('data-index'), 10) || i;
        openLightbox(name, idx);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(el.getAttribute('data-index'), 10) || i;
          openLightbox(name, idx);
        }
      });
      el.setAttribute('tabindex', '0');
    });
  });

  // Controls
  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', () => show(-1));
  btnNext.addEventListener('click', () => show(1));
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox(); // click backdrop to close
  });
  document.addEventListener('keydown', (e) => {
    if (lb.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(-1);
    if (e.key === 'ArrowRight') show(1);
  });

  // Mobile/touch: tap to toggle captions in Misc grid
  document.querySelectorAll('.tap-caption').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If it's inside a lightbox gallery tile, let the lightbox handler run
      if (btn.closest('[data-gallery]')) return;
      const cap = btn.querySelector('.caption');
      if (!cap) return;
      const visible = cap.style.opacity === '1' || cap.classList.contains('!opacity-100');
      if (visible) {
        cap.classList.remove('!opacity-100', '!translate-y-0');
        cap.style.opacity = '';
        cap.style.transform = '';
      } else {
        cap.classList.add('!opacity-100', '!translate-y-0');
      }
      e.preventDefault();
    });
  });
})();
