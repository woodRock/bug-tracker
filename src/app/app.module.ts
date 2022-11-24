import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {AddProjectComponent} from './components/add-project/add-project.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {TimeAgoPipe} from 'time-ago-pipe';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';
import {NavigationComponent} from './components/navbar/navigation.component';
import {ProjectService} from './services/project.service';
import {AuthService} from './services/auth.service';
import {BugsComponent} from './components/bugs/bugs.component';
import {AddBugComponent} from './components/add-bug/add-bug.component';
import {SearchFilterPipe} from './util/search-filter-pipe';
import {SortGridPipe} from './util/sort-grid-pipe';
import {GroupByPipe} from './util/group-by-pipe';
import {environment} from './../environments/environment';
import {BugComponent} from './components/bug/bug.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    UsersComponent,
    NavigationComponent,
    AddProjectComponent,
    BugsComponent,
    AddBugComponent,
    SearchFilterPipe,
    SortGridPipe,
    GroupByPipe,
    BugComponent,
    TimeAgoPipe,
    AddUserComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxSkeletonLoaderModule,
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
