document.getElementById('app-footer').innerHTML = `
<footer class="footer">
  <div class="footer__container">
    <div class="footer__top">
      <div class="footer-col">
        <div class="footer__brand">
          <img src="assets/icons/icono.png" alt="Level-Up Gamer" class="footer__logo">
        </div>

        <p class="footer__label">Síguenos:</p>
        <div class="social">
          <a href="#" class="social__btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social__btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social__btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
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
        <ul class="contact">
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

    <div class="footer__bottom">
      <div class="copy">© Level-Up Gamer, 2025. Todos los derechos reservados.</div>
      <div class="pay">
        <img src="assets/img/pagos/mercado-pago.png" alt="Mercado Pago">
        <img src="assets/img/pagos/webpay.png" alt="WebPay">
      </div>
    </div>
  </div>

  <a href="https://wa.me/56999999999" target="_blank" rel="noopener" class="wa" aria-label="¿Cómo puedo ayudarte?">
    <i class="fa-brands fa-whatsapp"></i><span class="wa__text">¿Cómo puedo ayudarte?</span>
  </a>
</footer>
`;