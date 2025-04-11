class ModeloEquipo {
    
    constructor() {

        if (!localStorage.getItem("E")) {
            localStorage.setItem("E", JSON.stringify([]));
        }
    }

    agregarEquipo(equipo) {

        // Obtenemos el array de equipos desde localStorage
        let equipos = this.obtenerEquipos();

        // Añadimos el nuevo equipo
        equipos.push(equipo);

        // Guardamos de nuevo en localStorage
        localStorage.setItem('E', JSON.stringify(equipos));
    }

    eliminarEquipo(pos) {

        // Obtenemos el array de equipos desde localStorage
        let equipos = this.obtenerEquipos();

        // Eliminamos del array el objeto que se ha clickado
        equipos.splice(pos, 1);

        // Guardamos de nuevo en localStorage
        localStorage.setItem('E', JSON.stringify(equipos));
    }

    obtenerEquipos() {

        // Devolver el array de equipos
        return JSON.parse(localStorage.getItem('E'));
    }
}