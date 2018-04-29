import {Component, OnInit} from '@angular/core';
import { TeacherService } from './teacher.service';
import { ITeacher } from './teacher';

@Component({
    selector: 'ht-teachers',
    templateUrl: './teachers.component.html'
})

export class TeachersComponent implements OnInit{
 
    pageTitle: string = "welkom";
    constructor(private _teacherService: TeacherService){



    }

    teachers: ITeacher[] = [];
    onRatingClicked(message: string): void{
        this.pageTitle= 'Teachers ' + message;
    }
    ngOnInit(): void {
        this.teachers = this._teacherService.getTeachers();
    }
}