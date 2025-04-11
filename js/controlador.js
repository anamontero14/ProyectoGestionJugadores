class Controlador {
    
    constructor() {
        this.vista = new Vista();
        this.modeloJugador = new ModeloJugador();
        this.modeloEquipo = new ModeloEquipo();
        this.bindEvents();
    }


    bindEvents() {

        // Agregar jugador
        $("#botonAgregarJugadores").click(() => {

            // Añade el jugador
            this.añadeJugador();

            // La vista renderiza los jugadores
            this.renderJ();
        });

        // Agregar equipo
        $("#botonAgregarEquipos").click(() => {

            // Añade el equipo
            this.añadeEquipo();

            // La vista renderiza los equipos
            this.renderE();
        });


        // Eliminar jugador
        $("#cuerpoTablaJugadores").on("click", "button", (event) => {

            // Obtenemos el id del botón clickeado
            let pos = $(event.target).attr('id');
        
            // Eliminamos el jugador
            this.eliminarJugador(pos);
        });

        // Eliminar equipo
        $("#cuerpoTablaEquipos").on("click", "button", (event) => {

            // Obtenemos el id del botón clickeado
            let pos = $(event.target).attr('id');
        
            // Eliminamos el equipo
            this.eliminarEquipo(pos);
        });
    }


    añadeJugador() {

        let nombreJugador = $("#nombreJugador").val();
        let añoNacimientoJugador = $("#añoNacimientoJugador").val();
        let posicionJugador = $("#posicionJugador").val();

        let jugador = new Jugador(nombreJugador, posicionJugador, añoNacimientoJugador);

        this.modeloJugador.agregarJugador(jugador);
    }

    eliminarJugador(pos) {

        // Eliminamos el jugador
        this.modeloJugador.eliminarJugador(pos);
        
        // Volvemos a renderizar la tabla actualizada
        this.renderJ();
    }

    renderJ() {
        let jugadores = this.modeloJugador.obtenerJugadores();
        this.vista.renderJugadores(jugadores);
    }


    añadeEquipo() {

        let nombreEquipo = $("#nombreEquipo").val();
        let ciudadEquipo = $("#ciudadEquipo").val();
        let estadioEquipo = $("#estadioEquipo").val();

        let equipo = new Equipo(nombreEquipo, ciudadEquipo, estadioEquipo);

        this.modeloEquipo.agregarEquipo(equipo);
    }

    eliminarEquipo(pos) {

        // Eliminamos el equipo
        this.modeloEquipo.eliminarEquipo(pos);
        
        // Volvemos a renderizar la tabla actualizada
        this.renderE();
    }

    renderE() {
        let equipos = this.modeloEquipo.obtenerEquipos();
        this.vista.renderEquipos(equipos);
    }


    
}