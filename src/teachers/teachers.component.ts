import {Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'ht-teachers',
    templateUrl: './teachers.component.html'
})

export class TeachersComponent implements OnInit{
 
    pageTitle: string = "welkom";
    constructor(private _teacherService: ProductService){

    }

    teachers: any[] = [];
    onRatingClicked(message: string): void{
        this.pageTitle= 'Teachers ' + message;
    }
    ngOnInit(): void {
        this.teachers = this._teacherService.getTeachers();
    }
}