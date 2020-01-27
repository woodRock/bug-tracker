import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { LoginComponent } from './components/login/login.component'
import { UsersComponent } from './components/users/users.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ProjectService } from './services/project.service'
import { AuthService } from './services/auth.service'
import { AddProjectComponent } from './components/add-project/add-project.component'
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatInputModule, MatTableModule, MatToolbarModule,
  MatMenuModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material'
import { environment } from './../environments/environment';
import { BugsComponent } from './components/bugs/bugs.component';
import { AddBugComponent } from './components/add-bug/add-bug.component'


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    UsersComponent,
    NavbarComponent,
    AddProjectComponent,
    BugsComponent,
    AddBugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
