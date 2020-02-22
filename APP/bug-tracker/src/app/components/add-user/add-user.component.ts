import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private user: User;
  constructor(
    private service: AuthService,
    private router: Router
  ) {
    this.user = {
      displayName: '',
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  submit() {
    this.register();
  }

  valid() {
    return this.user.email != '' && this.user.password != '';
  }

  register() {
    if (this.valid())
      this.service.register(this.user.displayName, this.user.email, this.user.password);
  }

  goToLogin() {
    this.router.navigate(['sign-in']);
  }

}
