import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user.model';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends CrudService<User> {

  constructor(afs: AngularFirestore) {
    super(afs, 'users');
  }

}
