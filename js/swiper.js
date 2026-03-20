var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  
});

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: "#slider2 .swiper-button-next",
    prevEl: "#slider2 .swiper-button-prev",
  },
    slidesPerView: 9,
    freeMode: true,
});