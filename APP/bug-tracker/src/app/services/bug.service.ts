import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Bug } from '../models/bug.model'
import { CrudService } from './crud.service'

@Injectable({
  providedIn: 'root'
})
export class BugService extends CrudService<Bug> {

  constructor(_afs: AngularFirestore){
    super(_afs, 'bugs');
  }
}
