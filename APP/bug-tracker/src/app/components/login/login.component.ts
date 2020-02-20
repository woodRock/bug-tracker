import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(public auth: AuthService, private router: Router) { }

  signIn(): void {
    if (this.invalid())
      return;
    this.auth.emailSignIn(this.username, this.password);
    if (this.auth.isLoggedIn()){
      
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  clear(){
    this.username = '';
    this.password = '';
  }

  invalid(){
    return this.username == '' || this.password == '';
  }

  goToProjects(){
    this.router.navigate(['/projects']);
  }

  ngOnInit() {
  }
}
