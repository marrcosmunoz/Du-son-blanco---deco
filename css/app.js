window.addEventListener('scroll' function(){
    let animacion = this.document.getElementById('imagen1');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoPantalla = this.window.innerHeight/3;

    if(posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'mover 1s ease-in';
    }
    })