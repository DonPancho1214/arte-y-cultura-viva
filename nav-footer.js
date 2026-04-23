/* ============================================================
   NAV-FOOTER.JS — Inyecta nav y footer en todas las páginas
   Uso: incluir ANTES de main.js
   ============================================================ */
(function () {

  /* Detectar si estamos en /pages/ para ajustar rutas */
  var enSubcarpeta = window.location.pathname.indexOf('/pages/') !== -1;
  var base = enSubcarpeta ? '../' : '';
  var pag  = 'pages/';

  /* ---- Iconos SVG de Redes Sociales ---- */
  var svgFB  = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
  var svgIG  = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
  var svgYT  = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>';
  var svgX   = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M14.095 10.316 22.286 1h-1.94L13.23 9.088 7.551 1H1l8.582 12.231L1 23h1.94l7.637-8.543L16.45 23H23l-8.905-12.684zm-2.702 3.023-.885-1.23L3.696 2.432h3.032l5.688 7.874.884 1.23 7.389 10.239h-3.032l-6.264-8.436z"/></svg>';
  var svgWA  = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';

  /* ---- NAV ---- */
var navHTML = '\
<a href="#contenido-principal" class="skip-link">Saltar al contenido principal</a>\
<header class="header" id="header">\
<div class="franja-arcoiris" aria-hidden="true">\
  <span style="background:#E8720C"></span>\
  <span style="background:#E8C020"></span>\
  <span style="background:#6AAF20"></span>\
  <span style="background:#2A6DB5"></span>\
  <span style="background:#7B3FA0"></span>\
  <span style="background:#D13B2A"></span>\
</div>\
  <nav class="nav-inner" role="navigation" aria-label="Menú principal">\
    <a href="' + base + 'index.html" class="logo-link" aria-label="Arte y Cultura Viva - Inicio">\
      <div class="logo-icono" aria-hidden="true">\
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
          <path d="M12 2C8 2 5 7 5 11c0 2.5 1.5 4 3 4 1 0 1.5-2 2.5-3s1.5-1.5 1.5-1.5 .5.5 1.5 1.5 1.5 3 2.5 3c1.5 0 3-1.5 3-4 0-4-3-9-7-9z" fill="white" opacity=".9"/>\
          <line x1="12" y1="12" x2="12" y2="22" stroke="white" stroke-width="2" stroke-linecap="round"/>\
          <line x1="9" y1="22" x2="15" y2="22" stroke="white" stroke-width="2" stroke-linecap="round"/>\
        </svg>\
      </div>\
      <div>\
        <div class="logo-nombre">Arte y Cultura Viva</div>\
        <div class="logo-sub">Fundación Cultural</div>\
      </div>\
    </a>\
    <ul class="nav-menu" id="nav-menu" role="list">\
      <li><a href="' + base + 'index.html" data-pagina="inicio">Inicio</a></li>\
      <li><a href="' + base + pag + 'quienes-somos.html" data-pagina="quienes-somos">Quiénes somos</a></li>\
      <li><a href="' + base + pag + 'programas.html" data-pagina="programas">Programas</a></li>\
      <li><a href="' + base + pag + 'galeria.html" data-pagina="galeria">Galería</a></li>\
      <li><a href="' + base + pag + 'noticias.html" data-pagina="noticias">Noticias</a></li>\
      <li><a href="' + base + pag + 'voluntariado.html" data-pagina="voluntariado">Voluntariado</a></li>\
      <li><a href="' + base + pag + 'contacto.html" data-pagina="contacto">Contáctenos</a></li>\
    </ul>\
    <div class="nav-acciones">\
      <button class="btn-tema" id="btn-tema" aria-label="Cambiar modo claro/oscuro" title="Alternar tema">\
        <svg class="icono-sol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>\
        <svg class="icono-luna" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>\
      </button>\
      <a href="' + base + pag + 'donaciones.html" class="btn btn-primario donar-hd">Donar ahora</a>\
      <button class="nav-hamburger" id="btn-hamburger" aria-label="Abrir menú" aria-expanded="false">\
        <span></span><span></span><span></span>\
      </button>\
    </div>\
  </nav>\
</header>';

  /* ---- FOOTER ---- */
  var footerHTML = '\
<div class="franja-arcoiris" aria-hidden="true" style="margin-top:auto">\
  <span style="background:#D13B2A"></span>\
  <span style="background:#7B3FA0"></span>\
  <span style="background:#2A6DB5"></span>\
  <span style="background:#6AAF20"></span>\
  <span style="background:#E8C020"></span>\
  <span style="background:#E8720C"></span>\
</div>\
<footer class="footer" role="contentinfo">\
  <div class="contenedor">\
    <div class="footer-grid">\
      <div class="footer-marca">\
        <a href="' + base + 'index.html" class="logo-link">\
          <div class="logo-icono" aria-hidden="true">\
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 5 7 5 11c0 2.5 1.5 4 3 4 1 0 1.5-2 2.5-3s1.5-1.5 1.5-1.5 .5.5 1.5 1.5 1.5 3 2.5 3c1.5 0 3-1.5 3-4 0-4-3-9-7-9z" fill="white" opacity=".9"/><line x1="12" y1="12" x2="12" y2="22" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="22" x2="15" y2="22" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>\
          </div>\
          <div>\
            <div class="logo-nombre" style="color:rgba(255,255,255,.85)">Arte y Cultura Viva</div>\
            <div class="logo-sub">Fundación Cultural</div>\
          </div>\
        </a>\
        <p style="margin-top:1rem">Fundación sin ánimo de lucro que promueve el arte y la cultura como herramientas de transformación social en Colombia. NIT: XXX.XXX.XXX-X</p>\
        <div class="redes-iconos" style="margin-top:1.2rem">\
          <a href="#" class="red-btn" aria-label="Facebook">' + svgFB + '</a>\
          <a href="#" class="red-btn" aria-label="Instagram">' + svgIG + '</a>\
          <a href="#" class="red-btn" aria-label="YouTube">' + svgYT + '</a>\
          <a href="#" class="red-btn" aria-label="Twitter / X">' + svgX + '</a>\
          <a href="#" class="red-btn" aria-label="WhatsApp">' + svgWA + '</a>\
        </div>\
      </div>\
      <div class="footer-col">\
        <h4>La fundación</h4>\
        <ul class="footer-nav">\
          <li><a href="' + base + pag + 'quienes-somos.html">Quiénes somos</a></li>\
          <li><a href="' + base + pag + 'quienes-somos.html#historia">Historia</a></li>\
          <li><a href="' + base + pag + 'quienes-somos.html#equipo">Equipo</a></li>\
          <li><a href="' + base + pag + 'transparencia.html">Transparencia</a></li>\
          <li><a href="' + base + pag + 'documentos.html">Documentos</a></li>\
          <li><a href="' + base + pag + 'noticias.html">Noticias</a></li>\
        </ul>\
      </div>\
      <div class="footer-col">\
        <h4>Participa</h4>\
        <ul class="footer-nav">\
          <li><a href="' + base + pag + 'programas.html">Programas</a></li>\
          <li><a href="' + base + pag + 'donaciones.html">Donaciones</a></li>\
          <li><a href="' + base + pag + 'voluntariado.html">Voluntariado</a></li>\
          <li><a href="' + base + pag + 'galeria.html">Galería</a></li>\
          <li><a href="' + base + pag + 'contacto.html">Contáctenos</a></li>\
        </ul>\
      </div>\
    </div>\
  </div>\
  <div class="footer-legal">\
    <div class="contenedor">\
      <div class="footer-legal-inner">\
        <p>© 2025 Fundación Arte y Cultura Viva · NIT: XXX.XXX.XXX-X · Entidad sin ánimo de lucro</p>\
        <ul class="footer-legal-links">\
          <li><a href="' + base + pag + 'politica-privacidad.html">Política de privacidad</a></li>\
          <li><a href="' + base + pag + 'terminos.html">Términos y condiciones</a></li>\
          <li><a href="' + base + pag + 'politica-cookies.html">Política de cookies</a></li>\
          <li><a href="' + base + pag + 'transparencia.html">Transparencia</a></li>\
        </ul>\
      </div>\
    </div>\
  </div>\
</footer>\
<div class="cookies-banner oculto" id="cookiesBanner" role="dialog" aria-label="Aviso de cookies">\
  <div class="cookies-texto">\
    <strong style="display:block;color:#fff;margin-bottom:.2rem">Usamos cookies</strong>\
    Utilizamos cookies para mejorar tu experiencia. Puedes aceptarlas o\
    <a href="' + base + pag + 'politica-cookies.html">gestionar preferencias</a>.\
  </div>\
  <div class="cookies-btns">\
    <button class="btn btn-contorno" id="rechazarCookies" style="border-color:rgba(255,255,255,.3);color:rgba(255,255,255,.7);font-size:.82rem;padding:.5rem 1rem">Rechazar</button>\
    <button class="btn btn-primario"  id="aceptarCookies"  style="font-size:.82rem;padding:.5rem 1rem">Aceptar todo</button>\
  </div>\
</div>';

  /* ---- INYECTAR ---- */
  var navTarget  = document.getElementById('nav-placeholder');
  var footTarget = document.getElementById('footer-placeholder');
  if (navTarget)  navTarget.outerHTML  = navHTML;
  if (footTarget) footTarget.outerHTML = footerHTML;

  /* ---- Marcar enlace activo ---- */
  document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var filename = path.split('/').pop() || 'index.html';
    var pageName = filename.replace('.html', '');
    if (pageName === 'index' || pageName === '') pageName = 'inicio';

    document.querySelectorAll('.nav-menu a').forEach(function (a) {
      if (a.getAttribute('data-pagina') === pageName) {
        a.classList.add('activo');
      }
    });
  });

})();
