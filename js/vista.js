class Vista {

    constructor() {
        
        //contenedor donde se iran mostrando los jugadores
        this.mostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");

        //boton
        this.boton = document.getElementById("boton");
    }

    render(datos) {
        //muestro los datos en la consola
        console.log("Datos: " + datos);

        //limpiarlo
        this.mostrarJugadores.innerHTML = '';

        //lista
        const ol = document.createElement('ol');

        for (let i = 0; i < datos.length; i++) {

            const jugador = document.createElement('li');

            jugador.textContent = datos[i].descripcion;

            ol.appendChild(jugador);
        };

        this.mostrarJugadores.appendChild(ol);

        //muestro los datos por pantalla
        console.log(datos);
    }

    clearInputs() {
        document.getElementById("nombreJugador").value = "";
        document.getElementById("añoNacimientoJugador").value = "1000-01-01";
        document.getElementById("posicionJugador").value = "";
    }

}

