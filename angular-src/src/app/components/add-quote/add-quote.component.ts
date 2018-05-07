import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes/quotes.model';


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() public newQoutesVanLeerkrachtblock = new EventEmitter<Quotes>();


  constructor() { }

  ngOnInit() {
  }

  addLeerkrachtQuotes(newLeerkrachtQuotes : HTMLInputElement) : boolean {
    const quotes = new Quotes(newLeerkrachtQuotes.value);
    this.newQoutesVanLeerkrachtblock.emit(quotes);
    return false;
  }

}
