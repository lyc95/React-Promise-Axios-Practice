import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  getStudentData =() => {
    axios.get('').then(
      response => {console.log('ok', response.data)},
      error => {console.log('fail', error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click to get the Student data!</button>
      </div>
    )
  }
}
