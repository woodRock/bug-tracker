import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './component/projects/projects.component';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path : 'projects', component : ProjectsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
