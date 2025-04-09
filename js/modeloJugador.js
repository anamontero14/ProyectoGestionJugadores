class ModeloJugador {
    
    agregarJugador(jugador) {

        // Creamos el id y lo inicializamos a 1
        let id = 0;

        // Si el localStorage no esta vacio
        if (localStorage.length > 0) {

            // Obtenemos la última key
            let lastKey = localStorage.key(localStorage.length - 1);

            // Extraemos el número al principio de la clave (por ejemplo, de "3J" obtenemos 3)
            let id = parseInt(lastKey);

            console.log(id);
        }

        // Almacenamos el jugador con la nueva clave
        localStorage.setItem(++id + 'J', JSON.stringify(jugador));
            
    }


    obtenerJugadores() {

        // Creamos el array Jugadores
        let jugadores = [];

        // Recorremos el localStorage
        for (let i = 0; i < localStorage.length; i++) {

            // Obtenemos la key
            const key = localStorage.key(i);

            // Si la key contiene la 'J'
            if (key.includes('J')) {
                
                // Añadimos el jugador al array
                jugadores.push(localStorage.getItem(key));
            }
        }

        return jugadores;
    }


    
}