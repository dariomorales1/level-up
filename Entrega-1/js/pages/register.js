(() => {

  const form = document.getElementById("FormularioRegistro");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameEl = document.getElementById("registroNombre");
    const emailEl = document.getElementById("registroEmail");
    const passEl  = document.getElementById("registroPassword");
    const pass2El = document.getElementById("registroPassword2");
    const termsEl = document.getElementById("checkTerminos");

    if (!nameEl || !emailEl || !passEl || !pass2El || !termsEl) {
      alert("Falta llenar campos del formulario.");
      return;
    }

    // Validación: contraseñas iguales
    if (passEl.value !== pass2El.value) {
      pass2El.setCustomValidity("Las contraseñas no coinciden, revisar.");
    } else {
      pass2El.setCustomValidity("");
    }

    // Usa validación nativa del navegador
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    //VALIDA Y GUARDA EN LOCALSTORAGE
    try {
      const user = { name: nameEl.value.trim(), email: emailEl.value.trim().toLowerCase() };
      localStorage.setItem("registered_user_demo", JSON.stringify(user));
    } catch {}

    alert("Registro exitoso. ¡Bienvenido/a!");
    location.href = "index.html";
  });
})();