import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { take, map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore'
import { CrudService } from './crud.service'
import { AuthService } from './auth.service'
import { Project } from '../models/project.model'
import { User } from '../models/user.model'
import { Bug } from '../models/bug.model'

function serialize<T>(object: T) {
  return JSON.parse(JSON.stringify(object));
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService extends CrudService<Project> {

  private collectionName: string;

  constructor(
    private _afs: AngularFirestore,
    private service: AuthService
  ) {
    super(_afs, 'users');
    this.collectionName = 'users/' + this.service.uid + '/projects';
    this.collection = this.afs.collection(this.collectionName);
  }

  refresh(){
    this.collectionName = 'users/' + this.service.uid + '/projects';
  }

  addCollaborator(id: string, user: User) {
    this.collection.doc(id).collection('/collaborators').add(user)
  };

  addBug(pid: string, bug: Bug) {
    this.afs.collection(this.collectionName + '/' + pid + '/bugs').add(serialize(bug));
  }

  deleteBug(pid: string, bid: string) {
    return new Promise<void>((resolve, reject) => {
      this.afs.collection(this.collectionName + '/' + pid + '/bugs')
        .doc<Bug>(bid)
        .delete()
        .then(() => {
          resolve();
        });
    });
  }

  getBugs(pid: string): Observable<Bug[]> {
    return this.afs.collection(this.collectionName + '/' + pid + '/bugs').snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Bug;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    )
  }

  getBug(pid: string, bid: string){
    return this.afs.collection(this.collectionName + '/' + pid + '/bugs')
      .doc<Bug>(bid)
      .snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            const data = doc.payload.data() as Bug;
            const payloadId = doc.payload.id;
            return { id: payloadId, ...data };
          }
        })
      )
  }

  updateBug(pid: string, bug: Bug): Promise<Bug> {
    return new Promise<Bug>((resolve, reject) => {
      this.afs.collection(this.collectionName + '/' + pid + '/bugs')
        .doc<Bug>(bug.id as string)
        .set(serialize(bug))
        .then(() => {
          resolve({
            ...bug
          });
        });
    });
  }
}
