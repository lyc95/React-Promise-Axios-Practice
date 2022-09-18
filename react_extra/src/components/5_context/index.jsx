import React, { Component } from 'react'
import './index.css'
//create context object
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext
export default class A extends Component {
    state = {name:'tom', age:18}
    render() {
        const {name, age} = this.state
        return (
        <div className='parent'>
            <h3>Component A</h3>
            <h4>My name is {name}</h4>
            {/* 现在B组件以及B组件的子组件可以收到我们的name */}
            <Provider value={{name, age}}>
                <B/>
            </Provider>
        </div>
        )
    }
}

class B extends Component {
    render() {
      return (
        <div className='child'>
            <h3>Component B</h3>
            <h4>My name received from A is  {this.props.name}</h4>
            <C/>
        </div>
        
      )
    }
}

// class C extends Component {
//     //declare to recive context
//     static contextType = MyContext
//     render() {
//         console.log(this)
//       return (
//         <div className='grand'>
//             <h3>Component C</h3>
//             <h4>My name received from A is  {this.context.name}, {this.context.age}</h4>
//         </div>
//       )
//     }
// }



function C() {
    return (
        <div className='grand'>             
            <h3>Component C</h3>
            <h4>My name received from A is:
                <Consumer>
                    {
                        value => `${value.name}, ${value.age}`
                    }
                </Consumer>
            </h4>
        </div>
    )
}
