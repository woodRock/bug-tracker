import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private email: string = '';
  private submitted: boolean = false;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  valid(){
    return this.email != '';
  }

  sendPasswordResetEmail(){
    if (this.valid()){
      this.submitted = true;
      this.service.sendPasswordResetEmail(this.email);
    }
  }

  goToSignIn(){
    this.router.navigate(['/sign-in']);
  }

}
