import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/src/app/auth.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: object;
  _myData: [object];
  constructor(private authService: AuthService, private router: Router) { }

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
  

}