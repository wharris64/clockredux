export const UPDATE_TIME ='UPDATE_TIME'
export const START_TIMER ='START_TIMER'
export const  STOP_TIMER = 'STOP_TIMER'

export function updateTime(time){
    return {
        type: UPDATE_TIME,
        time
    }


}

export function startTimer() {
    return {
        type:START_TIMER
    }
}

export function stopTimer(){
    return{
        type:STOP_TIMER
    }
}

