import NasaService from "../Services/NasaService.js";
import store from "../store.js";

//Private
function _drawResults() {
  let template = "";
  store.State.pictures.forEach(pictures => {
    template += pictures.Template;
  });
  document.getElementById("pictures").innerHTML = template;
}

//Public
export default class NasaController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe("pictures", _drawResults);
  }
  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    let form = event.target;
    // let date = form.date.value;

    try {
      debugger;
      NasaService.getPicByQuery(e.form.date.value);
    } catch (error) {
      console.error(error);
    }
  }
}
