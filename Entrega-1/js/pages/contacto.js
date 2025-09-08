(function () {

  const form = document.getElementById('contactoForm');

  const makeToast = (title, body, success = true) => {
    
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
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;
    holder.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast, { delay: 3500 });
    bsToast.show();
  };

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      makeToast('Ups', 'Revisa los campos requeridos.', false);
      return;
    }

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    setTimeout(() => {
      console.log('Contacto enviado:', data);
      form.reset();
      form.classList.remove('was-validated');
      makeToast('¡Listo', 'Tu mensaje fue enviado con éxito! Te contactaremos pronto.');
    }, 400);
  });
})();
