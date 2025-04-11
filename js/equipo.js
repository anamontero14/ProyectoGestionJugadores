class Equipo {

    constructor(nombre, ciudad, estadio) {

        if (nombre != null && nombre != "") {
            this.nombre = nombre;
        }

        if (ciudad != null && ciudad != "") {
            this.ciudad = ciudad;
        }

        if (estadio != null && estadio != "") {
            this.estadio = estadio;
        }
    }

}