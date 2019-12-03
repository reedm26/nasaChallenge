import NasaService from "../Services/NasaService.js";
import store from "../store";

//Private
function _draw() {
  let Template = "";

  console.log(Nasa);
}

//Public
export default class NasaController {
  constructor() {
    store.subscribe("values", _draw);
  }
}
