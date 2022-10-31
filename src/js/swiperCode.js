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
// // //
// // // 
// // //
var swiper = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  loop: true,
  speed: 1000,
  freeMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});

// // //
// // //
// // //
var swiper = new Swiper('.railway-slider', {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  freeMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1920: {
      slidesPerView: 'auto',
    },
    1200: {
      slidesPerView: 1,
    }
  }
});

// // // 
// // // 
// // //
var swiperThumbs = new Swiper(".thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: false,
  watchSlidesProgress: true
});
// // //
// // //
// // //
var swiper = new Swiper(".object-slider", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoWidth: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiperThumbs
  }
});
// // // 
// // // 
// // //

var swiper = new Swiper(".news-slider", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoWidth: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiperThumbs
  }
});

// // //
// // //
// // //
var swiper = new Swiper(".projects-slider", {
  spaceBetween: 60,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoWidth: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1920: {
      slidesPerView: 'auto',
    },
    768: {
      sslidesPerView: 'auto'
    }
  }
});