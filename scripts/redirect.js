// Redireccionar al hacer clic en cualquier parte de la pantalla
document.body.addEventListener("click", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "flex"; // Muestra la pantalla de carga nuevamente
    setTimeout(function() {
      window.location.href = "seleccion_temas.html"; // Cambia "seleccion_temas.html" por la URL de la página a la que deseas redireccionar
    }, 2000); // Tiempo de espera antes de redireccionar (en milisegundos)
  });
  