import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  _id: String;
  _inhoud: String;
  
  constructor() { }

  ngOnInit() {
  }


}
