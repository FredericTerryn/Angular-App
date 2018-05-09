import { Injectable } from '@angular/core';
import { Quotes} from '../../../components/quotes/quotes.model'

@Injectable()
export class QuotesBlockDataService {
  private _quotesS = new Array<Quotes>();

  constructor(){
    //let quotes1 = new Quotes("Verhak");
   // this._quotesS.push(quotes1);
  }

  get quotesS() : Quotes[] {
    return this._quotesS
  }

  addNewLeerkrachtQuotes(quotes){
    this._quotesS.push(quotes);
  }

}
