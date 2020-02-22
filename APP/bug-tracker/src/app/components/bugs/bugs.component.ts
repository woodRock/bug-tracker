import { Component, OnInit } from '@angular/core'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ProjectService } from '../../services/project.service'
import { Bug } from '../../models/bug.model'
import { Project } from '../../models/project.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { TimeAgoPipe } from 'time-ago-pipe'
import { SortGridPipe } from '../../util/sort-grid-pipe'
import { GroupByPipe } from '../../util/group-by-pipe'

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  private priorities: string[];
  private states: string[];
  private bugs: Bug[];
  private project: Project;
  private pid: string;
  private editState: boolean = false;
  private searchValue: string;

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
      switchMap((params: ParamMap) =>
        this.service.getBugs(params.get('pid'))))
      .subscribe(bugs => {
        this.bugs = bugs as Bug[]
      });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.get(params.get('pid'))))
      .subscribe(p => {
        this.project = p as Project
      });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('pid')))
      .subscribe(pid => {
        this.pid = this.pid == null ? pid : this.pid + pid;
      });
  }

  edit(){
    this.editState = true;
  }

  clearState(){
    this.editState = false;
  }

  update(){
    this.project.id = this.pid;
    this.service.update(this.project);
    this.clearState();
  }

  delete(){
    this.service.delete(this.pid);
    this.clearState();
    this.goToProjects();
  }

  goToProjects() {
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects']));
  }

  goToBug(bug: Bug) {
    let bugId = bug ? bug.id : null;
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects/' + this.pid + '/' + bugId]));
  }

  goToAddBug(){
    this.router.navigate(['projects/' + this.pid + '/' + 'add-bug'])
  }
}
