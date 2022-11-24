import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  uid = '';
  photoURL = '';

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afa.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.afa.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.photoURL = user.photoURL;
      }
    });
  }

  async register(username, email, password) {
    const credential = await this.afa.auth.createUserWithEmailAndPassword(email, password);
    this.updateUserData(credential.user);
  }

  async emailSignIn(email, password) {
    let credential;
    await this.afa.auth.signInWithEmailAndPassword(email, password).then(result => {
      credential = result;
    }).catch(error => {
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);
    });
    return this.updateUserData(credential.user);
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afa.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };
    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afa.auth.signOut().then(() => {
    }).catch(error => {
      console.log(error);
    });
    this.uid = '';
    this.photoURL = '';
    return this.router.navigate(['/sign-in']);
  }

  async isLoggedIn() {
    return this.afa.auth.currentUser != null;
  }

  sendPasswordResetEmail(email) {
    this.afa.auth.sendPasswordResetEmail(email).then(result => {

    }).catch(error => {
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);
    });
  }
}
