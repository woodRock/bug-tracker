import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './services/auth.guard'
import { AppComponent } from './app.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { AddProjectComponent } from './components/add-project/add-project.component'
import { LoginComponent } from './components/login/login.component'
import { BugsComponent } from './components/bugs/bugs.component'
import { AddBugComponent } from './components/add-bug/add-bug.component'
import { BugComponent } from './components/bug/bug.component'
import { AddUserComponent } from './components/add-user/add-user.component'

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'register', component: AddUserComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/add-project', component: AddProjectComponent },
  { path: 'projects/:pid/add-bug', component: AddBugComponent },
  { path: 'projects/:pid', component: BugsComponent },
  { path: 'projects/:pid/:bid', component: BugComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
