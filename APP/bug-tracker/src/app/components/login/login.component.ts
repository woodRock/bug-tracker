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

  constructor(private service: AuthService, private router: Router) { }

  signIn(): void {
    if (!this.invalid())
      this.service.emailSignIn(this.username, this.password);
  }

  goToRegister() {
    this.router.navigate(['sign-in/register']);
  }

  clear() {
    this.username = '';
    this.password = '';
  }

  invalid() {
    return this.username == '' || this.password == '';
  }

  goToProjects() {
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/projects']);
    });
  }

  goToForgotPassword() {
    this.router.navigate(['/sign-in/forgot-password']);
  }

  ngOnInit() {
  }
}
