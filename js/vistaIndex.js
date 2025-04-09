class Vista {

    constructor() {
        // Contenedor donde se irán mostrando los jugadores
        this.mostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");
        // Botón
        this.boton = document.getElementById("boton");
    }

    mostrarJugador(jugadores) {
        console.log("Datos:", jugadores);

        // Limpiar el contenedor
        this.mostrarJugadores.innerHTML = '';

        // Crear lista ordenada
        const ol = document.createElement('ol');

        for (let i = 0; i < jugadores.length; i++) {
            const jugadorItem = document.createElement('li');

            // Mostrar información relevante del jugador
            jugadorItem.textContent = `
                Nombre: ${jugadores[i].nombre}, 
                Edad: ${this.calcularEdad(jugadores[i].añoNacimiento)}, 
                Posición: ${jugadores[i].posicion}
            `;

            ol.appendChild(jugadorItem);
        }

        this.mostrarJugadores.appendChild(ol);
    }

    calcularEdad(añoNacimiento) {
        const añoActual = new Date().getFullYear();
        return añoActual - new Date(añoNacimiento).getFullYear();
    }

    clearInputs() {
        document.getElementById("nombreJugador").value = "";
        document.getElementById("añoNacimientoJugador").value = "";
        document.getElementById("posicionJugador").value = "";
    }
}