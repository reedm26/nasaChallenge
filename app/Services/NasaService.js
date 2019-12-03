import Store from "../store.js";

class NasaService {
  getPicByQuery(query) {
    //NOTE You will not need to change this method
    let url =
      "https://api.nasa.gov/planetary/apod?api_key=uJN5CCEtSWKW6KHjO5kRy9DIdjwA0zGi96FwheN2" +
      query;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        let results = res.results.map(rawData => new Nasa(rawData));
        Store.commit("pictures", results);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

const service = new NasaService();
export default service;
