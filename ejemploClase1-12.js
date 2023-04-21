const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parrafin = document.querySelector('#parrafin');
const input = document.querySelector('input');
console.log({h1})
console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    parrafin,
    input,
})
/* innerHtml cambia lo escrito en el Html y <br> genera espacio entre ellas */
h1.innerHTML = 'No Mario, Nooooooooooo <br> brieee';
h1.classList.add('volar', 'correr');
/* h1.classList.remove('volar');
h1.classList.toggle('correr'); sirve para colocar y quitar la clase
h1.classList.toggle('correr');
h1.classList.contains('volar'); sirve para verificar si existe esa clase*/

/* input.value = 'No lo creo' */ //modifica el valor de lo que se muestra en la caja del input
/* para agregar una imagen desde javascript, con append o appenchild */
const img = document.createElement('img');
img.setAttribute('src', 'https://http2.mlstatic.com/D_NQ_NP_716594-MCO45468682107_042021-O.jpg');
console.log(img);
parrafin.innerHTML = ''; /* asi borro lo escrito en html y dejo solo la imagen de las tortugas */
parrafin.append(img);