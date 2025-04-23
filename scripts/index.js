document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true, // Бесконечная прокрутка
    autoplay: {
      delay: 5000, // Автопрокрутка каждые 5 секунд
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade", // Плавное переключение
    speed: 1000, // Скорость анимации
  });
});
