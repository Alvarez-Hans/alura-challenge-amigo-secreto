// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    // Se obtiene el valor del campo de texto donde se ingresa el nombre del amigo.
    let inputAmigo = document.getElementById('amigo');

    let nombreAmigo = inputAmigo.value.trim();
    // Verificamos que se haya ingresado un nombre.
    if (nombreAmigo === '') {
        alert('Por favor, escribe el nombre de un amigo.');
        return; // Detiene la ejecución si no hay nombre.
    }

    // Verificamos si el amigo ya está en la lista para evitar duplicados.
    const nombreAmigoMinuscula = nombreAmigo.toLowerCase();
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nombreAmigoMinuscula)) {
        alert(`¡El nombre "${nombreAmigo}" ya ha sido agregado! Por favor, introduce un nombre diferente.`);
        inputAmigo.value = ''; // Limpiamos el campo.
        return;
    }

    // Agregamos el amigo al arreglo.
    amigos.push(nombreAmigo);

    // Actualizamos la lista en el HTML.
    actualizarListaAmigos();

    // Limpiamos el campo de texto y lo enfocamos para el siguiente ingreso.
    inputAmigo.value = '';
    inputAmigo.focus();
}

function actualizarListaAmigos() {
    let listaElemento = document.getElementById('listaAmigos');
    // Limpiamos la lista actual para evitar duplicar los nombres en pantalla.
    listaElemento.innerHTML = '';

    // Recorremos el arreglo de amigos para crear los elementos de la lista.
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un elemento <li> por cada amigo.
        let item = document.createElement('li');
        item.textContent = amigos[i];
        // Añadimos el elemento <li> a la lista <ul>.
        listaElemento.appendChild(item);
    }
}

function manejarEnter(event) {
    // Verifica si la tecla presionada es 'Enter'
    if (event.key === 'Enter') {
        // Llama a la función para agregar el amigo, simulando el clic en el botón.
        agregarAmigo();
    }
}

function sortearAmigo() {
    // Valida que haya suficientes amigos para el sorteo.
    if (amigos.length === 0) {
        alert('¡Debes agregar al menos un amigo para poder sortear!');
        return;
    }

    // Genera un índice aleatorio para seleccionar al ganador.
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `El amigo secreto sorteado es: <strong>${ganador}</strong>`;
}
