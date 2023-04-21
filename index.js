/* Estos se crean para poder acceder a los datos creado en el Html y poder haci cambiarlos */

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const formulario = document.querySelector('#form');

/* escuchan cada ves que pasa algo esto crea cosas en html y asi no hay que exribir en html, pero sigue utilizando la funcion btnOnClic()*/

btn.addEventListener('click', btnOnClic)/* aqui no se utilizan los () para la funcion */


/* con esta funcion utilizo innerText pára mostrar el valor de los dos datos sumado en los inputs */
function btnOnClic() {
   // event.preventDefault(); /* evita que al usar formularios se recargue la pagina */
    /* con number o parseint paso los datos que son strign a number */
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    result.innerText = 'Resultado: ' + sumaInputs;
}

