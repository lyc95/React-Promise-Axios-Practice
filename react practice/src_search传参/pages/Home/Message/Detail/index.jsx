import React, { Component } from 'react'
import qs from 'qs'
const data =[
    {id:'01', content:'hello, 001'},
    {id:'02', content:'hello, 002'},
    {id:'03', content:'hello, 003'}
]
export default class Detail extends Component {
    
  render() {
    //receive params
    //const{id, title} = this.props.match.params

    //receive search
    const {search} = this.props.location
    const {id, title} = qs.parse(search.slice(1))
    const content = data.find(item => item.id === id)

    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {content.content}</li>
      </ul>
    )
  }
}
