import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";

@Component({
  selector: "app-lista-quiz",
  templateUrl: "./lista-quiz.component.html",
  styleUrls: ["./lista-quiz.component.scss"]
})
export class ListaQuizComponent implements OnInit {
  listaQuiz$: any;
  contatore:number = 0

  constructor(private quizSrv: QuizService) {}

  ngOnInit() {
    this.listaQuiz$ = this.quizSrv.getListaQuiz();
  }

  aggiornaContatore(esito){
    if(esito){
      this.contatore++
    }else{
      console.log('risposta errata')
    }
  }
}
