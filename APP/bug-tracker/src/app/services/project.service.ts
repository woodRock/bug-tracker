import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;

  constructor(public afs: AngularFirestore) {
    this.projects = this.afs.collection('projects').valueChanges();
  }

  getProjects(){
    return this.projects;
  }
}
