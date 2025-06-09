function manejarBotonVolver(event) {
    event.preventDefault();
    
        window.location.href = event.currentTarget.getAttribute('href');
}

function inicializarEventListeners() {
    const botonVolver = document.getElementById('boton-volver');
    if (botonVolver) {
        botonVolver.addEventListener('click', manejarBotonVolver);
        
    }
}

document.addEventListener('DOMContentLoaded', inicializarEventListeners);