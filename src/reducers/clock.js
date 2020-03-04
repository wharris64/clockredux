import { UPDATE_TIME, START_TIMER ,STOP_TIMER } from '../actions'

function clock(state ={}, action){
    switch(action.type){
        case UPDATE_TIME:
            return{
                ...state,
                time:action.time
            
            }
        case START_TIMER:
            return{
                ...state,
                timerId: action.timerId
            }
        case STOP_TIMER:
            return{
                ...state,
                timerId: undefined
            }
            
            default:
                return state
        
        
        
            }
}


export default clock