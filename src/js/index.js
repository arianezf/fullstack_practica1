const dado = document.getElementById('dado');
const button = document.getElementById('button');
const resultado = document.getElementById('resultado');
const historial = document.getElementById('historial');

function lanzarDado() {

    let numero = Math.random() * (7 - 1) + 1;
    numero = Math.floor(numero);
    resultado.textContent = numero;
    addHistorial(numero);
}


function addHistorial(numero){
    console.log(numero);

    let his = document.createElement("div");
    his.innerHTML = "Resultado:" + numero;
    document.getElementById('historial').appendChild(his);
}

button.addEventListener('click', lanzarDado);