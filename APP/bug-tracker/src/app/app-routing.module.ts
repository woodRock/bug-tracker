import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : 'secret', component : SuperSecretComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
