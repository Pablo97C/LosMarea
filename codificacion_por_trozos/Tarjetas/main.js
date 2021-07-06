/**
 * WEBGRAFIA
 * =========
 * https://www.w3schools.com/jsref/jsref_foreach.asp
 */

window.addEventListener('load', () => {
    tarjetas();

});

// Cambiar apariencia entre tag1 y tag

function tarjetas() {
    const tarjetasNoticias = document.querySelectorAll(".tarjeta-noticias");
    // const subtarjeta1 = document.querySelector("#subtarjeta1");

    // const tarjeta2 = document.querySelector('#tarjeta2');
    // const subtarjeta2 = document.querySelector('#subtarjeta2');

    // const tarjeta3 = document.querySelector('#tarjeta3');
    // const subtarjeta3 = document.querySelector('#subtarjeta3');


    tarjetasNoticias.forEach((tarjeta, indice, array) => {
        tarjeta.addEventListener('click', (evento) => {
            const subtarjetaFoto = tarjeta.querySelector('.subtarjeta-foto');
            const subtarjetaConcierto = tarjeta.querySelector('.subtarjeta-concierto');
            const subtarjetaDetalle = tarjeta.querySelector('.subtarjeta-detalle');
            subtarjetaFoto.classList.toggle("ocultar");
            subtarjetaConcierto.classList.toggle("hover-translate");
            subtarjetaDetalle.classList.toggle("hover-translate");
        });
    });

    // subtarjeta1.addEventListener('click', () => {

    //     tarjeta1.classList.toggle("desplegar");
    //     subtarjeta1.classList.toggle("ocultar");
    // });

    // tarjeta1.addEventListener('click', () => {

    //     tarjeta1.classList.toggle("desplegar");
    //     subtarjeta1.classList.toggle("ocultar");
    // });



    // subtarjeta2.addEventListener('click', () => {

    //     tarjeta2.classList.toggle("desplegar");
    //     subtarjeta2.classList.toggle("ocultar");
    // });

    // tarjeta2.addEventListener('click', () => {

    //     tarjeta2.classList.toggle("desplegar");
    //     subtarjeta2.classList.toggle("ocultar");
    // });



    // subtarjeta3.addEventListener('click', () => {

    //     tarjeta3.classList.toggle("desplegar");
    //     subtarjeta3.classList.toggle("ocultar");
    // });

    // tarjeta3.addEventListener('click', () => {

    //     tarjeta3.classList.toggle("desplegar");
    //     subtarjeta3.classList.toggle("ocultar");
    // });
}