import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes/quotes.model';

import {ValidateService} from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService} from '../../services/src/app/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  inhoud: string;
  leerkracht: string;
  school: string;

  @Output() public newQoutesVanLeerkrachtblock = new EventEmitter<Quotes>();


  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  addLeerkrachtQuotes(inhoud : HTMLInputElement, leerkracht: HTMLInputElement ) : boolean {
    //const quotes = new Quotes(inhoud.value, leerkracht.value );
    //this.newQoutesVanLeerkrachtblock.emit(quotes);
    return false;
  }

  onAddQuoteSubmit(){
    const uitspraak = {
      inhoud: this.inhoud, 
      leerkracht: this.leerkracht,
      school: this.school
    }

    //zorg dat alle velden ingevuld zijn
    if(!this.validateService.validateQuote(uitspraak)){
      this.flashMessage.show('Gelieve alle velden in te vullen.', {cssClass: 'alert-danger', timeOut: 3000});
    }

    //quote naar de backend sturen
    this.authService.addquote(uitspraak).subscribe(data =>{
      if (data.succes){
        this.flashMessage.show('Bedankt voor het toevoegen van de quote!', {
          cssClass:'alert-success', timeOut: 3000});
        this.router.navigate(['/quotes']);
      } else {
        this.flashMessage.show('Oeps. Er ging iets verkeerd....', {cssClas: 'alert-danger',
      timeOUt:3000});
      this.router.navigate(['/newuitspraak'])
      }
    });
  }

}
