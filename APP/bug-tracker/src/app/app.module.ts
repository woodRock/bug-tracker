import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports for the firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SuperSecretComponent } from './super-secret/super-secret.component';

// Config for the Firebase Integration
const config = {
    apiKey: "AIzaSyDQu481QfBjdgfsv7IHXlWXMybHy8NxY78",
    authDomain: "bug-tracker-59d88.firebaseapp.com",
    databaseURL: "https://bug-tracker-59d88.firebaseio.com",
    projectId: "bug-tracker-59d88",
    storageBucket: "bug-tracker-59d88.appspot.com",
    messagingSenderId: "1009660913153"
  };

@NgModule({
  declarations: [
    AppComponent,
    SuperSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Initialize the Firebase Modules
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
