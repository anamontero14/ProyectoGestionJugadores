class Vista {

    constructor() {
        //contenedor donde se iran mostrando los jugadores
        this.mostrarJugadores = document.getElementById("mostrarJugadoresAñadidos");

        //boton
        this.boton = document.getElementById("boton");
    }

    mostrarJugador(jugador) {
        //muestro los jugador en la consola
        console.log("Datos: " + jugador);

        //limpiarlo
        this.mostrarJugadores.innerHTML = '';

        //lista
        const ol = document.createElement('ol');

        for (let i = 0; i < jugador.length; i++) {

            const jugador = document.createElement('li');

            jugador.textContent = jugador[i].descripcion;

            ol.appendChild(jugador);
        };

        this.mostrarJugadores.appendChild(ol);

        //muestro los jugador por pantalla
        console.log(jugador);
    }

    clearInputs() {
        document.getElementById("nombreJugador").value = "";
        document.getElementById("añoNacimientoJugador").value = "1000-01-01";
        document.getElementById("posicionJugador").value = "";
    }

}