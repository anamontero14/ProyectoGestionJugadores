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

            // Llamamos a la funcion del controlador asignarEquipoJugador
            this.asignarEquipoJugador();
        });

        // Mostrar estadisticas
        $("#mostrarStats").on("click", "button", (event) => {

            // Obtenemos el valor de la opcion seleccionada
            let valor = $("#mostrarStats").val();

            // Si es el valor 1
            if (valor == 3) {
                this.plantillaEquipos();
            }
        });
    }


    añadeJugador() {

        let creaJugador = true;

        let nombreJugador = $("#nombreJugador").val();
        let añoNacimientoJugador = $("#añoNacimientoJugador").val();
        let posicionJugador = $("#posicionJugador").val();

        if (nombreJugador == null || nombreJugador == "") {
            alert("Introduzca el nombre del jugador");
            creaJugador = false;
        }
        if (añoNacimientoJugador == null || añoNacimientoJugador == "") {
            alert("Introduzca el año de nacimiento del jugador");
            creaJugador = false;
        }
        if (posicionJugador == null || posicionJugador == "") {
            alert("Seleccione la posicion del jugador");
            creaJugador = false;
        }

        if (creaJuagdor) {
            let jugador = new Jugador(nombreJugador, posicionJugador, añoNacimientoJugador);
            this.modeloJugador.agregarJugador(jugador);
        }
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

        let creaEquipo = true;

        let nombreEquipo = $("#nombreEquipo").val();
        let ciudadEquipo = $("#ciudadEquipo").val();
        let estadioEquipo = $("#estadioEquipo").val();

        if (nombreEquipo == null || nombreEquipo == "") {
            alert("Introduzca el nombre del equipo");
            creaEquipo = false;
        }
        if (ciudadEquipo == null || ciudadEquipo == "") {
            alert("Introduzca la ciudad del equipo");
            creaEquipo = false;
        }
        if (estadioEquipo == null || estadioEquipo == "") {
            alert("Introduzca el estadio del equipo");
            creaEquipo = false;
        }

        if (creaEquipo) {
            let equipo = new Equipo(nombreEquipo, ciudadEquipo, estadioEquipo);
            this.modeloEquipo.agregarEquipo(equipo);
        }
    }

    eliminarEquipo(pos) {

        // Eliminamos el equipo
        this.modeloEquipo.eliminarEquipo(pos);

        // Volvemos a renderizar la tabla actualizada
        this.renderE();
    }

    asignarEquipoJugador() {

        // Obtenemos el valor del select de los jugadores (ID Jugador)
        let idJugador = $("#selectJugador").val();

        // Obtenemos el nombre del select de los equipos (Nombre Equipo)
        let idEquipo = $("#selectEquipo").val();

        // Asignamos el equipo al jugador
        this.modeloJugador.asignarEquipoToJugador(idJugador, idEquipo);

        // Imprimimos los jugadores
        console.log(this.modeloJugador.obtenerJugadores());
    }

    plantillaEquipos() {
        let jugadores = this.modeloEquipo.obtenerJugadores();
        let equipos = this.modeloEquipo.obtenerEquipos();
        this.vista.renderMo
    }

   



}