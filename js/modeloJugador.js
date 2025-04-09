class ModeloJugador {
    
    constructor() {

        if (!localStorage.getItem("J")) {
            localStorage.setItem("J", JSON.stringify([]));
        }
    }

    agregarJugador(jugador) {

        // Obtenemos el array de jugadores desde localStorage
        let jugadores = JSON.parse(localStorage.getItem('J'));

        // Añadimos el nuevo jugador
        jugadores.push(jugador);

        // Guardamos de nuevo en localStorage
        localStorage.setItem('J', JSON.stringify(jugadores));
    }

    eliminarJugador(pos) {

        // Obtenemos el array de jugadores desde localStorage
        let jugadores = JSON.parse(localStorage.getItem('J'));

        // Eliminamos del array el objeto que se ha clickado
        jugadores.splice(pos, 1);
    }

    obtenerJugadores() {

        // Devolver el array de jugadores
        return JSON.parse(localStorage.getItem('J'));
    }
}
