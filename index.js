const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const parrafoId = document.getElementById('parrafo-id');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    parrafito,
    parrafoId,
    input,
})


h1.innerText = 'Mi nuevo titulo <br> en una pagina web';
//h1.setAttribute('class', 'nuevo');
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'titulo')
//console.log(h1.getAttribute('class'))
h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "456"

//console.log(document.createElement('img'))

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn0.bioenciclopedia.com/es/posts/9/2/0/elefante_29_600_square.jpg');
console.log(img);

parrafoId.innerHTML = "";
parrafoId.appendChild(img);