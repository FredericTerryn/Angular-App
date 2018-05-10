import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/src/app/auth.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  _myData: [Object];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
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


