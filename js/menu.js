let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY
    
    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }
})


//Menu mobile 
let = btnMenuMob = document.querySelector('#btn-menu-mob')
let = line1 = document.querySelector('.line-menu-mob-1')
let = line2 = document.querySelector('.line-menu-mob-2')
let = mobileMenu = document.querySelector('#mobile-menu')

let = body = document.querySelector('body')

btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle('activo1')
    line2.classList.toggle('activo2')
    mobileMenu.classList.toggle('open')

    body.classList.toggle('no-overflow')
})