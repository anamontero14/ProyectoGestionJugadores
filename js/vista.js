class Vista {

    constructor() {
        // Contenedor donde se irán mostrando los jugadores
        this.divMostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");
        // Botón
        this.boton = document.getElementById("boton");
    }

    mostrarJugadores(jugadores) {
        
        console.log("Datos:", jugadores);

        // Limpiar el contenedor
        this.divMostrarJugadores.innerHTML = '';

        // Crear lista ordenada
        const ol = document.createElement('ol');

        for (let i = jugadores.length - 1; i > 0 ; i--) {
            const jugadorItem = document.createElement('li');

            // Mostrar información relevante del jugador
            jugadorItem.textContent = `
                Nombre: ${jugadores[i].nombre}, 
                Edad: ${jugadores[i].añoNacimiento}, 
                Posición: ${jugadores[i].posicion}
            `;

            ol.appendChild(jugadorItem);
        }

        this.divMostrarJugadores.appendChild(ol);
    }

    /*calcularEdad(añoNacimiento) {
        const añoActual = new Date().getFullYear();
        return añoActual - new Date(añoNacimiento).getFullYear();
    }*/

    clearInputs() {
        document.getElementById("nombreJugador").value = "";
        document.getElementById("añoNacimientoJugador").value = "";
        document.getElementById("posicionJugador").value = "";
    }
}