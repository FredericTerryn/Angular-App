/*import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Feedback } from '../../Models/feedback.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-feedbackread',
  templateUrl: './feedbackread.component.html',
  styleUrls: ['./feedbackread.component.css']
})
export class FeedbackreadComponent implements OnInit {

  feedbacks : Observable<Feedback[]>

  constructor(private store: Store<AppState>) {
    this.feedbacks = store.select('feedback');
   }

  ngOnInit() {
  }

}
*/