
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
        enlacesMenu.forEach(item => item.classList.remove('active'));
        enlace.classList.add('active');

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
      e.preventDefault(); 

      const nombre = formulario.querySelector('input[name="nombre"]').value.trim();
      const telefono = formulario.querySelector('input[name="telefono"]').value.trim();
      const email = formulario.querySelector('input[name="email"]').value.trim();
      const mensaje = formulario.querySelector('textarea[name="mensaje"]').value.trim();

      if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos obligatorios (*).');
        return;
      }

      const patronTelefono = /^[0-9\s\+\-]{7,15}$/;
      if (!patronTelefono.test(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return;
      }

      // Simulación de envío exitoso
      const botonEnviar = formulario.querySelector('.btn-submit');
      const textoOriginal = botonEnviar.innerHTML;

      botonEnviar.disabled = true;
      botonEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

      setTimeout(() => {
        alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud. Te contactaremos pronto.`);
        formulario.reset(); 
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
    navMenu.classList.toggle('active');
  });

  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}
