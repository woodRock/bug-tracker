import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {Bug} from '../../models/bug.model';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.css']
})
export class AddBugComponent implements OnInit {
  private project: Project;
  private pid: string;
  private priorities: string[];
  private states: string[];
  private bug: Bug;

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
    this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
    this.bug = this.newBug();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('pid')))
      .subscribe(pid => {
        this.pid = this.pid == null ? pid : this.pid + pid;
      });
    this.service.get(this.pid).subscribe(
      project => {
        this.project = project;
      }
    );
  }

  onSubmit() {
    if (this.validBug()) {
      this.addBug();
    } else {
      console.log('Invalid!');
    }
    this.goToProject();
  }

  addBug() {
    this.bug.time = new Date();
    this.service.addBug(this.pid, this.bug);
    this.bug = this.newBug();
  }

  validBug(): boolean {
    return true;
  }

  empty(str): boolean {
    return str === '';
  }

  newBug(): Bug {
    return {
      id: '',
      name: '',
      description: '',
      priority: '',
      state: '',
      contributor: '',
      time: new Date()
    };
  }

  goToProject() {
    this.router.navigate([{ outlets: { secondary: null } }])
      .then(() => this.router.navigate(['/projects/' + this.pid]));
  }
}
