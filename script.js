/* ========================= */
/* SCROLL TO TIMELINE */
/* ========================= */
function scrollToTimeline() {
  document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
}

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */
const fadeEls = document.querySelectorAll('.fade');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach((el) => observer.observe(el));

/* ========================= */
/* FINAL SCREEN */
/* ========================= */
function showFinal() {
  const screen = document.getElementById('finalScreen');
  screen.classList.remove('hidden');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      screen.classList.add('visible');
    });
  });
}

/* ========================= */
/* NO BUTTON */
/* ========================= */
function moveNo(button) {
  const x = (Math.random() - 0.5) * 320;
  const y = (Math.random() - 0.5) * 320;
  button.style.transform = `translate(${x}px, ${y}px)`;
  const cur = parseFloat(button.style.opacity) || 1;
  button.style.opacity = Math.max(0.15, cur - 0.15);
  button.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s';
}

/* ========================= */
/* LIGHTBOX */
/* ========================= */
document.addEventListener('click', (e) => {
  if (e.target.matches('.card img, .gallery img')) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    const img = document.createElement('img');
    img.src = e.target.src;
    lb.appendChild(img);
    document.body.appendChild(lb);
    lb.addEventListener('click', () => lb.remove());
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lb = document.querySelector('.lightbox');
    if (lb) lb.remove();
  }
});
