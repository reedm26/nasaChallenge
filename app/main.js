import NasaController from "./Controllers/NasaController.js";

class App {
  NasaController = new NasaController();
}

window["app"] = new App();
