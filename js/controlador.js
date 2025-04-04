class Controlador {
    
    constructor() {
        this.vista = new Vista();
        this.modeloJugador = new ModeloJugador();
        this.bindEvents();
    }


    bindEvents() {
        $("#boton").click(() => {
            this.añadeJugador();
        });
    }

    añadeJugador() {

        let nombreJugador = $("#nombreJugador").val();
        let añoNacimientoJugador = $("#añoNacimientoJugador").val();
        let posicionJugador = $("#posicionJugador").val();

        let jugador = new Jugador(nombreJugador, posicionJugador, añoNacimientoJugador);

        this.modeloJugador.agregarJugador(jugador);
    }
}