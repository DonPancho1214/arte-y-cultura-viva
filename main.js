/* ============================================================
   MAIN.JS — Interacciones principales
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Hamburger ---- */
  var btnH  = document.getElementById('btn-hamburger');
  var navM  = document.getElementById('nav-menu');
  if (btnH && navM) {
    btnH.addEventListener('click', function () {
      var open = navM.classList.toggle('abierto');
      btnH.setAttribute('aria-expanded', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navM.classList.contains('abierto')) {
        navM.classList.remove('abierto');
        btnH.setAttribute('aria-expanded', 'false');
        btnH.focus();
      }
    });
  }

  /* ---- Scroll Events (Header y Mandalas) ---- */
  var hdr = document.getElementById('header');
  var heroDecos = document.querySelectorAll('.hero-deco');
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var scroll_Y = window.scrollY;
        var winHeight = window.innerHeight;
        var docHeight = document.documentElement.scrollHeight;
        var totalScroll = docHeight - winHeight;

        // Header
        if (hdr) {
          hdr.classList.toggle('scrolled', scroll_Y > 20);
        }

        // Mandalas (Hero)
        if (heroDecos.length) {
          heroDecos.forEach(function(deco) {
            var vel = deco.classList.contains('deco-rotar-inv') ? -0.12 : 0.12;
            deco.style.transform = 'translateY(-50%) rotate(' + (scroll_Y * vel) + 'deg)';
          });
        }

        // Parallax sutil en Blobs (formas de fondo)
        var blobs = document.querySelectorAll('.deco-forma');
        blobs.forEach(function(blob) {
          var factor = 0.05; // Ajustar sensibilidad
          if (blob.classList.contains('forma-blob-1')) factor = 0.08;
          if (blob.classList.contains('forma-blob-2')) factor = -0.06;
          var yPos = -(scroll_Y * factor);
          // Preservar transformaciones inline si existen
          var existingTransform = blob.getAttribute('data-original-transform') || '';
          blob.style.transform = existingTransform + ' translateY(' + yPos + 'px)';
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Guardar transformaciones iniciales de los blobs para no romper el layout
  document.querySelectorAll('.deco-forma').forEach(function(blob) {
    blob.setAttribute('data-original-transform', window.getComputedStyle(blob).getPropertyValue('transform') === 'none' ? '' : window.getComputedStyle(blob).getPropertyValue('transform'));
  });

  /* ---- Hero Slider ---- */
  var slides   = document.querySelectorAll('.slide');
  var puntos   = document.querySelectorAll('.slider-punto');
  var btnIzq   = document.getElementById('slider-izq');
  var btnDer   = document.getElementById('slider-der');
  var indice   = 0;
  var timer    = null;
  var INTERVALO = 5500;

  function mostrarSlide(n, dir) {
    if (!slides.length) return;
    slides[indice].classList.remove('activo');
    if (puntos[indice]) puntos[indice].classList.remove('activo');
    indice = (n + slides.length) % slides.length;
    slides[indice].classList.add('activo', 'animando');
    setTimeout(function () { slides[indice].classList.remove('animando'); }, 650);
    if (puntos[indice]) puntos[indice].classList.add('activo');
  }

  function iniciarTimer() {
    clearInterval(timer);
    timer = setInterval(function () { mostrarSlide(indice + 1); }, INTERVALO);
  }

  if (slides.length) {
    mostrarSlide(0);
    iniciarTimer();
    if (btnIzq) btnIzq.addEventListener('click', function () { mostrarSlide(indice - 1); iniciarTimer(); });
    if (btnDer) btnDer.addEventListener('click', function () { mostrarSlide(indice + 1); iniciarTimer(); });
    puntos.forEach(function (p, i) {
      p.addEventListener('click', function () { mostrarSlide(i); iniciarTimer(); });
    });

    /* Pausa al perder foco de la ventana */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearInterval(timer);
      else iniciarTimer();
    });

    /* ---- Swipe para el Slider ---- */
    var touchStartX = 0;
    var touchEndX = 0;
    var sliderContenedor = document.querySelector('.hero-slider');
    if (sliderContenedor) {
      sliderContenedor.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
      }, {passive: true});
      sliderContenedor.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        var dist = touchEndX - touchStartX;
        if (dist > 40) { mostrarSlide(indice - 1); iniciarTimer(); }
        else if (dist < -40) { mostrarSlide(indice + 1); iniciarTimer(); }
      }, {passive: true});
    }
  }

  /* ---- Rotación interactiva de mandalas (Movido al Scroll general) ---- */


  /* ---- Cookies ---- */
  var banner   = document.getElementById('cookiesBanner');
  var btnAcept = document.getElementById('aceptarCookies');
  var btnRech  = document.getElementById('rechazarCookies');
  if (banner) {
    // Si NO se han aceptado, revelamos el banner después de una fracción de tiempo.
    if (!localStorage.getItem('cookies_consent')) {
      setTimeout(function() { banner.classList.remove('oculto'); }, 100);
    }
    function ocultarBanner(val) { localStorage.setItem('cookies_consent', val); banner.classList.add('oculto'); }
    if (btnAcept) btnAcept.addEventListener('click', function () { ocultarBanner('accepted'); });
    if (btnRech)  btnRech.addEventListener('click',  function () { ocultarBanner('rejected'); });
  }

  /* ---- Botones de monto en donaciones ---- */
  document.querySelectorAll('.monto-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.montos-rapidos').querySelectorAll('.monto-btn').forEach(function (b) { b.classList.remove('activo'); });
      btn.classList.add('activo');
      var campoOtro = document.getElementById('monto-otro');
      if (campoOtro) campoOtro.value = '';
    });
  });
  var campoOtro = document.getElementById('monto-otro');
  if (campoOtro) {
    campoOtro.addEventListener('input', function () {
      document.querySelectorAll('.monto-btn').forEach(function (b) { b.classList.remove('activo'); });
    });
  }

  /* ---- Galería: pausar animación al hacer hover ---- */
  document.querySelectorAll('.gal-col').forEach(function (col) {
    col.addEventListener('mouseenter', function () { col.style.animationPlayState = 'paused'; });
    col.addEventListener('mouseleave', function () { col.style.animationPlayState = 'running'; });
  });

  /* ---- Smooth reveal con IntersectionObserver ---- */
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.reveal');
    var observer  = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Modo Oscuro (Dark Mode) ---- */
  var btnTema = document.getElementById('btn-tema');
  if (btnTema) {
    // Si ya existe preferencia en Storage, aplicarla inmediatamente
    if (localStorage.getItem('tema_acv') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    // Lógica del botón toggle
    btnTema.addEventListener('click', function () {
      var actual = document.documentElement.getAttribute('data-theme');
      if (actual === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('tema_acv', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema_acv', 'dark');
      }
    });
  }

  /* ---- Formularios (Validación real) ---- */
  var formularios = document.querySelectorAll('form');
  formularios.forEach(function(frm) {
    frm.addEventListener('submit', function (e) {
      if (!frm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        var campos = frm.querySelectorAll('input, select, textarea');
        campos.forEach(function(campo) {
          var errorSpan = document.getElementById('error-' + campo.id);
          if (!campo.validity.valid) {
            campo.style.borderColor = 'var(--rojo)';
            campo.setAttribute('aria-invalid', 'true');
            if (errorSpan) {
              errorSpan.textContent = campo.validationMessage || 'Este campo es requerido o inválido.';
              errorSpan.style.display = 'block';
            }
          } else {
            campo.style.borderColor = 'var(--verde)';
            campo.removeAttribute('aria-invalid');
            if (errorSpan) {
              errorSpan.style.display = 'none';
              errorSpan.textContent = '';
            }
          }
        });
        return;
      }
      // Simular envío
      e.preventDefault();
      var btn = frm.querySelector('[type="submit"]');
      if (btn) {
        btn.textContent = '✓ Mensaje enviado';
        btn.disabled = true;
        btn.style.background = '#6AAF20';
        btn.style.borderColor = '#6AAF20';
      }
    });
  });

});

/* Reveal CSS */
(function () {
  var s = document.createElement('style');
  s.textContent = '.reveal{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}.reveal.visible{opacity:1;transform:translateY(0)}';
  document.head.appendChild(s);
})();
