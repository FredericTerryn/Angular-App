import { Component, OnInit } from '@angular/core';

import {ValidateService} from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService} from '../../services/src/app/auth.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  Username: String;
  email: String; 
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authService: AuthService, 
    private router: Router
  ) { } //services altijd declareren in constructor


  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      Username: this.Username, 
      email: this.email, 
      password: this.password
      
    }

    //required fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Gelieve alle velden in te vullen.', {cssClass: 'alert-danger', timeOut: 3000});
      return false;
    } 

     //required email
     if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Use a valid email', {cssClass: 'alert-danger', timeOut: 3000});
      return false;
    } 

      //register User backend
      this.authService.registerUser(user).subscribe(data => {
        if (data.success){
          this.flashMessage.show('You are now registered and can log in.', {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Oeps. Er ging iets verkeerd....', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/register']);
        }
      });

  }




}
