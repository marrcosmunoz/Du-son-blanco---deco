
const name = document.getElementById('nombre');
const password = document.getElementById('password');
const sumbit = document.getElementById('sumbit');
const form = document.getElementById('form');
const user = document.getElementById('user');
const parrafo = document.getElementById('warning');


form.addEventListener('sumbit',(m)=>{
    m.preventDefault()
    let warning =""
    let entrar = false
    let regexUser = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.Value.length <6){
        warning += "El nombre no es valido <br>"
        entrar = true
    }
    if(!regexUser.test(email.Value)){
        warning += "El email no es valido <br>"
        entrar = true
    }
    if(password.Value.length >8){
        warning += "Contraseña incorrecta <br>"
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warning
    }
})