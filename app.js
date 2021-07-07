const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
        // Pedir ciudad
        const lugar = await leerInput("Ciudad: ");
        console.log(lugar);
        // TODO: Buscar lugares

        // TODO: Seleccionar lugar

        // TODO: Obtener info clima|

        // TODO: Mostrar resultados
        console.log(`\n Información de la ciudad\n`.green);
        console.log("Ciudad: ", "datos");
        console.log("Latitud: ", "datos");
        console.log("Longitud: ", "datos");
        console.log("Temperatura: ");
        console.log("Minima: ", "datos");
        console.log("Máxima: ", "datos");
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
