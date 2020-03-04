import React, { Component } from 'react'

import './Clock.css'
// import { updateTime } from '../../actions'

class Clock extends Component {
  

  componentDidMount() {
this.props.startTimer()
  }

  componentWillUnmount() {
    this.props.stopTimer()
  }

  start = event => {
      this.props.startTimer()
  }

  stop = event => {
      this.props.stopTimer()
  }

  render() {
      
    return (
      <div className="Clock">
        <h2>It is {this.props.time.toLocaleTimeString() }.</h2>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>   
      </div>

    )
  }
}

export default Clock 