  // // // 
  // // //
  // // //
  var swiper = new Swiper('.last-projects-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1920:{
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true
      }
    }
  });