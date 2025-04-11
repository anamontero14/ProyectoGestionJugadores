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
            this.renderJ();
            
        });

        $("#cuerpoTabla").on("click", "button", function() {
            
            // Obtenemos el id del boton que se ha clickado (posicion en el array del jugador)
            let pos = $(this).attr('id');

            // Eliminamos el jugador
            this.modeloJugador.eliminarJugador(pos);
        });

    }

    añadeJugador() {

        let nombreJugador = $("#nombreJugador").val();
        let añoNacimientoJugador = $("#añoNacimientoJugador").val();
        let posicionJugador = $("#posicionJugador").val();

        let jugador = new Jugador(nombreJugador, posicionJugador, añoNacimientoJugador);

        this.modeloJugador.agregarJugador(jugador);
    }

    renderJ() {
        let jugadores = this.modeloJugador.obtenerJugadores();
        this.vista.renderJugadores(jugadores);
    }
}