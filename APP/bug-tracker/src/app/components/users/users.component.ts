import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  private _users: User[];
  selected: string;

  constructor(private userService: UserService) {

  }

  get users(): User[] {
    return this._users;
  }

  ngOnInit() {
    this.userService.list().subscribe( users => {
      this._users = users;
    });
  }

}
