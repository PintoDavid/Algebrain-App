document.addEventListener("DOMContentLoaded", function() {
    // Cargar imágenes SVG cuando sean visibles en la ventana
    function lazyLoad() {
      const images = document.querySelectorAll("path[data-src]");
      images.forEach(img => {
        if (isElementInViewport(img)) {
          img.setAttribute("src", img.getAttribute("data-src"));
          img.removeAttribute("data-src");
        }
      });
    }
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Cargar imágenes al cargar la página y al desplazarse
    lazyLoad();
    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
  });
  