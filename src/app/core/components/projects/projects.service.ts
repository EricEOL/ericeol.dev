import { Injectable } from "@angular/core";
import { Project } from "./Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  findAll() {
    return projects;
  }

}

const projects: Project[] = [
  {
    id: 1,
    name: 'Alfa 11 - Assessoria',
    type: 'Front-end',
    images: ['https://github.com/EricEOL/alfa11-assessoria/blob/main/readme_images/home.png']
  }
]