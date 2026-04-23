/* ============================================================
   ACCESIBILIDAD.JS — Herramientas de accesibilidad
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* Inyectar botón y panel en el body */
  var widget = document.createElement('div');
  widget.className = 'acc-widget';
  widget.id = 'acc-widget';
  widget.innerHTML = '\
<button class="acc-toggle" id="acc-toggle" aria-label="Herramientas de accesibilidad" title="Herramientas de accesibilidad">\
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\
    <circle cx="12" cy="5" r="1.5"/>\
    <path d="M8 8h8M9 8l-1 7 4-2 4 2-1-7"/>\
    <path d="M11 13l-1 5M13 13l1 5"/>\
  </svg>\
</button>\
<div class="acc-panel" id="acc-panel" role="dialog" aria-label="Herramientas de accesibilidad" aria-modal="true">\
  <div class="acc-panel-head">\
    <h3>Herramientas de accesibilidad</h3>\
    <button class="acc-cerrar" id="acc-cerrar" aria-label="Cerrar panel de accesibilidad">&times;</button>\
  </div>\
  <ul class="acc-lista">\
    <li>\
      <button data-accion="aumentar-texto" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>\
        <span>Aumentar texto</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="disminuir-texto" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>\
        <span>Disminuir texto</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="grises" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>\
        <span>Escala de grises</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="alto-contraste" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" stroke-width="2"/><path d="M12 3a9 9 0 0 1 0 18" fill="currentColor"/></svg>\
        <span>Alto contraste</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="negativo" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18" fill="currentColor"/></svg>\
        <span>Contraste negativo</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="fondo-claro" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity=".15"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>\
        <span>Fondo claro</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="links" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>\
        <span>Subrayar enlaces</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
    <li>\
      <button data-accion="fuente-legible" aria-pressed="false">\
        <svg class="acc-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>\
        <span>Fuente legible</span>\
        <span class="acc-activo-badge">activo</span>\
      </button>\
    </li>\
  </ul>\
  <div class="acc-footer">\
    <button id="acc-restablecer">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>\
      Restablecer todo\
    </button>\
  </div>\
  </div>\
</div>';

  document.body.appendChild(widget);

  /* Estado */
  var estado = {
    grises: false,
    'alto-contraste': false,
    negativo: false,
    'fondo-claro': false,
    links: false,
    'fuente-legible': false
  };

  var tamanoBase  = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  var tamanoActual = tamanoBase;

  function guardarEstado() {
    localStorage.setItem('acc_prefs', JSON.stringify({ estado: estado, tamano: tamanoActual }));
  }

  function cargarEstado() {
    try {
      var prefs = JSON.parse(localStorage.getItem('acc_prefs'));
      if (prefs) {
        if (prefs.estado) Object.assign(estado, prefs.estado);
        if (prefs.tamano) tamanoActual = prefs.tamano;
      }
    } catch(e) {}

    // Aplicar estado
    if (tamanoActual !== tamanoBase) {
      document.documentElement.style.fontSize = tamanoActual + 'px';
      var btnAum = document.querySelector('[data-accion="aumentar-texto"]');
      var btnDim = document.querySelector('[data-accion="disminuir-texto"]');
      if (btnAum) {
        btnAum.classList.toggle('activo', tamanoActual > tamanoBase);
        btnAum.setAttribute('aria-pressed', tamanoActual > tamanoBase);
      }
      if (btnDim) {
        btnDim.classList.toggle('activo', tamanoActual < tamanoBase);
        btnDim.setAttribute('aria-pressed', tamanoActual < tamanoBase);
      }
    }

    Object.keys(estado).forEach(function(k) {
      if (estado[k]) {
        document.body.classList.add('acc-' + k);
        var btn = document.querySelector('[data-accion="' + k + '"]');
        if (btn) {
          btn.classList.add('activo');
          btn.setAttribute('aria-pressed', 'true');
        }
      }
    });
  }

  var toggle = document.getElementById('acc-toggle');
  var panel  = document.getElementById('acc-panel');
  var cerrar = document.getElementById('acc-cerrar');
  var restab = document.getElementById('acc-restablecer');

  toggle.addEventListener('click', function () {
    panel.classList.toggle('abierto');
    toggle.setAttribute('aria-expanded', panel.classList.contains('abierto'));
  });

  cerrar.addEventListener('click', function () {
    panel.classList.remove('abierto');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('abierto')) {
      panel.classList.remove('abierto');
      toggle.focus();
    }
  });

  document.querySelectorAll('.acc-lista button[data-accion]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var accion = btn.getAttribute('data-accion');

      if (accion === 'aumentar-texto') {
        tamanoActual = Math.min(tamanoActual + 2, tamanoBase + 8);
        document.documentElement.style.fontSize = tamanoActual + 'px';
        btn.classList.toggle('activo', tamanoActual > tamanoBase);
        btn.setAttribute('aria-pressed', tamanoActual > tamanoBase);
        guardarEstado();
        return;
      }
      if (accion === 'disminuir-texto') {
        tamanoActual = Math.max(tamanoActual - 2, tamanoBase - 4);
        document.documentElement.style.fontSize = tamanoActual + 'px';
        btn.classList.toggle('activo', tamanoActual < tamanoBase);
        btn.setAttribute('aria-pressed', tamanoActual < tamanoBase);
        guardarEstado();
        return;
      }

      /* Exclusividad: grises / alto-contraste / negativo */
      var exclusivos = ['grises', 'alto-contraste', 'negativo', 'fondo-claro'];
      if (exclusivos.indexOf(accion) !== -1) {
        exclusivos.forEach(function (ex) {
          if (ex !== accion && estado[ex]) {
            estado[ex] = false;
            document.body.classList.remove('acc-' + ex);
            var b = document.querySelector('[data-accion="' + ex + '"]');
            if (b) { b.classList.remove('activo'); b.setAttribute('aria-pressed', 'false'); }
          }
        });
      }

      estado[accion] = !estado[accion];
      document.body.classList.toggle('acc-' + accion, estado[accion]);
      btn.classList.toggle('activo', estado[accion]);
      btn.setAttribute('aria-pressed', estado[accion]);
      guardarEstado();
    });
  });

  if (restab) {
    restab.addEventListener('click', function () {
      Object.keys(estado).forEach(function (k) {
        estado[k] = false;
        document.body.classList.remove('acc-' + k);
        var b = document.querySelector('[data-accion="' + k + '"]');
        if (b) { b.classList.remove('activo'); b.setAttribute('aria-pressed', 'false'); }
      });
      tamanoActual = tamanoBase;
      document.documentElement.style.fontSize = '';
      guardarEstado();
    });
  }

  /* Iniciar */
  cargarEstado();

});
