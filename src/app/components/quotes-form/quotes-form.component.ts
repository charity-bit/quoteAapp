import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quote } from '../../Quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  

  newQuote: Quote;
  @Output() onPostQuote = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit(): void {}

  postQuote(a: string, b: string, c: string) {
    this.newQuote = new Quote(c, b, a,new Date());
    console.log(this.newQuote);
    this.onPostQuote.emit(this.newQuote);
  }
}
