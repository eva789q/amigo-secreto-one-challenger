let amigos = [];
let intentos = 0;
let numeroMaximo = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    
    if (nombreAmigo === '') {
        alert('¡El campo está vacío! Por favor ingresa un nombre.');
        asignarTextoElemento('p', 'Por favor, ingresa un nombre válido.');
        return;
    }
 // Verificar si solo es 1 nombre
  

    // Verificar si el nombre ya existe
    if (amigos.includes(nombreAmigo)) {
        alert('¡Este nombre ya existe! Por favor agrégale un distintivo como un número o apellido. Por ejemplo: ' + nombreAmigo + '1 o ' + nombreAmigo + ' García');
        asignarTextoElemento('p', 'El nombre ya existe en la lista.');
        return;
    }
    
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    document.getElementById('amigo').value = '';
    asignarTextoElemento('p', 'Amigo agregado exitosamente');
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

function sortearGanador() {

    if (amigos.length < 2) {
        asignarTextoElemento('p', 'Debe haber al menos dos participantes para realizar el sorteo.');
        return;
    }
    
    // Elegir un ganador al azar
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];
    
    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    let elementoGanador = document.createElement('div');
    elementoGanador.className = 'ganador';
    elementoGanador.textContent = `¡El amigo secreto sorteado es: ${ganador}!`;
    resultado.appendChild(elementoGanador);
    
    asignarTextoElemento('p', '¡Sorteo realizado con éxito!');
}

function reiniciarJuego() {
    // Reiniciar variables globales
    amigos = [];
    intentos = 0;
    numeroMaximo = 0;
    
    // Limpiar los elementos HTML
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    asignarTextoElemento('p', 'Juego reiniciado');
}