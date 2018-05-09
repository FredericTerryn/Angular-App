import { Component, OnInit, Input } from '@angular/core';
import { AuthService} from '../../services/src/app/auth.service'
import { Quotes } from './quotes.model';
import { Router} from '@angular/router'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  selectedSchool: string = '';
  _quotes: Quotes[];
  _myData: [Object];
 // private _quotesS = new Array<Quotes>();
  
  constructor(private authService: AuthService, private router: Router){ 
  }

  /*newLeerkrachtQuotesAdded(quotes){
    this._quotesS.push(quotes);
  }*/

  ngOnInit() {
    this.authService.getUitspraken().subscribe(
      (quotes) =>{
        console.log(quotes);
        this._myData = quotes;
    },
    err => {
      console.log(err);
      return false;
    });
    }

  selectChangeHandler (event:any){
    this.selectedSchool = event.target.value;
  }


}
