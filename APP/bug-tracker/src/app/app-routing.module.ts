import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './services/auth.guard'
import { AppComponent } from './app.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { AddProjectComponent } from './components/add-project/add-project.component'
import { LoginComponent } from './components/login/login.component'
import { BugsComponent } from './components/bugs/bugs.component'
import { AddBugComponent } from './components/add-bug/add-bug.component'

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'bugs', component: BugsComponent },
  { path: 'add-bug', component: AddBugComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
