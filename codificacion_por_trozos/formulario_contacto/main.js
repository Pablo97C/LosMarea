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
 * The HTML DOM Element Object: https://www.w3schools.com/jsref/dom_obj_all.asp
 * element: https://developer.mozilla.org/es/docs/Web/API/Element
 * Element offsetParent Property: https://www.w3schools.com/jsref/prop_element_offsetparent.asp
 * HTML DOM previousElementSibling Property: https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp
 * 
 */

// Carga del DOM completada
window.addEventListener('load', () => {

    animacionInputFocus3();
});


//Esta función se encarga de darle animación a los labels de los inputs del formulario
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

function animacionInput2() {
    const formularioContacto = document.querySelector('#idFormularioContacto');
    formularioContacto.addEventListener('click', (evento) => {
        //console.log(evento.target.nodeName);
        const arrayDivDeFormulario = formularioContacto.children;

        let divTarget = evento.target.offsetParent;

        // recorre todos los div hijo del formulario
        for (let i = 0; i < arrayDivDeFormulario.length; i++) {
            let divHijo = arrayDivDeFormulario[i];


            // console.log(divHijo);
            //console.log("classList: ", divHijo.classList); // devuelve array de clases
            //console.log("className: ", divHijo.className); // devuelve string

            // Si el divHijo es el campo que nos interesa animar
            if (divHijo.classList.contains("campoInput")) {

                // label dentro del divHijo
                let label = divHijo.querySelector('label');

                // Si el div que he clickado es igual al divHijo que estamos recorriendo actualmente
                if (divTarget === divHijo) {

                    // Si el div que hemos pulsado no contenia la animación, se la añadimos.
                    if (!label.classList.contains('animacion-input')) {
                        label.classList.add('animacion-input');
                    }
                }
                // Para el resto de divHijo que no han sido pulsados, tendremos que borrarle la clase que los anima.
                else {
                    label.classList.remove('animacion-input');
                    label.classList.add('animacion-input-off');
                }
            }
        }
    })

}

function animacionInputFocus1() {
    // formulario de contacto
    let formularioContacto = document.querySelector("#idFormularioContacto");

    // añadimos evento de focus-in
    formularioContacto.addEventListener("focusin", (evento) => {
        // elemento que ha ganado el foco
        let elementoTarget = evento.target;

        // Si el elemento que ha sido pulsado es un input y tiene la clase 'inputFormulario'
        if (elementoTarget.nodeName === 'INPUT' && elementoTarget.classList.contains('inputFormulario')) {

            // No haría falta, pero asignamos el elemento a una nueva variable para llamarlo de forma más intuitiva
            let inputFormulario = elementoTarget;

            // obtenemos la etiqueta label que es hermana previa del input
            let labelFormulario = inputFormulario.previousElementSibling;

            // Si label no contiene la clase de la animación, se la añadimos
            if (!labelFormulario.classList.contains('animacion-input')) {
                labelFormulario.classList.add('animacion-input');
            }
        } 
    });


    // añadimos evento de focus-out
    formularioContacto.addEventListener("focusout", (evento) => {
        // elemento que ha perdido el foco
        let elementoTarget = evento.target;

        // Si el elemento que ha sido pulsado es un input y tiene la clase 'inputFormulario'
        if (elementoTarget.nodeName === 'INPUT' && elementoTarget.classList.contains('inputFormulario')) {

            // No haría falta, pero asignamos el elemento a una nueva variable para llamarlo de forma más intuitiva
            let inputFormulario = elementoTarget;
            // obtenemos la etiqueta label que es hermana previa del input
            let labelFormulario = inputFormulario.previousElementSibling;

            // Si label contiene la clase de la animación, se la quitamos
            if (labelFormulario.classList.contains('animacion-input')) {
                labelFormulario.classList.remove('animacion-input');
                labelFormulario.classList.add('animacion-input-off');
            }
        }
    });
}

function animacionInputFocus3(){
    let inputs = document.querySelectorAll('.inputFormulario');
    // console.log(inputs);
    inputs.forEach(element => {
        let input = element.previousElementSibling;
        element.addEventListener("focusin", (evento) => {
            input.classList.add('animacion-input');
        });
        element.addEventListener("focusout", (evento) => {
            input.classList.remove('animacion-input');
            input.classList.add('animacion-input-off');
        });
    })
}