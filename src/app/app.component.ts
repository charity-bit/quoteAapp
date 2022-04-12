import { Component } from '@angular/core';
import { mainQuote } from './mainQuote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  mainQuotes: mainQuote[] =[

    new mainQuote("The Purpose of our lives is to be happy","Dalai Lama"),
    new mainQuote("Collaboration, creativity, and respect build life long connections that matter and make a difference, propelling us to work together across all boundaries","Diane Luna"),
    new mainQuote("When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw","Nelson Mandela")

  ]
  random:number;

  constructor(){}
  //  changeRandom(arr:mainQuote[],x:number){
  //   x = Math.floor(Math.random()* arr.length) 
    
  // }



  quote:mainQuote = this.mainQuotes[2];
}



