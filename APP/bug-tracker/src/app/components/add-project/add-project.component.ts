import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service'
import { Project } from '../../models/project.model'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  private project: Project;

  constructor(private projectService: ProjectService) {
    this.project = this.clearProject()
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.validProject()) this.addProject();
  }

  addProject() {
    this.projectService.addProject(this.project);
    this.clearProject()
  }

  clearProject() : Project {
    return {
      name: '',
      description: '',
      collaborators: [],
      private: false,
      time: new Date()
    }
  }

  validProject(){
    return this.project.name != '' && this.project.description != ''
  }

}
