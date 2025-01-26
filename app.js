let amigos = [];

function agregarAmigo() {
    let obtenerAmigos = document.getElementById('amigo').value.trim();

    if (obtenerAmigos === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(obtenerAmigos);
    document.getElementById('amigo').value = '';
    actualizarAmigos();
}

function actualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let amigo of amigos) {
        let elemento = `<li>${amigo}</li>`;
        lista.innerHTML += elemento;
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio];
        
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
        
        let resultadoUl = document.getElementById('resultado');
        resultadoUl.innerHTML = '';
        
        let li = document.createElement('li');
        li.textContent = 'El amigo secreto sorteado es: ' + amigoSeleccionado;
        resultadoUl.appendChild(li);
        
        // Para verificar el amigo sorteado
        console.log("El amigo seleccionado es:", amigoSeleccionado);
    } else {
        console.log("No hay amigos disponibles para sortear.");
    }
}
