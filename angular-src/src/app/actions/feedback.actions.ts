import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Feedback } from '../app/components/feedback/feedback.model'

export const ADD_FEEDBACK       = '[FEEDBACK] Add'
export const REMOVE_FEEDBACK    = '[FEEDBACK] Remove'

export class AddFeedback implements Action {
    readonly type = ADD_FEEDBACK 

    constructor(public payload: Feedback) {}
}

export class RemoveFeedback implements Action {
    readonly type = REMOVE_FEEDBACK

    constructor(public payload: number) {} //number is de index van het te verwijderen feedbackding

}

export type Actions = AddFeedback | RemoveFeedback 
