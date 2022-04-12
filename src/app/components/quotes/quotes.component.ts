import { Component, OnInit } from '@angular/core';
import {faAngleDown,faAngleUp,faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { Quote } from '../../Quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

   faArrowUp =  faAngleUp;
   faArrowDown = faAngleDown;
   likes = faThumbsUp;
   dislikes = faThumbsDown;

   quotes:Quote[] = [
     new Quote("It's not the years in your life that count.It's the life in your years","Abraham Lincoln","Charity",new Date(2020,3,11)),
     new Quote("If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough","Oprah Winfrey","Anna",new Date(2022,5,09)),
     new Quote("When one door closes, another opens, but we often look so long at the closed door that we do not see the one that has been opened for us","Hellen Keller","John",new Date(2021,11,08)),
   
   ]

  
  constructor() { }

  ngOnInit(): void {
  }


  upVote(index:number){
    this.quotes[index].upVote +=1;
  }
  deleteQuote(toDelete:boolean,index:number){
    if(toDelete){
      let deleteItem = confirm('Are you sure you want to delete this Quote?');
      if(deleteItem){
        this.quotes.splice(index,1);
      }
    }
  }
  onAddQuote(quote:Quote){
      if(quote.name == "" || quote.author == "" || quote.quote == ""){
          if(quote.name == ""){
            alert("Please enter your name")
          }
          else if(quote.author){
            alert("Please enter the author of the quote")
          }
          else{
            alert("Please enter the quote")
          }
      }
      else{
        
        this.quotes.unshift(quote);
      }

  }

  downVote(index:number){
    this.quotes[index].downVote +=1;
  }

  onShowDetails(quote:Quote){
    quote.showDetails = !quote.showDetails;
  }
}
