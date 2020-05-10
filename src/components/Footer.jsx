
import React, { Component } from 'react'
import { format } from 'date-fns'


const formatCurrentTime = () => format(new Date(), "HH:mm");


export default class Footer extends Component {

  intervalId = undefined


  constructor() {
    super()
    this.state = {
      time: formatCurrentTime()
    }
  }

  currentTime() {
    this.setState({
      time: formatCurrentTime()
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const currentState = this.state
    return currentState.time !== nextState.Time;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.currentTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.inervalId);
    this.intervalId = undefined
  }

  render() {
    return (
      <div className="start-bar">
        <div id="clock">
          <p>{this.state.time}</p>
        </div>
      </div>
    )
  }
}