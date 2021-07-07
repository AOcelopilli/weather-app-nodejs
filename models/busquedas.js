class Busquedas {
  historial = ["Madrid", "Monterrey", "Toronto"];

  constructor() {
    // TODO: leer DB si existe
  }

  /* Metodo asincrono porque se hará una peticion HTTP */
  async ciudad(lugar = "") {
    // petición http
    console.log(lugar);

    return []; // retornar los lugares.
  }
}

/* Exportación por defecto. */
module.exports = Busquedas;
