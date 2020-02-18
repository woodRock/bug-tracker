import { Component, OnInit } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ProjectService } from '../../services/project.service'
import { Project } from '../../models/project.model'
import { User } from '../../models/user.model'
import { Bug } from '../../models/bug.model'
import { AddBugComponent } from '../add-bug/add-bug.component'
import { SearchFilterPipe } from '../../util/search-filter-pipe'
import { SortGridPipe } from '../../util/sort-grid-pipe'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projects: Project[];
  private searchValue: String;

  constructor(
    private service: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.list().subscribe(projects => {
      this.projects = projects;
    });
  }

  trim(s: string) {
    return s.substring(0, s.length - 2);
  }

  formatCollaborators(project: Project) {
    var str = '';
    for (let c of project.collaborators) {
      str += c + ', ';
    }
    return this.trim(str);
  }

  clearSearch() {
    this.searchValue = '';
    console.log("Clear");
  }

  prettyDate(timestamp) {
    // return timestamp.toDate().toString().substring(0,24);
  }

  goToProject(project: Project) {
    let projectId = project ? project.id : null;
    this.router.navigate(['/projects', project.id ]);
  }

  goToAddProject(){
    this.router.navigate(['projects/add-project']);
  }
}
