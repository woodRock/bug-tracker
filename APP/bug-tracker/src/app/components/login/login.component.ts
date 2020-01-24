import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import {Router} from '@angular/router'
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public auth: AuthService, private router: Router) { }

  signIn(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["projects"]);
    } else {
      alert("Invalid credentials");
    }
  }

  ngOnInit() {
  }
}
