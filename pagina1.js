function procesarXML(xml) {
    const tabla = document.getElementById("tabla-datos");
    
    const xmlDoc = xml.responseXML;
    const superdeportivos = xmlDoc.getElementsByTagName("superdeportivo");
    
    for (let i = 0; i < superdeportivos.length; i++) {
        const modelo = superdeportivos[i].getElementsByTagName("modelo")[0].childNodes[0].nodeValue;
        const velocidad = superdeportivos[i].getElementsByTagName("velocidad")[0].childNodes[0].nodeValue;
        const aceleracion = superdeportivos[i].getElementsByTagName("aceleracion")[0].childNodes[0].nodeValue;
        const potencia = superdeportivos[i].getElementsByTagName("potencia")[0].childNodes[0].nodeValue;
        const motor = superdeportivos[i].getElementsByTagName("motor")[0].childNodes[0].nodeValue;
        const traccion = superdeportivos[i].getElementsByTagName("traccion")[0].childNodes[0].nodeValue;
        const peso = superdeportivos[i].getElementsByTagName("peso")[0].childNodes[0].nodeValue;
        
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${modelo}</td>
            <td>${velocidad}</td>
            <td>${aceleracion}</td>
            <td>${potencia}</td>
            <td>${motor}</td>
            <td>${traccion}</td>
            <td>${peso}</td>
        `;
        tabla.appendChild(fila);
    }
    
    const celdas = document.querySelectorAll("#tabla-datos td");
    celdas.forEach(celda => {
        celda.setAttribute("tabindex", "0");
    });
}

function cargarDatosXML() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            procesarXML(this);
        } else if (this.readyState == 4 && this.status != 200) {
            mostrarError();
        }
    };
    xhttp.open("GET", "superdeportivos.xml", true);
    xhttp.send();
}

function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }
    
    alert(`Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`);
    document.getElementById('formulario-contacto').reset();
}

// Función para inicializar los event listeners
function inicializarEventListeners() {
    // Formulario de contacto
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', manejarEnvioFormulario);
    }
    
    const botonEnviar = document.getElementById('boton-enviar');
    if (botonEnviar) {
        botonEnviar.addEventListener('click', function(event) {
            if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
                manejarEnvioFormulario(event);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarEventListeners();
    cargarDatosXML();
});

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-tecnologia');
    boton.addEventListener('click', () => {
        window.location.href = 'pagina3.html';
    });
});
