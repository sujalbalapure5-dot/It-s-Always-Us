/* ============================================
   STARS CANVAS
   ============================================ */
(function () {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 5000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame += 0.01;
    stars.forEach((s) => {
      const a = s.alpha * (0.5 + 0.5 * Math.sin(frame * s.speed * 100 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  initStars();
  draw();

  window.addEventListener('resize', () => {
    resize();
    initStars();
  });
})();

/* ============================================
   SCROLL REVEAL
   ============================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ============================================
   SCROLL TO TIMELINE
   ============================================ */
function scrollToTimeline() {
  document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
}

/* ============================================
   FORGIVE BUTTONS
   ============================================ */
function showFinal() {
  const screen = document.getElementById('finalScreen');
  screen.classList.remove('hidden');
  // small tick to allow display:flex before opacity transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      screen.classList.add('visible');
    });
  });
}

function moveNo(button) {
  const range = 200;
  const x = (Math.random() - 0.5) * range * 2;
  const y = (Math.random() - 0.5) * range * 2;
  button.style.transform = `translate(${x}px, ${y}px)`;
  // fade it slightly each time
  const current = parseFloat(button.style.opacity) || 1;
  button.style.opacity = Math.max(0.2, current - 0.15);
  button.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s';
}

/* ============================================
   LIGHTBOX
   ============================================ */
document.addEventListener('click', (e) => {
  if (e.target.matches('.img-wrap img, .final-img-wrap img')) {
    const src = e.target.src;
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    const img = document.createElement('img');
    img.src = src;
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  }
});

/* Keyboard close lightbox */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lb = document.querySelector('.lightbox-overlay');
    if (lb) lb.remove();
  }
});
