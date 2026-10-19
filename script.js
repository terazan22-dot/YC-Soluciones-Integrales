// Esperar a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. DESPLAZAMIENTO SUAVE (SMOOTH SCROLL) PARA LOS ENLACES DEL MENÚ
     ========================================================================== */
  const enlacesMenu = document.querySelectorAll('.nav-menu a[href^="#"]');

  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const idDestino = enlace.getAttribute('href');
      const seccionDestino = document.querySelector(idDestino);

      if (seccionDestino) {
        // Marcamos como activo el enlace cliqueado
        enlacesMenu.forEach(item => item.classList.remove('active'));
        enlace.classList.add('active');

        // Desplazamiento suave
        seccionDestino.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ==========================================================================
     2. SOMBRA Y CAMBIO EN LA BARRA DE NAVEGACIÓN AL HACER SCROLL
     ========================================================================== */
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
      header.style.transition = 'box-shadow 0.3s ease';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  });

  /* ==========================================================================
     3. VALIDACIÓN DEL FORMULARIO DE CONTACTO
     ========================================================================== */
  const formulario = document.querySelector('.form-container form');

  if (formulario) {
    formulario.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita que la página se recargue

      // Obtener los valores de los inputs
      const nombre = formulario.querySelector('input[name="nombre"]').value.trim();
      const telefono = formulario.querySelector('input[name="telefono"]').value.trim();
      const email = formulario.querySelector('input[name="email"]').value.trim();
      const mensaje = formulario.querySelector('textarea[name="mensaje"]').value.trim();

      // Validación simple de campos obligatorios
      if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos obligatorios (*).');
        return;
      }

      // Validación de número telefónico (mínimo 7 dígitos)
      const patronTelefono = /^[0-9\s\+\-]{7,15}$/;
      if (!patronTelefono.test(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return;
      }

      // Simulación de envío exitoso
      const botonEnviar = formulario.querySelector('.btn-submit');
      const textoOriginal = botonEnviar.innerHTML;

      // Cambiar estado del botón mientras se "envía"
      botonEnviar.disabled = true;
      botonEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

      setTimeout(() => {
        alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud. Te contactaremos pronto.`);
        formulario.reset(); // Limpiar el formulario
        botonEnviar.disabled = false;
        botonEnviar.innerHTML = textoOriginal;
      }, 1500);
    });
  }

});

// ==========================================================
// MENÚ HAMBURGUESA RESPONSIVE
// ==========================================================
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    // Alterna la clase 'active' para mostrar u ocultar el menú
    navMenu.classList.toggle('active');
  });

  // Opcional: Si el usuario hace clic en cualquier enlace del menú, este se cierra solo
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}
