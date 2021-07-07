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
            // Subtarjetas de tarjeta noticias
            const subtarjetaFoto = tarjeta.querySelector('.subtarjeta-foto');
            const subtarjetaConcierto = tarjeta.querySelector('.subtarjeta-concierto');
            const subtarjetaDetalle = tarjeta.querySelector('.subtarjeta-detalle');

            // Aplicamos a las subtarjetas
            // ocultar
            subtarjetaFoto.classList.toggle("ocultar");
            subtarjetaConcierto.classList.toggle("ocultar");
            subtarjetaDetalle.classList.toggle("ocultar");

            // hover-translate
            subtarjetaConcierto.classList.toggle("hover-translate");
            subtarjetaDetalle.classList.toggle("hover-translate");

            // Aplicamos a elementos dentro de subtarjetas
            // d-none
            const i_flecha = subtarjetaConcierto.querySelector("i");
            i_flecha.classList.toggle("d-none");

            /**
             * Añadir el código JS necesario para que cuando 
             * demos click a una tarjeta el tamaño de 
             * "subtarjetaConcierto" y la "subtarjetaDetalle" tengan
             * un tamaño del 50%. Cuando se vuelva a dar click
             * las subtarjetas volverán a su tamaño original (toggle).
             * 
             */

            /**
             * INTENTAR MODIFICAR LA SUBTARJETA DETALLE PARA 
             * QUE EL ENLACE "MÁS" SE "PEGUE" A BAJO Y SE MANTENGA
             * SIEMPRE AHÍ (position: relative y absolute)
             */


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