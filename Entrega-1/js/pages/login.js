(() => {
  // Credenciales demo
  const user1 = "admin@duoc.cl";
  const password1 = "123456";

  // Toast Bootstrap
  function makeToast(title, body, success = true, delay = 2000) {
    let holder = document.getElementById('toastHolder');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = 'toastHolder';
      holder.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(holder);
    }
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-' + (success ? 'success' : 'danger') + ' border-0';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          <strong>${title}:</strong> ${body}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>`;
    holder.appendChild(toast);
    try { new bootstrap.Toast(toast, { delay }).show(); } catch {}
  }

  // Toggle ojo contraseña
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-eye');
    if (!btn) return;
    const sel = btn.getAttribute('data-toggle');
    const input = document.querySelector(sel);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.querySelector('i')?.classList.toggle('fa-eye-slash');
  });

  // Olvidé contraseña
  document.getElementById('forgotLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    makeToast('Pronto', 'La recuperación de clave estará disponible próximamente.', false, 2500);
  });

  // Submit (en captura para evitar recarga)
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (!form || form.id !== 'loginForm') return;

    e.preventDefault();
    e.stopImmediatePropagation();

    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      makeToast('Ups', 'Revisa los campos requeridos.', false);
      return;
    }

    const emailEl = document.getElementById("loginEmail");
    const passEl  = document.getElementById("loginPassword");
    if (!emailEl || !passEl) {
      makeToast('Error', 'No se encontraron campos de login.', false);
      return;
    }

    const loginEmail = emailEl.value.trim().toLowerCase();
    const loginPassword = passEl.value;

    if (loginEmail === user1 && loginPassword === password1) {
      // Guarda sesión: usa helper global si existe; si no, fallback
      if (typeof setCurrentUser === "function") {
        setCurrentUser({ email: loginEmail, name: "Admin" });
      } else {
        localStorage.setItem("session_user", JSON.stringify({ email: loginEmail, name: "Admin" }));
      }

      makeToast('Bienvenido', 'Inicio de sesión correcto.');
      setTimeout(() => { window.location.href = 'index.html'; }, 1200);
    } else {
      makeToast('Ups', 'Datos inválidos.', false);
    }
  }, true);
})();
