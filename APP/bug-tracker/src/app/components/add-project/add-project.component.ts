import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { User } from '../../models/user.model';
import { ViewChild, AfterViewInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

function serialize<T>(object: T) {
  return JSON.parse(JSON.stringify(object));
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit, AfterViewInit {

  @ViewChild(UsersComponent, { static: false }) user;
  private project: Project;
  selected: string;

  constructor(private projectService: ProjectService) {
    this.project = this.clearProject();
  }

  ngOnInit() {
  }

  validProject() {
    return this.project.name != '' && this.project.description != ''
  }

  addProject() {
    this.projectService.add(this.project);
    this.clearProject()
  }

  onSubmit() {
    if (this.validProject()) this.addProject();
  }

  ngAfterViewInit() {
    this.selected = this.user.selected
  }

  selectUser() {
    this.ngAfterViewInit();
    this.project.collaborators.push(this.selected);
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

}
