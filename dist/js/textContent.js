let sliderContainers = document.querySelector('.change-text-content');
let slideDescription = document.querySelector('.slide-description')

sliderContainers.addEventListener('transitionend', () => {
 let activeSlide = document.querySelector('.change-text-content .swiper-slide-active span');
 console.log( activeSlide)
 slideDescription.textContent = activeSlide.textContent
})