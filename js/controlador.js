class Controlador {

    constructor() {
        this.vista = new Vista();
        this.modeloJugador = new ModeloJugador();
        this.modeloEquipo = new ModeloEquipo();
        this.bindEvents();
    }


    bindEvents() {

        // La vista renderiza los jugadores
        this.renderJ();

        // Agregar jugador
        $("#botonAgregarJugadores").click(() => {

            // Añade el jugador
            this.añadeJugador();

            // La vista renderiza los jugadores
            this.renderJ();
        });

        // La vista renderiza los equipos
        this.renderE();

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

        // Asignar jugador a equipo
        $("#btnAsignar").click(() => {

            // Obtenemos el valor del select de los jugadores (ID Jugador)
            let idJugador = $("#selectJugador").val();

            // Obtenemos el nombre del select de los equipos (Nombre Equipo)
            let idEquipo = $("#selectEquipo").val();

            // Asignamos el equipo al jugador
            this.modeloJugador.asignarEquipoToJugador(idJugador, idEquipo);

            console.log(this.modeloJugador.obtenerJugadores());
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
        this.vista.renderSelectJugadores(jugadores);
    }

    renderE() {
        let equipos = this.modeloEquipo.obtenerEquipos();
        this.vista.renderEquipos(equipos);
        this.vista.renderSelectEquipos(equipos);
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

    asignarEquipoJugador() {

        
    }

   



}