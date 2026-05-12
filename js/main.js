/* PlusChatbot — main.js */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile menu ──────────────────────────────── */
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen  = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  const iconClose = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      btn.innerHTML = open ? iconOpen : iconClose;
    });
  }

  /* ── Sticky nav ───────────────────────────────── */
  const nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── FAQ accordion ────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const icon   = q.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotated'));
      if (!isOpen) {
        answer.classList.add('open');
        icon && icon.classList.add('rotated');
      }
    });
  });

  /* ── Pricing toggle (monthly / annual) ─────────── */
  const toggle       = document.getElementById('pricing-toggle');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual  = document.getElementById('label-annual');

  if (toggle) {
    toggle.addEventListener('change', () => {
      const annual = toggle.checked;
      document.querySelectorAll('.price-monthly').forEach(el => el.classList.toggle('hidden', annual));
      document.querySelectorAll('.price-annual').forEach(el  => el.classList.toggle('hidden', !annual));
      if (labelMonthly) {
        labelMonthly.classList.toggle('text-white', !annual);
        labelMonthly.classList.toggle('text-slate-400', annual);
      }
      if (labelAnnual) {
        labelAnnual.classList.toggle('text-white', annual);
        labelAnnual.classList.toggle('text-slate-400', !annual);
      }
    });
  }

  /* ── Animated number counters ─────────────────── */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = '1';
      const target   = parseInt(entry.target.dataset.target, 10);
      const suffix   = entry.target.dataset.suffix || '';
      const duration = 1800;
      const start    = performance.now();
      const tick = (now) => {
        const pct = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - pct, 3);
        entry.target.textContent = Math.floor(ease * target).toLocaleString('es-CO') + suffix;
        if (pct < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

  /* ── Scroll reveal ────────────────────────────── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    revealObs.observe(el);
  });

  /* ── Contact form ─────────────────────────────── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled    = true;

      const data = {
        nombre:   form.nombre.value,
        empresa:  form.empresa.value,
        email:    form.email.value,
        telefono: form.telefono.value,
        motivo:   form.motivo.value,
        mensaje:  form.mensaje.value,
      };

      try {
        await fetch('https://n8n.srv1164464.hstgr.cloud/webhook/3d06afe9-d994-486b-8609-5cc6bc2309e6', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        submitBtn.textContent      = '✓ ¡Mensaje enviado!';
        submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        form.reset();
        setTimeout(() => {
          submitBtn.textContent      = 'Enviar mensaje ✉️';
          submitBtn.disabled         = false;
          submitBtn.style.background = '';
        }, 4000);
      } catch {
        submitBtn.textContent      = '✗ Error al enviar — intenta de nuevo';
        submitBtn.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
        submitBtn.disabled         = false;
        setTimeout(() => {
          submitBtn.textContent      = 'Enviar mensaje ✉️';
          submitBtn.style.background = '';
        }, 4000);
      }
    });
  }

});
