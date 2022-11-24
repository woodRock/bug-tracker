import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './services/auth.guard';
import {ProjectsComponent} from './components/projects/projects.component';
import {AddProjectComponent} from './components/add-project/add-project.component';
import {LoginComponent} from './components/login/login.component';
import {BugsComponent} from './components/bugs/bugs.component';
import {AddBugComponent} from './components/add-bug/add-bug.component';
import {BugComponent} from './components/bug/bug.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-in/register', component: AddUserComponent },
  { path: 'sign-in/forgot-password', component: ForgotPasswordComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'projects/add-project', component: AddProjectComponent, canActivate: [AuthGuard]},
  { path: 'projects/:pid/add-bug', component: AddBugComponent, canActivate: [AuthGuard] },
  { path: 'projects/:pid', component: BugsComponent, canActivate: [AuthGuard]},
  { path: 'projects/:pid/:bid', component: BugComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/sign-in', pathMatch: 'full'},
  { path: '**', redirectTo: '/sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
