// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let elementoHTML = document.getElementById('amigo');
    let nombreAmigo = elementoHTML.value; 

    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }

    // Validar que el nombre no esté registrado
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya está registrado.');
        return;
    }

    // Agregar el amigo al array
    amigos.push(nombreAmigo);
    elementoHTML.value = ''; // Limpiar el campo de texto

}
console.log([amigos]);
