import { Component, OnInit } from '@angular/core';

import {ValidateService} from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService} from '../../services/src/app/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.css']
})
export class AddExamsComponent implements OnInit {
  vraag: string;
  vak: string;
  academiejaar1: number;
  academiejaar2: number;
  moeilijkheidsgraad: string;
  
  selectChangeHandler(event:any){
    this.vak = event.target.value;
    console.log(this.vak);
  }

  selectChangeHandler2(event:any){
    this.moeilijkheidsgraad = event.target.value;
    console.log(this.moeilijkheidsgraad);
  }

onOptionSelected(event){
 console.log(event); //option value will be sent as event
}

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authService: AuthService, 
    private router: Router
  ) {
   
   }

  ngOnInit() {
  }



  onAddExamenvraagSubmit(){
    const examenvraag = {
      vraag: this.vraag,
      vak: this.vak,
      academiejaar1: this.academiejaar1,
      academiejaar2: this.academiejaar2, 
      moeilijkheidsgraad: this.moeilijkheidsgraad
    }

    if(!this.validateService.validateQuote(examenvraag)){
      this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeOut: 3000});
    }

    this.authService.addExamenVraag(examenvraag).subscribe(data => {
      if(data.succes){
        this.flashMessage.show('Bedankt voor de extra vraag!', {
          cssClass:'alert-success', timeOut: 3000});
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show('Something went wrong.', {cssClas: 'alert-danger',
      timeOUt:3000});
      this.router.navigate(['/'])
      }
    });
  }

}
