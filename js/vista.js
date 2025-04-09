class Vista {

    constructor() {
        // Contenedor donde se irán mostrando los jugadores
        this.mostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");
        // Botón
        this.boton = document.getElementById("boton");
    }

    mostrarJugadores(jugadores) {
        
        for (let i in jugadores) {

            let jugador = jugadores[i];

            let jugadorFila = "<tr>" +
            "<td>" + jugador.nombre + "</td>" +
            "<td>" + jugador.posicion + "</td>" +
            "<td>" + jugador.fechaNacimientos + "</td>" +
            "</tr>";

            $("#jugadores").append(jugadorFila);
        }
    }

    clearInputs() {
        document.getElementById("nombreJugador").value = "";
        document.getElementById("añoNacimientoJugador").value = "";
        document.getElementById("posicionJugador").value = "";
    }
}