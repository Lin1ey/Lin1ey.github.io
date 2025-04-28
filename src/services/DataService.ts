import { AboutMeData } from "@/types/aboutme";
import { LinkData } from "@/types/links";
import { ProjectData } from "@/types/projects";

export default class DataService {
  async getAboutMeData(): Promise<AboutMeData> {
    let data = await fetch('data/AboutMeData.json').then((data) => data.json());
    return data;
  }

  async getLinksData(): Promise<LinkData[]> {
    let data = await fetch('data/LinksData.json').then((data) => data.json());
    return data;
  }

  async getProjectsData(): Promise<ProjectData[]> {
    let data = await fetch('data/ProjectsData.json').then((data) => data.json());
    return data;
  }
}
