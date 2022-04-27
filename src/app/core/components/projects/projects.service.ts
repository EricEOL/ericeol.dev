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
    name: 'Alfa 11',
    description: 'Web page desenvolvida com Javascript Vanilla para uma empresa de treinamento sobre investimentos em bolsa de valores',
    type: 'Front-end',
    linkGithub: 'https://github.com/EricEOL/alfa11-assessoria',
    images: ['https://raw.githubusercontent.com/EricEOL/alfa11-assessoria/main/readme_images/home.png'],
    tecnologies: ['Javascript', 'CSS']
  },
  {
    id: 2,
    name: 'Suambank',
    description: 'API criada com Spring Boot que simula operações financeiras de uma conta báncaria como depósito, saque, transferência e empréstimos.',
    type: 'Back-end',
    linkGithub: 'https://github.com/EricEOL/suambank',
    images: ['/assets/portifolio/api.png'],
    tecnologies: ['Java', 'Spring Boot']
  }, 
  {
    id: 3,
    name: 'Admex',
    description: 'Aplicação completa, desenvolvida no Front-end e Back-end que gerencia as requisições de novas compras de uma unidade do Exército.',
    type: 'Front-end & Back-end',
    linkGithub: 'https://github.com/EricEOL/administrex',
    images: ['https://raw.githubusercontent.com/EricEOL/administrex/main/public/screenshots/process_de.jpg'],
    tecnologies: ['ReactJS', 'NextJS', 'Styled Components', 'NodeJS', 'Express', 'MongoDB']
  },
  {
    id: 5,
    name: 'Kadu Acessórios',
    description: 'Web page desenvolvida com ReactJS para divulgação e compartilhamento uma empresa de mecânica de automóveis',
    type: 'Front-end',
    linkGithub: '',
    images: ['https://raw.githubusercontent.com/EricEOL/kadu_acessorios/main/readme_images/desktop_10.jpg'],
    tecnologies: ['ReactJS', 'NextJS', 'Chakra UI']
  },
  {
    id: 7,
    name: 'Lopes Notes',
    description: 'Plataforma que eu posto meus artigos sobre conhecimentos que desejo compartilhar com a comunidade dev.',
    type: 'Front-end',
    linkGithub: 'https://github.com/EricEOL/lopesnotes',
    images: ['https://raw.githubusercontent.com/EricEOL/lopesnotes/main/readmeimages/p1-de.png'],
    tecnologies: ['ReactJS', 'NextJS', 'Prismic CMS', 'CSS']
  },
  {
    id: 8,
    name: 'Previsão de Serviços',
    description: 'Essa aplicação realiza cálculos para previsão dos próximos 5 dias de serviço de um militar ou pessoa que trabalha em escalas.',
    type: 'Front-end',
    linkGithub: 'https://github.com/EricEOL/calc_service',
    images: ['https://raw.githubusercontent.com/EricEOL/calc_service/main/readme/p1.png'],
    tecnologies: ['ReactJS', 'NextJS', 'CSS']
  },
]