import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsCollection: AngularFirestoreCollection<Project>;
  private projects: Observable<Project[]>;
  private projectDoc: AngularFirestoreDocument<Project>;

  constructor(public afs: AngularFirestore) {
    this.projectsCollection = this.afs.collection<Project>(
      'projects',
      ref => ref.orderBy('name','asc')
    );
    this.projects = this.projectsCollection.snapshotChanges().pipe(
      map(actions => actions.map ( a => {
        const data = a.payload.doc.data() as Project;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  getProjects(){
    return this.projects;
  }

  addProject(project: Project){
    this.projectsCollection.add(project);
  }

  deleteProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.delete();
  }

  updateProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.update(project);
  }
}
