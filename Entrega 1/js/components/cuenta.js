function escapeHTML(s) {
    return String(s ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

document.addEventListener("DOMContentLoaded", () => {
    const cuentaContainer = document.getElementById("cuentaContainer");
    if(!cuentaContainer) return;

    const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;

    if (!user) {
        window.location.href = "./auth/login.html";
        return
    }

    const nombre   = escapeHTML(user.name || user.email || "Usuario");
    const birthday = escapeHTML(user.birthday || "--/--/----");
    const address  = escapeHTML(user.address  || "Address #123");

    cuentaContainer.innerHTML = `
        <section class="perfil">
            <div class="foto">
                <img src="assets/img/cuenta/perfilOut.jpg" class="fotoPerfil" alt="Foto de perfil">
                <p class="hiddenText">Cambiar Foto</p>
            </div>
            <p id="name">${nombre}</p>
        </section>
        <section class="info">
            <h6>Informacion :</h6>
            <div class="userInfo">
                <div class="infoIzquierda">
                    <p>Fecha de Nacimiento: </p>
                    <p>Dirección: </p>
                </div>
                <div class="infoDerecha">
                    <p>${birthday}</p>
                    <p>${address}</p>
                </div>
            </div>
        </section>
    `;
});