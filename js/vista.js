class Vista {

    constructor() {
        // Contenedor donde se irán mostrando los jugadores
        this.divMostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");
        // Botón
        this.boton = document.getElementById("boton");
    }

    renderJugadores(jugadores) {

        console.log("Datos:", jugadores);

        // Limpiar el contenedor
        $("#cuerpoTabla").empty();

        for (let i = 0; i < jugadores.length; i++) {

            //creo las variables que almacenan los datos de las tablas
            //const fila = document.createElement('tr');

            let numID;

            if (i = 0) {
                numID = 1;
            } else {
                numID = i;
            }

            let tdId = numID;
            let tdNombre = jugadores[i].nombre;
            let tdFechaNacimiento = jugadores[i].añoNacimiento;
            let tdPosicion = jugadores[i].posicion;

            const fila = "<tr>" +
                "<td>" + tdId + "</td>" +
                "<td>" + tdNombre + "</td>" +
                "<td>" + tdFechaNacimiento + "</td>" +
                "<td>" + tdPosicion + "</td>" +
                "<td>" + "<button type='button' id='" + i + "'>Eliminar</button>" + "</td>" + "</tr>";

            $("#cuerpoTabla").append(fila);
        }

    }

    /*
    calcularEdad(añoNacimiento) {
        const añoActual = new Date().getFullYear();
        return añoActual - new Date(añoNacimiento).getFullYear();
    }*/

    //Se encarga de limpiar los inputs cada vez que se pulsa el botón de enviar
    clearInputs() {
        document.getElementById("nombreJugador").value = "";
        document.getElementById("añoNacimientoJugador").value = "";
        document.getElementById("posicionJugador").value = "";
    }
}