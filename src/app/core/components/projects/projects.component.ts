import { Component, OnInit } from "@angular/core";
import { Project } from "./project";
import { ProjectService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', 'projects-mobile.component.css']
})
export class ProjectsComponent implements OnInit{
  
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    console.log(projectService.findAll());
  }

  ngOnInit(): void {
    this.projects = this.projectService.findAll();
  }

}