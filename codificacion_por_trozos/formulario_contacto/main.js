/**
 * WEBGRAFÍA
 * =========
 * Propagación de eventos en Javascript: https://www.youtube.com/watch?v=l8FKIEFiMMg
 * Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha: https://www.youtube.com/watch?v=myEsMzsJEFg
 * Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha: https://www.youtube.com/watch?v=2LgnPW_VZYU
 * HTML DOM childNodes Property: https://www.w3schools.com/jsref/prop_node_childnodes.asp
 * HTML DOM classList Property: https://www.w3schools.com/jsref/prop_element_classlist.asp
 * HTML DOM contains() Method: https://www.w3schools.com/jsref/met_node_contains.asp
 * classList: https://clubmate.fi/javascript-adding-and-removing-class-names-from-elements
 * HTML DOM Events: https://www.w3schools.com/jsref/dom_obj_event.asp
 */

// Carga del DOM completada
window.addEventListener('load', () => {

    animacionInput();
});


// Esta función se encarga de darle animación a los labels de los inputs del formulario
function animacionInput() {

    // Formulario de Contacto
    const formularioContacto = document.querySelector('#idFormularioContacto');

    formularioContacto.addEventListener('click', (evento) => {

        // PRIMERO RECORREMOS TODOS LOS LABEL DEL FORMULARIO PARA QUITARLE LA CLASE 'animacion-input'//

        const arrayDivDeFormulario = formularioContacto.children;
        //const arrayDivDeFormulario = formularioContacto.childNodes;
        for (let i = 0; i < arrayDivDeFormulario.length; i++) {
            let divHijo = arrayDivDeFormulario[i];

            //console.log(divHijo);
            //console.log("classList: ", divHijo.classList); // devuelve array de clases
            //console.log("className: ", divHijo.className); // devuelve string

            if (divHijo.classList.contains("campoInput")) {

                const label = divHijo.querySelector('label');
                //const input = divHijo.querySelector('input');

                label.classList.remove('animacion-input');


            }

        }

        /////////////////////////////////////////////////////////////////////////////
        // Y POSTERIORMENTE AÑADIMOS DICHA CLASE AL LABEL CUYO INPUT HEMOS PULSADO //

        // Div con input y label
        const div = evento.target.offsetParent;
        // Imputs del formulario
        // const input = div.querySelector('input');
        // const input = document.querySelectorAll('.inputFormulario');
        const label = div.querySelector('label');
        label.classList.add('animacion-input');

        //console.log(div, input, label);
        // input.addEventListener('click', () => {
        //     label.classList.add('animacion-input');
        //     console.log('has hecho click en un input');
        // });
    });
}