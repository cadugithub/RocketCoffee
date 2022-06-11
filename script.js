const btnBurgerOpen = document.querySelector('#menu-buguer-open')
const btnBurgerClose = document.querySelector('#menu-buguer-close')

btnBurgerOpen.addEventListener('click', toggleMenu)
btnBurgerClose.addEventListener('click', closeMenu)
function toggleMenu(){
    const nav = document.querySelector('#nav')
    const btnBurgerClose = document.querySelector('#menu-buguer-close')
    const btnBurgerOpen = document.querySelector('#menu-buguer-open')

    btnBurgerClose.style.display = "block"
    btnBurgerOpen.style.display = "none"
    
    nav.classList.toggle('active')
   
}
function closeMenu(){
    const nav = document.querySelector('#nav')
    const btnBurgerClose = document.querySelector('#menu-buguer-close')
    const btnBurgerOpen = document.querySelector('#menu-buguer-open')

    btnBurgerClose.style.display = "none"
    btnBurgerOpen.style.display = "block"
    nav.classList.remove('active')
}