import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeachersComponent} from '../teachers/teachers.component';

import {FormsModule} from '@angular/forms';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { QuoteComponent } from './quote/quote.component'
import { StarComponent } from '../shared/star.component';

@NgModule({
  declarations: [
    AppComponent, 
    TeachersComponent, AddTeacherComponent, QuoteComponent, StarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
