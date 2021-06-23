// let navegador = document.querySelector("nav");
// function progreso(){
//     let progreso = document.documentElement.scrollTop;
//     if(progreso > 0){
//         navegador.className= "cambio";
//     }
//     console.log(progreso);
// }
// window.addEventListener("scroll", function(){
//     progreso();
// });


const navegador = document.querySelector("nav");

window.addEventListener('scroll',function(){
    navegador.classList.toggle('cambio', window.scrollY > 0);
});

// Cambiar apariencia entre tag1 y tag
const tarjeta1 = document.querySelector("#tarjeta1");
const subtarjeta1 = document.querySelector("#subtarjeta1");

const tarjeta2 = document.querySelector('#tarjeta2');
const subtarjeta2 = document.querySelector('#subtarjeta2');

const tarjeta3 = document.querySelector('#tarjeta3');
const subtarjeta3 = document.querySelector('#subtarjeta3');




subtarjeta1.addEventListener('click',()=>{

    tarjeta1.classList.toggle("desplegar");
    subtarjeta1.classList.toggle("ocultar");

    contenido.classList.toggle("ani");
    // subtarjeta1.classList.toggle("ani");


});

tarjeta1.addEventListener('click',()=>{

    tarjeta1.classList.toggle("desplegar");
    subtarjeta1.classList.toggle("ocultar");
});



subtarjeta2.addEventListener('click',()=>{

    tarjeta2.classList.toggle("desplegar");
    subtarjeta2.classList.toggle("ocultar");
});

tarjeta2.addEventListener('click',()=>{

    tarjeta2.classList.toggle("desplegar");
    subtarjeta2.classList.toggle("ocultar");
});



subtarjeta3.addEventListener('click',()=>{

    tarjeta3.classList.toggle("desplegar");
    subtarjeta3.classList.toggle("ocultar");
});

tarjeta3.addEventListener('click',()=>{

    tarjeta3.classList.toggle("desplegar");
    subtarjeta3.classList.toggle("ocultar");
});

// Imputs del formulario


// const input = document.querySelector('.inputFormulario');
// //const input = document.querySelectorAll('.inputFormulario');
// const label = document.querySelector('.labelFormulario');

// input.addEventListener('click', ()=>{
//     label.classList.toggle('animacion-input');
//     console.log('has hecho click en un input');
// })
