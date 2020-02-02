import { Component, OnInit, Input, OnChanges} from '@angular/core'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ProjectService } from '../../services/project.service'
import { Bug } from '../../models/bug.model'
import { Project } from '../../models/project.model'

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  private priorities: string[];
  private states: string[];
  bugs: Bug[];
  @Input() project: Project;
  bugToEdit: Bug;
  editBugState: Boolean = false;

  constructor(private projectService: ProjectService) {
    this.priorities = ['Minor','Non-Critical','Impaired Functionality','Catastrophic'];
    this.states = ['Active','Test','Verified','Closed','Opened'];
  }

  ngOnInit() {
    this.projectService.getBugs(this.project.id).subscribe(bugs => {
      this.bugs = bugs;
    });
  }

  deleteBug(bid: string){
    this.projectService.deleteBug(this.project.id, bid);
  }

  editBug(bug: Bug){
    this.bugToEdit = bug;
    this.editBugState = true;
  }

  clearState(){
    this.bugToEdit = null;
    this.editBugState = false;
  }

  updateBug(project: Project, bug: Bug){
    this.projectService.updateBug(project, bug);
    this.clearState();
  }
}
