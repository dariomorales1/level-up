(function () {
  
  const makeToast = (title, body, success = true, delay = 2200) => {
    let holder = document.getElementById('toastHolder');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = 'toastHolder';
      holder.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(holder);
    }
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-' + (success ? 'success' : 'danger') + ' border-0';
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body"><strong>${title}:</strong> ${body}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>`;
    holder.appendChild(toast);
    new bootstrap.Toast(toast, { delay }).show();
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-eye');
    if (!btn) return;
    const sel = btn.getAttribute('data-toggle');
    const input = document.querySelector(sel);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.querySelector('i')?.classList.toggle('fa-eye-slash');
  });

  const form = document.getElementById('registerForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const pass = document.getElementById('regPassword');
    const pass2 = document.getElementById('regPassword2');
    if (pass.value !== pass2.value) {
      pass2.setCustomValidity('Las contraseñas no coinciden');
    } else {
      pass2.setCustomValidity('');
    }

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      makeToast('Ups', 'Revisa los campos requeridos.', false);
      return;
    }

    makeToast('Registro exitoso', 'Ya puedes comprar y revisar tu cuenta.');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1400);
  });
})();