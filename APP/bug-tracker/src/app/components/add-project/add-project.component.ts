import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { User } from '../../models/user.model';
import { ViewChild, AfterViewInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit, AfterViewInit {

  @ViewChild(UsersComponent, { static: true }) user;

  private project: Project;
  selected: User;

  constructor(private projectService: ProjectService) {
    this.project = this.clearProject();
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

  clearProject(): Project {
    return {
      id: '',
      name: '',
      description: '',
      collaborators: [],
      private: false,
      time: new Date()
    }
  }

  selectUser() {
    this.ngAfterViewInit();
    this.project.collaborators = [this.selected];
  }

  validProject() {
    return this.project.name != '' && this.project.description != ''
  }

  ngAfterViewInit() {
    this.selected = this.user.selected
  }

}
