import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { User } from '../models/user.model'
import { CrudService } from './crud.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private crudService: CrudService<User>;

  constructor(private afs: AngularFirestore){
    this.crudService = new CrudService<User>(afs, 'users');
  }

  addUser(user: User){
    this.crudService.add(user);
  }

  getUsers(){
    return this.crudService.list();
  }

  deleteUser(user: User){
    this.crudService.delete(user.id);
  }

  updateUser(user: User){
    this.crudService.update(user);
  }
}
