import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selected: User;
  collaborators: String;

  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( users => {
      this.users = users
    })
  }

}
