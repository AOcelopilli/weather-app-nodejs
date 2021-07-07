const fs = require("fs");
const axios = require("axios");

class Busquedas {
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    // TODO: leer DB si existe
    this.leerDB();
  }

  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }

  get historialCapitalizado() {
    // Capitalizar cada palabra
    return this.historial.map((lugar) => {
      let palabras = lugar.split(" ");
      palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));

      return palabras.join(" ");
    });
  }

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }

  /* Metodo asincrono porque se hará una peticion HTTP */
  async ciudad(lugar = "") {
    try {
      // petición http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });

      const resp = await instance.get();

      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      // instancia axios
      const instance = await axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat, lon },
      });

      const res = await instance.get();

      const { weather, main } = res.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  agregarHistorial(lugar = "") {
    // TODO: Prevenir duplicidad.
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return;
    }

    this.historial = this.historial.splice(0, 5);

    this.historial.unshift(lugar);

    // Grabar en DB.
    this.guardarDB();
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    };

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {
    // debe de existir...
    if (!fs.existsSync(this.dbPath)) return;

    // const info ... readFileSync ... path.... {encoding: utf 8}

    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });

    const data = JSON.parse(info);

<<<<<<< HEAD
    return []; // retornar los lugares.
=======
    this.historial = data.historial;
>>>>>>> 5caab8d40dd8f6bf451ac04e774d1e972d4455e4
  }
}

/* Exportación por defecto. */
module.exports = Busquedas;
