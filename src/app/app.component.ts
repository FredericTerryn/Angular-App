import { Component } from '@angular/core';
import { TeacherService } from '../teachers/teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeacherService]
})
export class AppComponent {
  title = 'Hogent Teachers';
}
