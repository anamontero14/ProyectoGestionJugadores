class ModeloJugador {
    
    constructor() {
        this.bdJugador = [];
        localStorage.setItem("J", this.bdJugador);
    }

    agregarJugador(jugador) {
        
        // Obtenemos el array del localStorage
        let jugadores = localStorage.getItem('J');

        // Añadimos el jugador
        jugadores.push(jugador);
    }

    obtenerJugadores() {
        
        // Devolvemos el array del localStorage
        return localStorage.getItem('J');
    }


    
}