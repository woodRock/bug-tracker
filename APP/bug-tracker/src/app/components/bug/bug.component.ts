import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Bug} from '../../models/bug.model';
import {Project} from '../../models/project.model';
import {ProjectService} from '../../services/project.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {
  private pid: string;
  private bid: string;
  private _bug: Bug;
  private _project: Project;
  private editState = false;
  private priorities: string[];
  private states: string[];

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
    this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
    this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
  }

  get bug(): Bug {
    return this._bug;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('pid'))).subscribe(id => {
        this.pid = this.pid == null ? id : this.pid + id;
      });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('bid'))).subscribe(id => {
        this.bid = this.bid == null ? id : this.bid + id;
      });
    this.service.getBug(this.pid, this.bid).subscribe(bug => {
      this._bug = bug;
    });
    this.service.get(this.pid).subscribe(project => {
      this._project = project;
    });
  }

  goBackToProject() {
    if (this.pid != null) {
      this.router.navigate([{ outlets: { secondary: null } }])
        .then(() => this.router.navigate(['/projects/' + this.pid]));
    }
  }

  confirmDelete(): boolean {
    return confirm('Delete the bug: \"' + this._bug.name + '\"?');
  }

  delete() {
    if (!this.confirmDelete()) {
      return;
    }
    this.service.deleteBug(this.pid, this.bid);
    this.goToProject();
  }

  toggleEditState() {
    this.editState = !this.editState;
  }

  update() {
    this._bug.id = this.bid;
    this.service.updateBug(this.pid, this._bug);
    this.toggleEditState();
  }

  time() {
    return this._bug.time;
  }

  goToProject() {
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects/' + this.pid]));
  }
}
