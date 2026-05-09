/* main.js - Core logic for Indigenous Biochar */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    highlightActiveLink();
});

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
        html.classList.remove('light');
    } else {
        html.classList.add('light');
        html.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                html.classList.add('light');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// --- Mobile Menu ---
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuBtn && overlay) {
        menuBtn.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.add('hidden');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on link click
    const navLinks = overlay?.querySelectorAll('a');
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.add('hidden');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// --- Scroll Animations ---
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

// --- Back to Top ---
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Contact Form ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation check
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-error');
            } else {
                input.classList.remove('border-error');
            }
        });

        if (isValid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Sending...';
            
            // Simulate API call
            setTimeout(() => {
                form.innerHTML = `
                    <div class="text-center py-xl reveal active">
                        <span class="material-symbols-outlined text-primary text-5xl mb-md">check_circle</span>
                        <h3 class="font-headline-md text-headline-md text-primary mb-sm">Inquiry Received!</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant">
                            Thank you for your interest. Our experts will contact you within 24-48 hours.
                        </p>
                        <button onclick="window.location.reload()" class="mt-lg text-primary font-label-md underline">Send another message</button>
                    </div>
                `;
            }, 1500);
        }
    });
}

// --- Highlight Active Link ---
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('./', '');
        if (href === currentPath) {
            link.classList.add('nav-link-active');
            link.classList.add('text-primary');
            link.classList.remove('text-on-surface-variant');
        }
    });
}
