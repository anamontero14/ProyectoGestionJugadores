class Jugador {

    constructor(nombre, posicion, añoNacimiento) {

        if (nombre != null && !nombre.isBlank()) {
            this.nombre = nombre;
        }

        if (posicion != null) {
            this.posicion = posicion;
        }

        if (añoNacimiento != null) {
            this.añoNacimiento = añoNacimiento;
        }

        this.equipo = null;
    }

    //setEquipo(equipo) {
        //if ()
    //}
}