export default class Nasa {
  constructor(data) {
    this.date = data.date;
    this.media_type = data.media_type;
  }

  get Template() {
    return this.date;
  }
}
