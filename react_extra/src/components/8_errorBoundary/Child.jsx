import React, { Component } from 'react'

export default class Child extends Component {
    state = {
    //     users:[
    //     {id:'001', name:'Tom', age:18},
    //     {id:'002', name:'Jack', age:19},
    //     {id:'003', name:'Ben', age:20}
    // ]
    users:'abc'
}
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        {
            this.state.users.map(p => {
                return <h4 key={p.id}>{p.name}----{p.age}</h4>
            })
        }
      </div>
    )
  }
}
