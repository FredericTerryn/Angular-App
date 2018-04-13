import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    getTeachers(): any[]{
        return[
            {
                "teacherFirstName": "Ronny",
                "teacherLastName": "Mossuse",
                "vak": "wiskunde",
                "starRating": 4
            }, 
            {
                "teacherFirstName": "Pieter",
                "teacherLastName": "Van Der Helst",
                "vak": "webApps",
                "starRating": 3
            }
        ];
    }
}