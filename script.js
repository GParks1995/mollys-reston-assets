/*
 * Molly’s Dog Care Reston – Client‑side interactivity
 *
 * This script powers the interactive behaviour across the site. It
 * includes responsive navigation, hero sliders, modals, pricing
 * toggles, testimonial carousels and GSAP animations triggered on
 * scroll. Where possible the functions are encapsulated to avoid
 * polluting the global namespace. Ensure this file is loaded at the
 * bottom of your HTML documents to guarantee DOM elements exist.
 */

(() => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Hero slider
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  function activateSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    activateSlide(currentSlide);
  }
  if (slides.length > 0) {
    activateSlide(0);
    setInterval(nextSlide, 7000); // change slide every 7 seconds
  }

  // Service modals
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modals = document.querySelectorAll('.modal');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const target = trigger.getAttribute('data-modal-target');
      const modal = document.querySelector(target);
      if (modal) modal.classList.add('active');
    });
  });
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
      }
    });
  });

  // Pricing toggles
  const pricingToggles = document.querySelectorAll('.toggle-button');
  pricingToggles.forEach(toggle => {
    // locate the closest table following this toggle
    const table = toggle.parentElement.nextElementSibling;
    if (!table || !table.classList.contains('pricing-table')) return;
    const memberCells = table.querySelectorAll('.pricing-member');
    const nonMemberCells = table.querySelectorAll('.pricing-nonmember');
    let memberActive = true;
    // initialise: show member, hide non-member
    nonMemberCells.forEach(cell => cell.style.display = 'none');
    // highlight first span
    const spans = toggle.querySelectorAll('span');
    if (spans.length > 0) spans[0].classList.add('active-toggle');
    toggle.addEventListener('click', () => {
      memberActive = !memberActive;
      // toggle active class on spans
      spans.forEach(span => span.classList.toggle('active-toggle'));
      memberCells.forEach(cell => cell.style.display = memberActive ? 'table-cell' : 'none');
      nonMemberCells.forEach(cell => cell.style.display = memberActive ? 'none' : 'table-cell');
    });
  });

  // Testimonial carousel
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  let testimonialIndex = 0;
  function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  if (testimonialSlides.length > 0) {
    showTestimonial(0);
    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
      showTestimonial(testimonialIndex);
    }, 8000);
  }

  // GSAP animations
  function setupAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('[data-animate]').forEach(el => {
      const anim = el.getAttribute('data-animate');
      let props;
      switch (anim) {
        case 'fade-up':
          props = { y: 50, opacity: 0 };
          break;
        case 'fade-left':
          props = { x: 50, opacity: 0 };
          break;
        case 'fade-right':
          props = { x: -50, opacity: 0 };
          break;
        default:
          props = { y: 50, opacity: 0 };
      }
      gsap.from(el, {
        ...props,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
  }
  // Wait for GSAP script to load if necessary
  if (document.readyState === 'complete') {
    setupAnimations();
  } else {
    window.addEventListener('load', setupAnimations);
  }
})();