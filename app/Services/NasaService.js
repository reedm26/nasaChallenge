import Store from "../store.js";
import Nasa from "../Models/Nasa.js";

let _nasaApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary"
});
class NasaService {
  // getPicByQuery(date) {
  //   //NOTE You will not need to change this method
  //   let url =
  //     "https://api.nasa.gov/planetary/apod?api_key=uJN5CCEtSWKW6KHjO5kRy9DIdjwA0zGi96FwheN2&date=" +
  //     date;
  //   // @ts-ignore
  //   $.getJSON(url)
  //     .then(res => {
  //       let results = res.results.map(rawData => new Nasa(rawData));
  //       Store.commit("pictures", results);
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // }
  search(date) {
    _nasaApi
      .get("apod?api_key=uJN5CCEtSWKW6KHjO5kRy9DIdjwA0zGi96FwheN2&date=" + date)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

const service = new NasaService();
export default service;
