class ModeloJugador {

    constructor() {
        this.id = 0;
    }

    agregarJugador(jugador) {

        // Incrementamos el id
        this.id++;

        // Almacenamos el jugador en localStorage
        localStorage.setItem(this.id, JSON.stringify(jugador));

        // Actualizamos el nuevo id en localStorage
        localStorage.setItem("ultimoId", this.id);
    }
}