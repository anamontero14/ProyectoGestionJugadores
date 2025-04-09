class ModeloJugador {
    
    constructor() {
        
        if (!localStorage.getItem("J")) {
            localStorage.setItem("J", JSON.stringify([]));
        }
    }

    agregarJugador(jugador) {

        // Obtener el array de jugadores desde localStorage
        let jugadores = JSON.parse(localStorage.getItem('J'));

        // Añadir el nuevo jugador
        jugadores.push(jugador);

        // Guardar de nuevo en localStorage
        localStorage.setItem('J', JSON.stringify(jugadores));
    }

    obtenerJugadores() {

        // Devolver el array de jugadores
        return JSON.parse(localStorage.getItem('J'));
    }
}
