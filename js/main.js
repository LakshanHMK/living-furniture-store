/* ==========================================================================
   Luma Living — Main Application Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initActiveNavLink();
  initTestimonialSlider();
  initNewsletterForm();
  updateFooterYear();
});

/* 1. Sticky Header */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside or clicking a link
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* 3. Highlight Active Navigation Link */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* 4. Testimonial Slider */
function initTestimonialSlider() {
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('#prevTestimonial');
  const nextBtn = document.querySelector('#nextTestimonial');

  if (!cards.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showSlide(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showSlide(currentIndex);
    });
  }

  // Automatic gentle rotation every 7 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
  }, 7000);
}

/* 5. Newsletter Subscription */
function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const email = input.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (window.CartManager) {
        CartManager.showToast('Please enter a valid email address.');
      } else {
        alert('Please enter a valid email address.');
      }
      return;
    }

    if (window.CartManager) {
      CartManager.showToast('Thank you! You are now subscribed with 10% off.');
    } else {
      alert('Thank you for subscribing!');
    }

    input.value = '';
  });
}

/* 6. Footer Year */
function updateFooterYear() {
  const yearElem = document.querySelector('#currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
