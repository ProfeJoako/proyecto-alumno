document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".navbar-brand img");

  if (!logo) return;

  // Click
  logo.addEventListener("click", () => {
    logo.classList.toggle("logo-click");
  });

  // Teclado
  logo.setAttribute("tabindex", "0");
  logo.setAttribute("role", "button");
  logo.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      logo.click();
    }
  });
});

// ===================== VALIDACIÓN BOOTSTRAP (CLIENTE) =====================
// 
(function () {
  'use strict';

  // Obtenemos todos los formularios que requieran validación
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', function (event) {
      // Si el formulario es inválido, prevenimos el submit y mostramos estilos de error
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // (Demo) Evitamos el envío real para mostrar alerta de éxito
        event.preventDefault();

        // Mostramos la alerta de éxito y reseteamos
        const ok = form.querySelector('#alertaExito');
        if (ok) {
          ok.classList.remove('d-none');
          // Ocultamos después de 3s
          setTimeout(() => ok.classList.add('d-none'), 3000);
        }
        form.reset();
        // Quitamos las clases de validación para volver al estado inicial
        form.classList.remove('was-validated');
        return;
      }

      // Agregamos la clase para que Bootstrap pinte los estados
      form.classList.add('was-validated');
    }, false);
  });
})();
