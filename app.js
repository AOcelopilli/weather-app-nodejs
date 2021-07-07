require("dotenv").config();
const {
  leerInput,
  inquirerMenu,
  pausa,
  listadoLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  /* Creamos instancia  */
  const busquedas = new Busquedas();

  let opt;

  do {
    // Mostramos el menu.
    opt = await inquirerMenu();

    // Pasamos la opción
    switch (opt) {
      case 1:
<<<<<<< HEAD
        // Pedir ciudad
        const lugar = await leerInput("Ciudad: ");
        console.log(lugar);
        // TODO: Buscar lugares

        // TODO: Seleccionar lugar

        // TODO: Obtener info clima|

        // TODO: Mostrar resultados
=======
        // Mostrar mensaje
        const termino = await leerInput("Ciudad: ");

        const lugares = await busquedas.ciudad(termino);
        // Buscar mostrar lugares
        const id = await listadoLugares(lugares);
        if (id === "0") continue;

        const lugarSel = lugares.find((l) => l.id === id);
        // Guardar en DB

        busquedas.agregarHistorial(lugarSel.nombre);

        // Seleccionar el lugar
        const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
        // Obtener info
        const { desc, min, max, temp } = clima;
        // Mostrar resultados
        console.clear();
>>>>>>> 5caab8d40dd8f6bf451ac04e774d1e972d4455e4
        console.log(`\n Información de la ciudad\n`.green);
        console.log("Ciudad: ", lugarSel.nombre);
        console.log("Latitud: ", lugarSel.lat);
        console.log("Longitud: ", lugarSel.lng);
        console.log("Temperatura: ", temp);
        console.log("Minima: ", min);
        console.log("Máxima: ", max);
        console.log("Máxima: ", desc);
        break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}. `.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
