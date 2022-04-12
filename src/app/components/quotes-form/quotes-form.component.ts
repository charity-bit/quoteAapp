import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from "../../Quote";

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  
   
  newQuote:Quote;
  name:string;
  author:string;
  quote:string;

   
  @Output() onPostQuote = new EventEmitter<Quote>();
 
 


  constructor() { }

  ngOnInit(): void {
  }

  postQuote(){
    this.newQuote = new Quote(this.quote,this.name,this.author,new Date());
    this.onPostQuote.emit(this.newQuote);
    console.log(this.newQuote)
  

  }



}
