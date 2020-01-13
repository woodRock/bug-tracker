import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service'
import { Project } from '../../models/project'
import { User } from  '../../models/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  users: User[];

  constructor(private projectService : ProjectService, private userService : UserService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe( projects => {
      this.projects = projects;
    });
    this.userService.getUsers().subscribe( users => {
      this.users = users;
    });
  }

  prettyDate(timestamp){
    return timestamp.toDate().toString().substring(0,24);
  }
}
