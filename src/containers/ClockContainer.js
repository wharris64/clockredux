import { connect } from 'react-redux'
// import { updateTime } from '../components/clock/Clock'
import { startTimer, stopTimer  } from '../actions'
import Clock from '../components/clock/Clock'


function mapStateToProps(state){
    return{
        time: state.clock.time
    }
}
function mapDispatchToProps(dispatch){
    return {
        startTimer:() => dispatch(startTimer()),
        stopTimer: () => dispatch(stopTimer())
    }
}
const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock)
export default ClockContainer