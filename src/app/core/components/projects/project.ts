export interface Project {
  id: number;
  name: string;
  description: string;
  type: string;
  linkGithub: string;
  linkWeb?: string;
  images: string[];
  tecnologies: string[];
}