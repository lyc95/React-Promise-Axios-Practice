import React, { Component } from 'react'
export default class Count extends Component {
    increment = () => { 
        const {value} = this.selectNumber
        this.props.plus(value*1)
    }

    decrement = () => { 
        const {value} = this.selectNumber
        this.props.minus(value*1)
    }

    incrementIfOdd = () => { 
        const {value} = this.selectNumber
        if (this.props.count%2 !== 0) {
            this.props.plus(value*1)
        }
    }

    incrementAsync = () => { 
        const {value} = this.selectNumber
        this.props.plusAsync(value*1, 500)
    }

    render() {
        //console.log('11111',this.props)
        return (
        <div>
            <h1>Current Sum is : {this.props.count}</h1>
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
