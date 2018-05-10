import {Action} from '@ngrx/store';

export function simpleReducer(state: String = "Hello world", action: Action){

    console.log(action.type, state)

    switch (action.type){
        case 'SPANISH':
            return state = 'Hola mundo'
                
            case 'French':
            return state = 'Bonjour a tous'
    
            default: 
            return state;
    }
}