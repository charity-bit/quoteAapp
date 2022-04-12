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
     new Quote("It's not the years in your life that count.It's the life in your years","Abraham Lincoln","Charity"),
     new Quote("If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough","Oprah Winfrey","Anna"),
     new Quote("When one door closes, another opens, but we often look so long at the closed door that we do not see the one that has been opened for us","Hellen Keller","John"),
     
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

  downVote(index:number){
    this.quotes[index].downVote +=1;
  }

  onShowDetails(quote:Quote){
    quote.showDetails = !quote.showDetails;
  }
}
