export default class Nasa {
  constructor(data) {
    this.title = data.title;
  }

  get Template() {
    return this.title;
  }
}
