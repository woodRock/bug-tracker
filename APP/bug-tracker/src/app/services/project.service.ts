import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { take, map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore'
import { CrudService } from './crud.service'
import { Project } from '../models/project.model'
import { User } from '../models/user.model'
import { Bug } from '../models/bug.model'

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

  addBug(pid: string, {id, name, description, priority, state, contributor}: Bug){
    this.afs.collection('projects/' + pid + '/bugs').add({
      'bug' : {id, name, description, priority, state, contributor}
    });
  }

  getBugs(pid: string): Observable<Bug[]> {
    return this.afs.collection('projects/' + pid + '/bugs').snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Bug;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    )
  }
}
