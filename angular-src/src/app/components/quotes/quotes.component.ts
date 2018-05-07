import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  selectedSchool: string = '';
  quotes: string[];
  dateAdded: Date; 

  selectChangeHandler (event:any){
    this.selectedSchool = event.target.value;
  }
  
  constructor() {
    this.quotes=[
      'Ga maar visselkes gaan vangen',
      'Mag ik mijn rekenmachine meenemen? Nee uw Grootmoeder'
    ];
    this.dateAdded = new Date();
   }

  ngOnInit() {
  }

}
