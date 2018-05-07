import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from './quotes.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  selectedSchool: string = '';
  private _quotesVanTeacherBlokken = new Array<Quotes>();
  
  @Input() public _quotesVanTeacher : Quotes; 

  selectChangeHandler (event:any){
    this.selectedSchool = event.target.value;
  }
  
  constructor() {
    this._quotesVanTeacher = new Quotes("Verhak");
    this._quotesVanTeacher.addQuote("Testtest");
  }

  newQuotesBlockAdded(quotes){
    this._quotesVanTeacherBlokken.push(quotes);
  }

  ngOnInit() {
  }

}
