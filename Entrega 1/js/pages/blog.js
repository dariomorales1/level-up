// blog.js – inyecta subnavbar y fecha "Actualizado"
(function () {
  const injectNavbar = () => {
    if (!document.getElementById('navbarProductos')) return;
    document.body.classList.add('has-subnav');
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
    el.textContent = now.toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectNavbar(); setLastUpdate(); });
  } else {
    injectNavbar(); setLastUpdate();
  }
})();
