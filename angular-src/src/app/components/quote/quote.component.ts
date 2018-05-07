import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() public inhoud: string;

  constructor() { 
    this.inhoud = "dit is een voorbeeld";
  }

  ngOnInit() {
  }

}
