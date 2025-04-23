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
                "<td>"
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
                "<td>" +
                "<button type='button' id='" + i + "'>Eliminar</button>" + "</td>" + "</tr>";

            $("#cuerpoTablaEquipos").append(fila);
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

    renderMostrarJugadoresPorEquipo(jugadores, equipos) {
        
        // Limpiar el contenedor antes de añadir la nueva tabla
        $("#resultadoEstadisticas").empty();

        // Crear la tabla
        let tabla = "<table id='tablaPlantillas' class='table table-bordered'></table>";

        // Añadir la tabla al contenedor
        $("#resultadoEstadisticas").append(tabla);

        // Recorro los equipos
        for (let i = 0; i < equipos.length; i++) {
            // Crear la fila con el nombre del equipo
            let filaEquipo = "<thead><tr><th colspan='2'>" + equipos[i].nombre + "</th></tr></thead>";

            // Añadir la fila del equipo a la tabla
            $("#tablaPlantillas").append(filaEquipo);

            // Recorro los jugadores
            let jugadoresEquipo = false; // bandera para ver si se añaden jugadores

            for (let j = 0; j < jugadores.length; j++) {
                // Si el jugador pertenece al equipo
                if (jugadores[j].equipo == i) {
                    let filaJugador = "<tr><td>" + jugadores[j].nombre + "</td><td>" + jugadores[j].posicion + "</td></tr>";
                    $("#tablaPlantillas").append(filaJugador);
                    jugadoresEquipo = true; // Hay jugadores para este equipo
                }
            }

            // Si no hay jugadores para un equipo, agregar una fila vacía
            if (!jugadoresEquipo) {
                let filaSinJugadores = "<tr><td colspan='2'>No hay jugadores en este equipo</td></tr>";
                $("#tablaPlantillas").append(filaSinJugadores);
            }
        }
    }



    renderMostrarNumJugadoresRegistrados(jugadores) {

        // Vaciar el div
        $("#resultadoEstadisticas").empty();
    
        // Obtener el número total directamente
        let total = jugadores.length;
    
        // Mostrar el total
        let mostrarTotalJugadores = "<h2>Total de jugadores</h2><p class='fs-4'>" + total + "</p>";
    
        $("#resultadoEstadisticas").append(mostrarTotalJugadores);
    }
    

    //funcion para mostrar el numero de equipos registrados
    renderMostrarNumEquiposRegistrados(equipos) {

        // Vaciar el div
        $("#resultadoEstadisticas").empty();
    
        // Obtener el número total directamente
        let total = equipos.length;
    
        // Mostrar el total
        let mostrarTotalEquipos = "<h2>Total de equipos</h2><p class='fs-4'>" + total + "</p>";
    
        $("#resultadoEstadisticas").append(mostrarTotalEquipos);

    }

    //promedio de edad de los jugadores
    renderPromedioEdadJugadores(jugadores) {

        //almacena el año
        let año;

        //suma de la edad
        let suma;

        //contador
        let cont = jugadores.length;

        //media de la edad
        let mediaEdad;

        for (let i = 0; i < jugadores.length; i++) { 
            //almacena el año
            año = jugadores[i].añoNacimiento;

            console.log(año);

            //sumo el año
            suma += año;
        }

        //hago la media
        mediaEdad = año / cont;

        let promedioEdad = "<h2>Promedio de edad de los jugadores</h2>" + "<br>" + mediaEdad;

        $("#resultadoEstadisticas").append(promedioEdad);

    }

    //Se encarga de limpiar los inputs cada vez que se pulsa el botón de enviar
    clearInputs() {
        document.getElementById("nombreEquipo").value = "";
        document.getElementById("ciudadEquipo").value = "";
        document.getElementById("estadioEquipo").value = "";
    }
}