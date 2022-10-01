let headerNav = document.querySelector('.header__bottom');

headerNav.addEventListener('mouseover', () => {
    headerNav.classList.add('active')
})

headerNav.addEventListener('mouseout', () => {
    headerNav.classList.remove('active')
})

