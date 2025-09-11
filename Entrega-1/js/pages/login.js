(() => {
  //CREDENCIALES DEMO
  const DEMO_EMAIL = "admin@duoc.cl";
  const DEMO_PASS  = "123456";

  //MENSAJE OLVIDE PASS
  const forgot = document.getElementById("forgotLink");
  if (forgot) {
    forgot.addEventListener("click", (e) => {
      e.preventDefault();
      alert("La recuperación de clave estará disponible próximamente.");
    });
  }

  //VALIDA Y ENVIA FORMULARIO
  const form = document.getElementById("Formulario_Login");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailEl = document.getElementById("Email_login");
    const passEl  = document.getElementById("Password_login");
    if (!emailEl || !passEl) return alert("Falta por llenar campos del formulario.");

    //VALIDADOR POR HTML
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const email = emailEl.value.trim().toLowerCase();
    const pass  = passEl.value;

    if (email === DEMO_EMAIL && pass === DEMO_PASS) {

      //GUARDA SESSION CON LOCALSTORAGE
      const user = { email, name: "Admin" };
      try {
        if (typeof setCurrentUser === "function") {
          setCurrentUser(user);
        } else {
          localStorage.setItem("session_user", JSON.stringify(user));
        }
      } catch {}

      //MENSAJE DE INICIO CORRECTO Y REDIRECCIONA
      alert("Inicio de sesión correcto.");
      location.href = "index.html";
    } else {
      alert("Datos inválidos. Revisa tu correo y contraseña.");
    }
  });
})();