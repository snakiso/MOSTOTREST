let headerNav = document.querySelector('.header__bottom');

headerNav.addEventListener('mouseover', () => {
    headerNav.classList.add('active');
})
;
headerNav.addEventListener('mouseout', () => {
    headerNav.classList.remove('active');
});


let mobileNav = document.querySelector('.mobile-nav');
let navList = document.querySelectorAll('.mobile-nav-list');
let closeNav = document.querySelector('.close-nav');
let openNav = document.querySelector('.nav-open');

for(let i = 0; i<navList.length; i++){
    navList[i].addEventListener('click', () => {
        navList[i].classList.toggle('open');
    })
};
 
openNav.addEventListener('click', () => {
    mobileNav.classList.add('open')
});

closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open')
});