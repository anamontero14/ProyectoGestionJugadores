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

        $("#cuerpoTabla").on("click", "button", (event) => {
            
            // Obtenemos el id del botón clickeado
            let pos = $(event.target).attr('id');
        
            // Eliminamos el jugador
            this.modeloJugador.eliminarJugador(pos);
        
            // Volvemos a renderizar la tabla actualizada
            this.renderJ();
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