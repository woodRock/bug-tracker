import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Bug} from '../../models/bug.model';
import {Project} from '../../models/project.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  private priorities: string[];
  private states: string[];
  private _bugs: Bug[];
  private _project: Project;
  private pid: string;
  private editState = false;
  private searchValue: string;
  private sortByNewest = false;

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
    this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
  }

  get bugs(): Project[] {
    return this._bugs;
  }

  get project(): Project {
    return this._project;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getBugs(params.get('pid')))).subscribe(bugs => {
          this._bugs = bugs as Bug[];
        });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('pid'))).subscribe(pid => {
        this.pid = this.pid == null ? pid : this.pid + pid;
      });
    this.service.get(this.pid).subscribe(
      project => {
        this._project = project;
      }
    );
  }

  update() {
    this._project.id = this.pid;
    this.service.update(this._project);
    this.toggleEditState();
  }

  confirmDelete(): boolean {
    return confirm('Delete Project: \"' + this._project.name + '"?');
  }

  delete() {
    if (!this.confirmDelete()) {
      return;
    }
    this.service.delete(this.pid);
    this.toggleEditState();
    this.goToProjects();
  }

  toggleEditState() {
    this.editState = !this.editState;
  }

  toggleTimeSort() {
    this.sortByNewest = !this.sortByNewest;
  }

  goToProjects() {
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects']));
  }

  goToBug(bug: Bug) {
    const bugId = bug ? bug.id : null;
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects/' + this.pid + '/' + bugId]));
  }

  goToAddBug() {
    this.router.navigate(['projects/' + this.pid + '/' + 'add-bug']);
  }
}
