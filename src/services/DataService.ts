export default class DataService {
  async getAboutMeData() {
    let data = await fetch('data/AboutMeData.json').then((data) => data.json());
    return data;
  }
}
