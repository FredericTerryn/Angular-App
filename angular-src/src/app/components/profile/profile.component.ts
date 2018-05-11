import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/src/app/auth.service'
import { Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'  
import {ValidateService} from '../../services/validate.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: object;
  _myData: [object];

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authService: AuthService, 
    private router: Router
  ) { }

  

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
  err => {
    console.log(err);
    return false;
  });
  this.authService.getExamenvragen().subscribe(
    (examenvragen) =>{
      console.log(examenvragen);
      this._myData = examenvragen;
  },
  err => {
    console.log(err);
    return false;
  });
  
  }
  
onDeleteExamenvraag(id){
  const idobject = {
    _id: id
  }

  this.authService.deleteExamenVraag(idobject).subscribe(data => {
    if(data.succes){
      this.flashMessage.show('Uw vraag is verwijderd!', {
        cssClass:'alert-success', timeOut: 3000});
      this.router.navigate(['/']);
    } else {
      this.flashMessage.show('Uw vraag is verwijderd!', {
        cssClass:'alert-success', timeOut: 3000});
      this.router.navigate(['/']);
    }
  });
}

}