class Vista {

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
        document.getElementById("añoNacimientoJugador").value = "1000-01-01";
        document.getElementById("posicionJugador").value = "";
    }

}