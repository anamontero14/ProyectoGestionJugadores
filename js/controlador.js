class Controlador {
    
    constructor() {
        this.vista = new Vista();
        this.modeloJugador = new ModeloJugador();
        this.bindEvents();
    }


    bindEvents() {
        $("#botonAgregarJugadores").click(() => {

            // Añade el jugador
            this.añadeJugador();

            // La vista renderiza los jugadores
            this.mostrarJugadores();
            
        });

        $("#datos").on("click", "eliminar", function() {
            
        });

    }

    añadeJugador() {

        let nombreJugador = $("#nombreJugador").val();
        let añoNacimientoJugador = $("#añoNacimientoJugador").val();
        let posicionJugador = $("#posicionJugador").val();

        let jugador = new Jugador(nombreJugador, posicionJugador, añoNacimientoJugador);

        this.modeloJugador.agregarJugador(jugador);
    }

    mostrarJugadores() {
        let jugadores = this.modeloJugador.obtenerJugadores();
        this.vista.mostrarJugadores(jugadores);
    }
}