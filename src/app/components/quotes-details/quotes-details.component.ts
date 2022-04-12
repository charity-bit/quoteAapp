import { Component, OnInit,Output,EventEmitter, Input, } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Quote} from "../../Quote";

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit{
  @Input() quote:Quote;
  @Output() onDelete:EventEmitter<boolean> = new EventEmitter<boolean>();
  deleteIcon = faTrash;
  constructor() { }
  ngOnInit(): void {
  }
  deleteQuote(toDelete:boolean){
    this.onDelete.emit(toDelete);
  }


}
