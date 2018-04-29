import { Injectable } from "@angular/core";
import { ITeacher } from "./teacher";

@Injectable()
export class TeacherService{
    getTeachers(): ITeacher[]{
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