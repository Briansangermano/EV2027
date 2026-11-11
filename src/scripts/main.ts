/* ============================================================
   Interacciones
   ============================================================ */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = document.querySelector<HTMLElement>('[data-nav]');
const progress = document.querySelector<HTMLElement>('[data-progress]');

/* ---------- Toast ---------- */
let toastTimer: number | undefined;
function toast(message: string) {
  let el = document.querySelector<HTMLElement>('[data-toast]');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('data-toast', '');
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el?.classList.remove('is-visible'), 2600);
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (!items.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const step = Number(group.dataset.stagger) || 80;
    group.querySelectorAll<HTMLElement>(':scope > .reveal').forEach((el, i) => {
      if (!el.style.getPropertyValue('--reveal-delay')) {
        el.style.setProperty('--reveal-delay', `${i * step}ms`);
      }
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -56px 0px' },
  );

  items.forEach((el) => io.observe(el));
}

/* ---------- Countdown ---------- */
function initCountdown() {
  const root = document.querySelector<HTMLElement>('[data-countdown]');
  if (!root) return;

  const target = new Date(root.dataset.countdown || '').getTime();
  if (Number.isNaN(target)) return;

  const units = Array.from(root.querySelectorAll<HTMLElement>('[data-unit]'));
  const message = root.querySelector<HTMLElement>('[data-countdown-message]');
  const pad = (n: number) => String(n).padStart(2, '0');
  let last = '';

  const render = () => {
    const diff = target - Date.now();

    if (diff <= 0) {
      root.classList.add('is-over');
      const grid = root.querySelector<HTMLElement>('.countdown__grid');
      if (grid) grid.hidden = true;
      if (message) message.hidden = false;
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const signature = `${days}-${hours}-${minutes}-${seconds}`;
    if (signature === last) return;
    last = signature;

    const values = [String(days), pad(hours), pad(minutes), pad(seconds)];
    units.forEach((unit, i) => {
      if (unit.textContent === values[i]) return;
      unit.textContent = values[i];
      if (!reduceMotion) {
        unit.classList.remove('is-flipping');
        void unit.offsetWidth;
        unit.classList.add('is-flipping');
      }
    });
  };

  render();
  window.setInterval(render, 1000);
}

/* ---------- Contadores ---------- */
function initCounters() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  if (!els.length) return;

  const nf = new Intl.NumberFormat('es-AR');

  const animate = (el: HTMLElement) => {
    const end = Number(el.dataset.count) || 0;
    if (reduceMotion) {
      el.textContent = nf.format(end);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    const frame = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = nf.format(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  if (!('IntersectionObserver' in window)) {
    els.forEach(animate);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  els.forEach((el) => io.observe(el));
}

/* ---------- Scroll: nav, progreso y parallax ---------- */
function initScroll() {
  const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  let ticking = false;

  const update = () => {
    const y = window.scrollY;

    if (nav) nav.classList.toggle('is-scrolled', y > 40);

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(y / max, 1) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }

    if (!reduceMotion && y < window.innerHeight * 1.6) {
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.speed) || 0.1;
        layer.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`;
      });
    }

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* ---------- Menú móvil ---------- */
function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !panel) return;

  const close = () => {
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', open);
  });

  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

/* ---------- Copiar ---------- */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

function initCopy() {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((btn) => {
    const label = btn.dataset.copyLabel || 'Copiado';
    btn.addEventListener('click', async () => {
      const ok = await copyText(btn.dataset.copy || '');
      toast(ok ? label : 'No se pudo copiar');
      if (ok) {
        btn.classList.add('is-copied');
        window.setTimeout(() => btn.classList.remove('is-copied'), 1800);
      }
    });
  });
}

/* ---------- Compartir ---------- */
function initShare() {
  document.querySelectorAll<HTMLElement>('[data-share]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const shareData = {
        title: document.title,
        text: btn.dataset.shareText || document.title,
        url: window.location.href,
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch {
          /* el usuario canceló */
        }
        return;
      }
      const ok = await copyText(window.location.href);
      toast(ok ? 'Enlace copiado' : 'No se pudo copiar');
    });
  });
}

/* ---------- Brillo que sigue al cursor ---------- */
function initGlow() {
  if (reduceMotion || window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
    btn.addEventListener('pointermove', (event) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      btn.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });

  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--sx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--sy', `${event.clientY - rect.top}px`);
    });
  });
}

/* ---------- Arranque ---------- */
initReveal();
initCountdown();
initCounters();
initScroll();
initMenu();
initCopy();
initShare();
initGlow();
