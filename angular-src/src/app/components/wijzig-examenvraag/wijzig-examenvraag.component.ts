import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component'

import {ValidateService} from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService} from '../../services/src/app/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-wijzig-examenvraag',
  templateUrl: './wijzig-examenvraag.component.html',
  styleUrls: ['./wijzig-examenvraag.component.css']
})
export class WijzigExamenvraagComponent implements OnInit {

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }
  onUpdateExamenvraagSubmit(){

  }
}
