/*import { Action } from '@ngrx/store'
import { Feedback } from '../Models/feedback.model'
import * as FeedbackActions from '../actions/feedback.actions'

const initialState: Feedback = {
    feedback: 'Initieel is alles goed',
    url: 'http://google.com'
}

export function reducer(state: Feedback[]=[initialState], action: FeedbackActions.Actions){
    switch(action.type) {
        case FeedbackActions.ADD_FEEDBACK:
            return [...state, action.payload];
        default:
            return state;
}
}*/