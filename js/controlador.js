import Jugador from './jugador';

class Controlador {
    
    constructor() {
        this.vista = new vista();
        this.modeloJugador = new modeloJugador();
    }

    añadeJugador() {

        let nombreJugador = $("#nombreJugador").val();
        let añoNacimientoJugador = $("#añoNacimientoJugador").val();
        let posicionJugador = $("#posicionJugador").val();

        let jugador = new Jugador(nombreJugador, añoNacimientoJugador, posicionJugador);

        this.modeloJugador.agregarJugador(jugador);
    }
}