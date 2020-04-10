import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private _projects: Project[];
  private sortByNewest = false;
  private subscription;

  constructor(private service: ProjectService, private router: Router, private route: ActivatedRoute) { }

  get projects(): Project[] {
    return this._projects;
  }

  ngOnInit() {
    this.subscription = this.service.list().subscribe(projects => {
      this._projects = projects;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleTimeSort() {
    this.sortByNewest = !this.sortByNewest;
  }

  goToProject(project: Project) {
    const projectId = project ? project.id : null;
    this.router.navigate(['/projects', projectId ]);
  }

  goToAddProject() {
    this.router.navigate(['projects/add-project']);
  }

  goToSignIn() {
    this.router.navigate(['/sign-in']);
  }
}
