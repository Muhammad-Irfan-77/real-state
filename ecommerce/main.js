document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Cart notification
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const orig = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.background = 'linear-gradient(135deg, #059669, #10B981)';
      btn.style.color = 'white';
      btn.style.borderColor = 'transparent';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
      }, 1800);
    });
  });
});
