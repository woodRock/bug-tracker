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

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.list().subscribe(projects => {
      this.projects = projects;
    });
  }

  deleteProject(event, project: Project) {
    this.clearState();
    this.projectService.delete(project.id);
  }

  editProject(event, project: Project) {
    this.editState = true;
    this.projectToEdit = project;
  }

  updateProject(project: Project) {
    this.projectService.update(project);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.projectToEdit = null;
  }

  trim (s: string){
    return s.substring(0, s.length - 2);
  }

  formatCollaborators(project: Project) {
    var str = '';
    for (let c of project.collaborators) {
      str += c + ', ';
    }
    return this.trim(str);
  }

  prettyDate(timestamp) {
    // return timestamp.toDate().toString().substring(0,24);
  }
}
