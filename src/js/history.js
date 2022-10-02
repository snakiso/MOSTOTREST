let openBtn = document.querySelectorAll('.open-history');
let closeBtn = document.querySelectorAll('.history-hidden');
let fullHistory = document.querySelectorAll('.history__full');

//открытие полной истории
for(let i = 0; i < openBtn.length; i++){
 openBtn[i].addEventListener('click', () => {
  fullHistory[i].classList.add('open')
 })
}

//закрытие полной истории
for (let i = 0; i < openBtn.length; i++) {
 closeBtn[i].addEventListener('click', () => {
  fullHistory[i].classList.remove('open')
 })
}