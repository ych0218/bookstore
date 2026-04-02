var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  effect: 'coverflow', 
  coverflowEffect: {
    rotate: 0,           // 옆으로 넘어갈 때 회전 각도 (0이면 평평함)
    stretch: 0,         // 슬라이드 간의 간격 (값이 클수록 겹침)
    depth: 0,          // 깊이감 (원근감)
    modifier: 1,         // 효과 배수
    slideShadows: false, // 그림자 끄기 (이미지에 그림자가 이미 있다면 false)
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
    return '<span class="' + currentClass + '"></span>' +
           '<span class="swiper-separator"> / </span>' + /* 슬래시 전용 클래스 추가 */
           '<span class="' + totalClass + '"></span>';
  }
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
    slidesOffsetAfter: 27, 
});