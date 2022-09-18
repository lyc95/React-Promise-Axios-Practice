import React, { Component } from 'react'
import store from '../redux/store'
import { createDecrementAction, createIncrementAction } from '../redux/count_action'
export default class Count extends Component {


    //state = {count:0}

    //can also set render in the index.js file and it wont affect the efficiency that much coz we have ReactDOM diff algorithm
    // componentDidMount(){
    //     //detect the changes in the redux
    //     //will call render as long as there is a change in redux
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => { 
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))

    }

    decrement = () => { 
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => { 
        const {value} = this.selectNumber
        const count = store.getState()
        if (count %2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }

    incrementAsync = () => { 
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        }, 500)
    }
    render() {
        return (
        <div>
            <h1>Current Sum is : {store.getState()}</h1>
            <select ref={c => this.selectNumber = c}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>+ if Odd</button>&nbsp;
            <button onClick={this.incrementAsync}>+ async</button>&nbsp;
        </div>
        )
    }
}
