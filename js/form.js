let = navBar = document.querySelector('#header')

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


// Validação dos campos

    const form = document.getElementById('contactForm')
    const messageBox = document.getElementById('form-message')


form.addEventListener("submit", function (event) {
    event.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value.trim()

    if (name === "") {
        showMessage("Por favor, preencha o campo Nome completo.", "error")
        return;
    }
    if (email === "") {
      showMessage("Por favor, preencha o campo Email.", "error");
      return;
    }
    if (!validateEmail(email)) {
        showMessage("Por favor, insira um email válido.", "error")
        return;
    }
    if (subject === "") {
        showMessage("Por favor, selecione um Assunto.", "error")
        return;
    }
    if (message === "") {
        showMessage("Por favor, escreva sua mensagem.", "error")
        return;
    }

    showMessage("Mensagem enviada com sucesso! Agradecemos o seu contato e responderemos em breve.", "success")
})

function showMessage(text, type) {
    messageBox.textContent = text
    messageBox.className = type
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email.toLowerCase())
}