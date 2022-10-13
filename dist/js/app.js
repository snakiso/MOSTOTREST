let year2018 = document.querySelectorAll('.year-2018');
let year2019 = document.querySelectorAll('.year-2019');
let year2020 = document.querySelectorAll('.year-2020');
let projectYears = document.querySelector('.projects-years');
let project2018 = document.querySelector('.project-2018');
let project2019 = document.querySelector('.project-2019');
let project2020 = document.querySelector('.project-2020');
let projectSwiper = document.querySelector('.project-swiper');
let slideWidth = 473 //ширина слайда 


window.addEventListener('load', () => {
  project2018.style.width = `${slideWidth * year2018.length}px`;
  project2019.style.width = `${slideWidth * year2019.length}px`;
  project2020.style.width = `${slideWidth * year2020.length}px`;
})

function changeActive() {
  project2018.classList.remove('active');
  project2019.classList.remove('active');
  project2020.classList.remove('active');
}

projectSwiper.addEventListener('transitionend', () => {
  let prevSlide = document.querySelectorAll('.swiper-slide-prev');
  let nextSlide = document.querySelectorAll('.swiper-slide-next');
  let activeSlide = document.querySelectorAll('.swiper-slide-active')
  if (nextSlide[1].classList.contains('year-2019') && activeSlide[1].classList.contains('year-2019') || nextSlide[1].classList.contains('year-2020')) {
    projectYears.style.transform = `translateX(-${slideWidth * year2018.length}px)`;
    changeActive();
    project2019.classList.add('active');
  }
  if (nextSlide[1].classList.contains('year-2020') && activeSlide[1].classList.contains('year-2020')) {
    projectYears.style.transform = `translateX(-${slideWidth * year2019.length + slideWidth * year2018.length}px)`;
    changeActive();
    project2020.classList.add('active');
  }
  if (prevSlide[0].classList.contains('years-2018') && activeSlide[1].classList.contains('year-2019') || activeSlide[1].classList.contains('year-2018')) {
    projectYears.style.transform = `translateX(0px)`;
    changeActive();
    project2018.classList.add('active');
  }
})
