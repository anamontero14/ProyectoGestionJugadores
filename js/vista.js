class Vista {

    constructor() {
        // Contenedor donde se irán mostrando los jugadores
        this.divMostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");
        // Botón
        this.boton = document.getElementById("boton");
    }

    mostrarJugadores(jugadores) {

        console.log("Datos:", jugadores);

        // Limpiar el contenedor
        $("#cuerpoTabla").empty();

        for (let i = 0; i < jugadores.length; i++) {

            //creo las variables que almacenan los datos de las tablas
            //const fila = document.createElement('tr');
            console.log(i);
            let tdNro = i;
            let tdNombre = jugadores[i].nombre;
            let tdFechaNacimiento = jugadores[i].añoNacimiento;
            let tdPosicion = jugadores[i].posicion;

            const fila = "<tr>" +
                "<td>" + tdNro + "</td>" + 
                "<td>" + tdNombre + "</td>" + 
                "<td>" + tdFechaNacimiento + "</td>" +
                "<td>" + tdPosicion + "</td>" +
                "</tr>";

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