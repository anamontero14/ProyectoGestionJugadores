class Vista {

    constructor() {
        // Contenedor donde se irán mostrando los jugadores
        this.divMostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");
        // Botón
        this.boton = document.getElementById("boton");
    }

    //funcion que hace un renderizado de los jugadores
    renderJugadores(jugadores) {

        console.log("Datos:", jugadores);

        // Limpiar el contenedor
        $("#cuerpoTablaJugadores").empty();

        //bucle for para recorrer el array de jugadores
        for (let i = 0; i < jugadores.length; i++) {

            /*variable que almacena el nº de la posición actual + 1 para
            para que no aparezca como el primer nº el 0*/
            let tdId = i + 1;

            /**
             * una variable que almacena el nombre del jugador que se 
             * encuentra en dicha posición
             */
            let tdNombre = jugadores[i].nombre;

            /**
             * variable que almacena el año de nacimiento del jugador
             * que se encuentra en esa posición
             */
            let tdFechaNacimiento = jugadores[i].añoNacimiento;

            /**
             * variable que almacena la posición (al jugar) del
             * jugador que se encuentre en esa posición del array
             */
            let tdPosicion = jugadores[i].posicion;

            const fila = "<tr>" +
                "<td>" + tdId + "</td>" +
                "<td>" + tdNombre + "</td>" +
                "<td>" + tdFechaNacimiento + "</td>" +
                "<td>" + tdPosicion + "</td>" +
                "<td>" + "<button type='button' id='" + i + "'>Modificar</button>" + " "
                + "<button type='button' id='" + i + "'>Eliminar</button>" + "</td>" + "</tr>";

            $("#cuerpoTablaJugadores").append(fila);
        }

    }

    //funcion de render para renderizar los equipos
    renderEquipos(equipos) {

        console.log("Datos:", equipos);

        // Limpiar el contenedor
        $("#cuerpoTablaEquipos").empty();

        for (let i = 0; i < equipos.length; i++) {

            //creo las variables que almacenan los datos de las tablas
            //const fila = document.createElement('tr');

            let tdId = i + 1;
            let tdNombre = equipos[i].nombre;
            let tdCiudad = equipos[i].ciudad;
            let tdEstadio = equipos[i].estadio;

            const fila = "<tr>" +
                "<td>" + tdId + "</td>" +
                "<td>" + tdNombre + "</td>" +
                "<td>" + tdCiudad + "</td>" +
                "<td>" + tdEstadio + "</td>" +
                "<td>" + "<button type='button' id='" + i + "'>Modificar</button>" + " " +
                "<button type='button' id='" + i + "'>Eliminar</button>" + "</td>" + "</tr>";

            $("#cuerpoTablaEquipos").append(fila);
        }

    }

    renderAsignarJugadorEquipo(jugadores, equipos) {

        for (let i = 0; i < jugadores.length; i++) {
            //recojo el nombre del jugador
            let nombreJugador = jugadores[i].nombre;
            //creo la opcion
            const opcionJugador = "<option value='" + i + "'>" + nombreJugador + "</option"
            //la meto
            $("#selectJugadores").append(opcionJugador);
        }

        for (let i = 0; i < equipos.length; i++) {
            //recojo el nombre del equipo
            let nombreEquipo = equipos[i].nombre;
            //creo la opcion
            const opcionEquipo = "<option value='" + i + "'>" + nombreEquipo + "</option"
            //la meto
            $("#selectEquipo").append(opcionEquipo);
        }

    }

    // funcion para renderizar el select de los equipos
    renderSelectEquipos(equipos) {

        // limpiar el select
        $("#selectEquipo").empty();

        // recorro el array equipos
        for (let i in equipos) {

            // obtengo el equipo
            let equipo = equipos[i];

            // obtengo el nombre del equipo
            let nombre = equipo.nombre;

            // obtengo el id del equipo
            let id = equipo.id;

            // creo la opcion para el select
            let opcion = "<option value='" + i + "'>" + nombre + "</option>";

            // añado la opcion al select
            $("#selectEquipo").append(opcion);
        }
    }

        // funcion para renderizar el select de los jugadores
        renderSelectJugadores(jugadores) {

            // limpiar el select
            $("#selectJugador").empty();
    
            // recorro el array jugadores
            for (let i in jugadores) {
    
                // obtengo el jugador
                let jugador = jugadores[i];
    
                // obtengo el nombre del jugador
                let nombre = jugador.nombre;
    
                // obtengo el id del jugador
                let id = jugador.id;
    
                // creo la opcion para el select
                let opcion = "<option value='" + i + "'>" + nombre + "</option>";
    
                // añado la opcion al select
                $("#selectJugador").append(opcion);
            }
        }

    /*
    calcularEdad(añoNacimiento) {
        const añoActual = new Date().getFullYear();
        return añoActual - new Date(añoNacimiento).getFullYear();
    }*/

    //Se encarga de limpiar los inputs cada vez que se pulsa el botón de enviar
    clearInputs() {
        document.getElementById("nombreEquipo").value = "";
        document.getElementById("ciudadEquipo").value = "";
        document.getElementById("estadioEquipo").value = "";
    }
}