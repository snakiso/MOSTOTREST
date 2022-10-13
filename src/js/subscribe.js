let pressCenterButton = document.querySelector('.press-center-button');
let closeSubscribe = document.querySelector('.close-subscribe');
let subscribe = document.querySelector('.subscribe-block');


pressCenterButton.addEventListener('click', () => {
 subscribe.style.top = '50%'
})


closeSubscribe.addEventListener('click', () => {
 subscribe.style.top = '-100%'
})