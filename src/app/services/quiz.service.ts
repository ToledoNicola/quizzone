import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor( private db: AngularFirestore) { }

  
  getListaQuiz() {
    return this.db.collection('quiz').valueChanges();
  }
  
}
