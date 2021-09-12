let animadoIzquierda = document.querySelectorAll('.animado-izquierda');
let animadoDerecha = document.querySelectorAll('.animado-derecha');
let animadoAbajo = document.querySelectorAll('.animado-abajo');

function animacionIzquierda() {
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < animadoIzquierda.length; i++){
        let alturaElemento = animadoIzquierda[i].offsetTop;
        if(alturaElemento - 330< scrollTop){
            animadoIzquierda[i].style.opacity = 1;
            animadoIzquierda[i].classList.add('desplazarDerecha');
        }
    }
}

function animacionDerecha() {
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < animadoDerecha.length; i++){
        let alturaElemento = animadoDerecha[i].offsetTop;
        if(alturaElemento - 330< scrollTop){
            animadoDerecha[i].style.opacity = 1;
            animadoDerecha[i].classList.add('desplazarIzquierda');
        }
    }
}

function animacionAbajo() {
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < animadoAbajo.length; i++){
        let alturaElemento = animadoAbajo[i].offsetTop;
        if(alturaElemento - 400 < scrollTop){
            animadoAbajo[i].style.opacity = 1;
            animadoAbajo[i].classList.add('desplazarArriba');
        }
    }
}


window.addEventListener('scroll', animacionIzquierda);
window.addEventListener('scroll', animacionDerecha);
window.addEventListener('scroll', animacionAbajo);