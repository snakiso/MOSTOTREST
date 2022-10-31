let cookiesBtn = document.querySelector('.cookies-button');
let cookies = document.querySelector('.cookies');

cookiesBtn.addEventListener('click', () => {
 cookies.classList.add('accepted')
})

function setLocalStorage() {
 localStorage.setItem('classList', cookies.classList.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
 if (localStorage.getItem('classList')) {
  cookies.classList.value = localStorage.getItem('classList');
 }
}
window.addEventListener('load', getLocalStorage)