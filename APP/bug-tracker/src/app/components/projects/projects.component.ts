import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service'
import { Project } from '../../models/project.model'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projects: Project[];
  private editState: boolean = false;
  private projectToEdit: Project;

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe( projects => {
      this.projects = projects;
    });
  }

  deleteProject(event, project: Project) {
    this.clearState();
    this.projectService.deleteProject(project);
  }

  editProject(event, project: Project) {
    this.editState = true;
    this.projectToEdit = project;
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.projectToEdit = null;
  }

  collaboratorsAsList(project: Project){
    var u:User;
    u = project.collaborators[0];
    return u.email
  }

  prettyDate(timestamp){
    return timestamp.toDate().toString().substring(0,24);
  }
}
