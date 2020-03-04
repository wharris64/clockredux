import { updateTime,START_TIMER, STOP_TIMER } from '../actions'

const clockTimer = store => next => action => {
   if (action.type === START_TIMER){
     next(updateTime(new Date()))
     action.timerId = setInterval(
         () => next(updateTime(new Date())),
         1000
     )
   }
   else if (action.type === STOP_TIMER){
       const timerId = store.getState().clock.timerId
       clearInterval(timerId)
   }
 return next(action)
}

export default clockTimer