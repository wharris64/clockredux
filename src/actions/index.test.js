import * as actions from './index'


describe('actions', ()=> {
   it('should return action to update time', () => {
       const time = new Date()
       const expectedAction = {
           type:'UPDATE_TIME',
           time
       }
       expect(actions.updateTime(time.toEqual(expectedAction)))
   })
   
   
    it('should return action to start timer', () => {
const expectedAction = {
    type: 'START_TIMER'
}
expect(actions.startTimer()).toEqual(expectedAction)
    })

    it('shouled return action to stop timer', () => {
         const expectedAction = {
             type: "STOP_TIMER"
         }
         expect(actions.stopTimer()).toEqual(expectedAction)
    })

})

