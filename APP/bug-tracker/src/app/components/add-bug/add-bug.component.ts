import { Component, OnInit, Input} from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { Project } from '../../models/project.model'
import { Bug } from '../../models/bug.model'
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.css']
})
export class AddBugComponent implements OnInit {

  @Input() project: Project;
  private priorities: string[];
  private states: string[];
  private bug: Bug;

  constructor(private projectService: ProjectService) {
    this.priorities = ['Minor','Non-Critical','Impaired Functionality','Catastrophic'];
    this.states = ['Active','Test','Verified','Closed','Opened'];
    this.bug = this.newBug();
  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.validBug())
      this.addBug();
    else
      console.log("Invalid!");
  }

  addBug(){
    this.projectService.addBug(this.project.id, this.bug);
    this.bug = this.newBug();
  }

  validBug(): boolean {
    return true;
  }

  empty(str): boolean {
    return str == '';
  }

  newBug(): Bug {
    return {
      id: '',
      name: '',
      description: '',
      priority: '',
      state: '',
      contributor: ''
    }
  }
}
