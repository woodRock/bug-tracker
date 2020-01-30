import { Component, OnInit, Input, OnChanges} from '@angular/core'
import { ProjectService } from '../../services/project.service'
import { Bug } from '../../models/bug.model'
import { Project } from '../../models/project.model'

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs: Bug[];
  @Input() project: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getBugs(this.project.id).subscribe(bugs => {
      this.bugs = bugs;
    });
  }

  deleteBug(bid: string){
    this.projectService.deleteBug(this.project.id, bid);
  }
}
