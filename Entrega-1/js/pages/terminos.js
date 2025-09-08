(function () {
  const injectNavbar = () => {
    if (!document.getElementById('navbarProductos')) {
      const container = document.createElement('div');
      container.id = 'navbarProductos';
      const main = document.querySelector('main .container-xxl') || document.querySelector('main') || document.body;
      main.prepend(container);
    }
    const B = window.ASSET_BASE || '../../';
    if (!document.querySelector('.barProductos')) {
      const s = document.createElement('script');
      s.src = B + 'js/components/navbarProductos.js';
      s.defer = true;
      document.body.appendChild(s);
    }
  };

  const setLastUpdate = () => {
    const el = document.getElementById('lastUpdate');
    if (!el) return;
    const now = new Date();
    const fmt = now.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
    el.textContent = fmt;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectNavbar(); setLastUpdate(); });
  } else {
    injectNavbar(); setLastUpdate();
  }
})();
