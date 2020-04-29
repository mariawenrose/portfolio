
import React, { Component } from 'react'

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      time: new Date()
    }
  }

  currentTime() {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount() {
    setInterval(() => this.currentTime(), 1000)
  }


  render() {
    return (
      <div className="start-bar">
        <div id="clock">
          <h1>{this.state.time.toLocaleTimeString()}</h1>
        </div>
      </div>
    )
  }
}