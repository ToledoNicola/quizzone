import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {
  @Input() quiz: any;
  @Output() esito: EventEmitter<boolean> = new EventEmitter<boolean>();

  completata:boolean = false

  rispostaDomanda: any;
  constructor() {}

  ngOnInit() {}

  controlloRisposta() {
    console.log("risposta value", this.rispostaDomanda);
    if(!this.rispostaDomanda){
      console.log('non ha selezionato nessuna risposta')
      return
    }
    if(this.rispostaDomanda == this.quiz.soluzione){
      this.completata = true
      this.esito.emit(true)
    }else{
      this.esito.emit(false)
    }
  }
}
