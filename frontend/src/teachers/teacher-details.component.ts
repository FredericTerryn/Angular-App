import { Component, OnInit } from '@angular/core';
import { ITeacher} from './teacher'

@Component({
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  pateTitle: string = 'Teacher details'
  teacher: ITeacher;
  constructor() { }

  ngOnInit() {
  }

}
