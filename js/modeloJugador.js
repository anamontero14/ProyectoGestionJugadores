class ModeloJugador {
    
    agregarJugador(jugador) {

        // Si el localStorage no esta vacio
        if (localStorage.length > 0) {

            // Obtenemos la última key
            let lastKey = localStorage.key(localStorage.length - 1);

            // Extraemos el número al principio de la clave (por ejemplo, de "3J" obtenemos 3)
            let id = parseInt(lastKey);

            // Almacenamos el jugador con la nueva key
            localStorage.setItem(++id + 'J', JSON.stringify(jugador));

        // Si el localStorage esta vacio
        } else {

            // Almacenamos el primer jugador con la key 1J
            localStorage.setItem(1 + 'J', JSON.stringify(jugador));
        }
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
                
                // Obtenemos el jugador
                let jugador = localStorage.getItem(key);

                // Añadimos el jugador al array
                jugadores.push(JSON.parse(jugador));
            }
        }

        return jugadores;
    }


    
}