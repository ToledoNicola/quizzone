import { Injectable } from '@angular/core';
import { auth } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AutService {

  user$:any
  constructor(private afauth:AngularFireAuth) { 
  }

  login(){
    return this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  logout(){
    return this.afauth.auth.signOut();
  }

}
