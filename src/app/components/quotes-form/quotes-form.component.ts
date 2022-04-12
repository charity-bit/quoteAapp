import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from "../../Quote";

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote("","","");
  @Output() onPostQuote = new EventEmitter<Quote>();


  constructor() { }

  ngOnInit(): void {
  }

  postQuote(){
    this.onPostQuote.emit(this.newQuote);

  }

}
