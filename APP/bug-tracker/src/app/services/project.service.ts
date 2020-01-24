import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { CrudService } from './crud.service'
import { Project } from '../models/project.model'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})

export class ProjectService extends CrudService<Project> {

  constructor(_afs: AngularFirestore) {
    super(_afs, 'projects');
  }

  addCollaborator(id: string, user: User){
    this.afs.collection('projects').doc(id).collection('/collaborators').add(user)
  };
}
