document.querySelectorAll(".nav-link").forEach((button) => {
    button.addEventListener("click", function () {
        setTimeout(() => {
            AOS.refresh();
        }, 100); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".img-itself");

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  images.forEach((image) => {
      const layer = image.querySelector(".layer");

      if (isTouchDevice) {
          image.addEventListener("click", function () {
              // لو الطبقة مفتوحة، اقفلها
              if (layer.classList.contains("show-layer")) {
                  layer.classList.remove("show-layer");
              } else {
                  // اقفل كل الطبقات المفتوحة
                  document.querySelectorAll(".layer.show-layer").forEach((openLayer) => {
                      openLayer.classList.remove("show-layer");
                  });

                  // افتح الطبقة الجديدة
                  layer.classList.add("show-layer");
              }
          });
      } else {
          image.addEventListener("mouseenter", function () {
              // اقفل كل الطبقات قبل فتح الجديدة
              document.querySelectorAll(".layer.show-layer").forEach((openLayer) => {
                  openLayer.classList.remove("show-layer");
              });

              layer.classList.add("show-layer");
          });

          image.addEventListener("mouseleave", function () {
              layer.classList.remove("show-layer");
          });
      }
  });
});
