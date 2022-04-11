import { Injectable } from "@angular/core";
import { Project } from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  findAll(): Project[] {
    return projects;
  }

}

const projects: Project[] = [
  {
    id: 1,
    name: 'Alfa 11 - Web Page',
    description: '',
    type: 'Front-end',
    linkGithub: '',
    images: ['https://raw.githubusercontent.com/EricEOL/alfa11-assessoria/main/readme_images/home.png'],
    tecnologies: ['Javascript, CSS']
  }, 
  {
    id: 2,
    name: 'Alfa 11 - API',
    description: '',
    type: 'Back-end',
    linkGithub: '',
    images: ['/assets/portifolio/api.png'],
    tecnologies: ['Java, Spring Boot']
  },
  {
    id: 3,
    name: 'Admex - Web Page',
    description: '',
    type: 'Front-end',
    linkGithub: '',
    images: ['https://raw.githubusercontent.com/EricEOL/administrex/main/public/screenshots/process_de.jpg'],
    tecnologies: ['ReactJS, NextJS, Styled Components']
  },
  {
    id: 4,
    name: 'Admex - API',
    description: '',
    type: 'Back-end',
    linkGithub: '',
    images: ['/assets/portifolio/api.png'],
    tecnologies: ['NodeJS, Express, MongoDB']
  },
  {
    id: 5,
    name: 'Kadu Acessórios - Web Page',
    description: '',
    type: 'Front-end',
    linkGithub: '',
    images: ['https://raw.githubusercontent.com/EricEOL/kadu_acessorios/main/readme_images/desktop_10.jpg'],
    tecnologies: ['ReactJS, NextJS, Chakra UI']
  },
  {
    id: 6,
    name: 'SISCOE - API',
    description: '',
    type: 'Back-end',
    linkGithub: '',
    images: ['/assets/portifolio/api.png'],
    tecnologies: ['Java, Spring Boot']
  },
  {
    id: 7,
    name: 'Lopes Notes - Web Page',
    description: '',
    type: 'Front-end',
    linkGithub: '',
    images: ['https://raw.githubusercontent.com/EricEOL/lopesnotes/main/readmeimages/p1-de.png'],
    tecnologies: ['ReactJS, NextJS, Prismic CMS, CSS']
  },
  {
    id: 8,
    name: 'Previsão de Serviços - Web Page',
    description: '',
    type: 'Front-end',
    linkGithub: '',
    images: ['https://raw.githubusercontent.com/EricEOL/calc_service/main/readme/p1.png'],
    tecnologies: ['ReactJS, NextJS, CSS']
  },
]