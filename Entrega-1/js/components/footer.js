document.getElementById('app-footer').innerHTML = `
<footer class="footer">
  <div class="footer_container">
    <div class="footer_top">
      <div class="footer-col">
        <div class="footer_brand">
          <img src="assets/icons/icono.png" alt="Level-Up Gamer" class="footer_logo">
        </div>

        <p class="footer_label">Síguenos:</p>
        <div class="social">
          <a href="#" class="social_btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social_btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social_btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
      
      <div class="footer-col">
        <h4 class="heading">Sitios de interés</h4>
        <ul class="links">
          <li><a href="pages/contacto/contacto.html">Contáctanos</a></li>
          <li><a href="pages/contacto/garantia.html">Nuestras garantías</a></li>
          <li><a href="pages/contacto/terminos.html">Términos y condiciones</a></li>
          <li><a href="pages/contacto/blog.html">Blog</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="heading">Contáctenos</h4>
        <ul class="contacto">
          <li><a href="mailto:consultas@levelupgamer.cl">consultas@levelupgamer.cl</a></li>
          <li><a href="mailto:ventas@levelupgamer.cl">ventas@levelupgamer.cl</a></li>
          <li><a href="tel:+56999999999">+56 9 9999 9999</a></li>
          <li>Av. Vicuña Mackenna #4917, Local 1, San Joaquín.</li>
          <li>Lun a Vie 10:00–18:30 • Sáb 10:00–14:00</li>
          <li>Dom y Festivos cerrado.</li>
        </ul>
      </div>
    </div>

    <hr class="divider">

    <div class="footer_bajo">
      <div class="derechosreservados">© Level-Up Gamer, 2025. Todos los derechos reservados.</div>
      <div class="pagos">
        <img src="assets/img/pagos/mercado-pago.png" alt="Mercado Pago">
        <img src="assets/img/pagos/webpay.png" alt="WebPay">
      </div>
    </div>
  </div>
</footer>
`;