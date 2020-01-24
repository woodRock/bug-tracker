import { Injectable } from '@angular/core'
import { CrudService } from './crud.service'
import { Project } from '../models/project.model'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private crudService: CrudService<Project>;

  constructor(public afs: AngularFirestore) {
    this.crudService = new CrudService<Project>(afs, 'projects');
  }

  addProject(project: Project){
    return this.crudService.add(project);
  }

  getProjects(){
    return this.crudService.list();
  }

  deleteProject(project: Project) {
    this.crudService.delete(project.id);
  }

  updateProject(project: Project) {
    this.crudService.update(project)
  }
}
