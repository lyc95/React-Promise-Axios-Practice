import React, { Component } from 'react'
const data =[
    {id:'01', content:'hello, 001'},
    {id:'02', content:'hello, 002'},
    {id:'03', content:'hello, 003'}
]
export default class Detail extends Component {
    
  render() {
    const{id, title} = this.props.match.params
    const content = data.find(item => item.id === id)
    console.log(content)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {content.content}</li>
      </ul>
    )
  }
}
