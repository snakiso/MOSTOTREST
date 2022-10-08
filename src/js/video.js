let btnPlay = document.querySelector('.play-video');
let video = document.querySelector('.video');

btnPlay.addEventListener('click', function () {
 video.play();
 btnPlay.style.visibility = 'hidden'
});

video.addEventListener('click', () => {
 video.pause();
 btnPlay.style.visibility = 'visible'
})