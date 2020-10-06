const dado = document.getElementById('dado');
const button = document.getElementById('button');
const resultado = document.getElementById('resultado');

function lanzarDado() {

    let numero = Math.random() * (7 - 1) + 1;
    numero = Math.floor(numero);
    resultado.textContent = numero;
}

button.addEventListener('click', lanzarDado);