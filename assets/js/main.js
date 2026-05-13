/* Shree Radha Rani Agrotech — core behaviour */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    highlightActiveLink();
});

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

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
            const isDark = html.classList.contains('dark');
            html.classList.toggle('dark', !isDark);
            html.classList.toggle('light', isDark);
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });
    }
}

function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuBtn && overlay) {
        menuBtn.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            requestAnimationFrame(() => overlay.classList.add('active'));
            document.body.style.overflow = 'hidden';
        });
    }

    const close = () => {
        if (!overlay) return;
        overlay.classList.remove('active');
        setTimeout(() => overlay.classList.add('hidden'), 360);
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay?.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
}

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('active'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    reveals.forEach(el => observer.observe(el));
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const onScroll = () => {
        if (window.scrollY > 600) btn.classList.add('visible');
        else btn.classList.remove('visible');
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

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

        if (!isValid) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Sending';

        setTimeout(() => {
            form.innerHTML = `
                <div class="reveal active py-8">
                    <span class="eyebrow eyebrow-rule">Inquiry received</span>
                    <h3 class="font-display text-[40px] leading-[46px] text-primary mt-6 mb-6 tracking-tight">Thank you. We will respond within two working days.</h3>
                    <p class="font-serif text-[17px] leading-[28px] text-on-surface-variant max-w-lg">A member of our engineering team will reach out to schedule a feasibility conversation. For urgent procurement queries, write directly to inquiries@srragro.com.</p>
                    <button type="button" onclick="window.location.reload()" class="mt-8 btn-ghost">Send another message</button>
                </div>
            `;
        }, 1200);
    });
}

function highlightActiveLink() {
    const currentPath = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('nav a').forEach(link => {
        const href = (link.getAttribute('href') || '').replace('./', '').toLowerCase();
        if (href === currentPath) link.classList.add('nav-link-active');
    });
}
