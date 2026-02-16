/* ============================================
   OrthoMitra - Main JavaScript
   ============================================ */

// =============================================
// CONFIGURATION - Update phone number here
// =============================================
const CONFIG = {
    whatsappNumber: '+15551463301',   // Country code + number, no + or spaces
    whatsappMessage: 'Hi! I have an orthopedic issue and need some guidance.',
};

// =============================================
// WhatsApp Link Setup
// =============================================
function getWhatsAppURL() {
    var msg = encodeURIComponent(CONFIG.whatsappMessage);
    return 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + msg;
}

function initWhatsAppLinks() {
    var url = getWhatsAppURL();
    var ids = [
        'navCtaBtn', 'heroCtaBtn', 'ctaBtn',
        'whatsappFloat', 'footerWhatsappLink', 'footerPhoneLink'
    ];
    ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
            el.href = url;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        }
    });
}

// =============================================
// Navbar scroll effect
// =============================================
function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// =============================================
// Mobile menu
// =============================================
function initMobileMenu() {
    var btn = document.getElementById('mobileMenuBtn');
    var nav = document.getElementById('navLinks');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
        nav.classList.toggle('active');
        btn.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            btn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// =============================================
// Scroll reveal animations
// =============================================
function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
        observer.observe(el);
    });
}

// =============================================
// Animated counters
// =============================================
function animateCounter(el, target, suffix) {
    var duration = 1600;
    var start = 0;
    var startTime = null;
    suffix = suffix || '';

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // ease-out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target + suffix;
        }
    }

    requestAnimationFrame(step);
}

function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.getAttribute('data-count'), 10);
                var suffix = el.getAttribute('data-suffix') || '';
                animateCounter(el, target, suffix);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
        observer.observe(el);
    });
}

// =============================================
// Smooth scroll for anchor links
// =============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var offset = 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });
}

// =============================================
// Active nav link highlighting
// =============================================
function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                navLinks.forEach(function (link) {
                    link.style.color = '';
                    if (link.getAttribute('href') === '#' + id) {
                        link.style.color = 'var(--teal)';
                    }
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

// =============================================
// Initialize everything
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    initWhatsAppLinks();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initSmoothScroll();
    initActiveNav();
});
