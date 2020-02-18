import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Bug } from '../../models/bug.model'
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {

  private bugs: Bug[];
  private pid: string;
  private bid: string;
  private bug: Bug;
  private editState: Boolean = false;
  private priorities: string[];
  private states: string[];

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
    this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('pid')))
      .subscribe(id => {
        this.pid = this.pid == null ? id : this.pid + id
      });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('bid')))
      .subscribe(id => {
        this.bid = this.bid == null ? id : this.bid + id
      });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getBug(params.get('pid'), params.get('bid'))))
      .subscribe(bug => {
        this.bug = bug as Bug
      });
  }

  goBackToProject() {
    if (this.pid != null) {
      this.router.navigate([{ outlets: { secondary: null } }])
        .then(() => this.router.navigate(['/projects/' + this.pid]));
    }
  }

  delete() {
    this.service.deleteBug(this.pid, this.bid);
    this.goToProject();
  }

  edit() {
    this.editState = true;
  }

  clearState() {
    this.editState = false;
  }

  update() {
    console.log(this.bug.id);
    this.service.updateBug(this.pid, this.bug);
  }

  goToProject(){
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects/' + this.pid]));
  }
}
