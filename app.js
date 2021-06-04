const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();

  let opt;

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        const lugar = await leerInput("Ciudad: ");
        console.log(lugar);
        // Buscar mostrar lugares

        // Seleccionar el lugar

        // Obtener info

        // Mostrar resultados
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
