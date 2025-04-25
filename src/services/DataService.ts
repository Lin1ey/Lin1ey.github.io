import { AboutMeData } from "@/types/aboutme";

export default class DataService {
  async getAboutMeData(): Promise<AboutMeData> {
    let data = await fetch('data/AboutMeData.json').then((data) => data.json());
    return data;
  }
}
