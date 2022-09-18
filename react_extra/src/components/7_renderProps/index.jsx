import React, { Children, Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>Parent Component</h3>
        {/* <A>
                <B/>
            </A> */}
        <A render={(name) => <B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
    state = {name:'Tom'}
    render() {
        const {name} = this.state
        return (
            <div className='a'>
            <h3>A Component</h3>
            {this.props.render(name)}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
        <div className='b'>
            <h3>B Component, {this.props.name}</h3>
        </div>
        )
    }
}
