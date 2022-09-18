import React, { Component } from 'react'

export default class Demo extends Component {
    state = {sum:0, curr:110}
    add = () => {
        //对象式的setState
        // const {sum}= this.state
        // this.setState({sum:sum+1}, () => {
        //     console.log(this.state.sum)
        // })
        //console.log('async',this.state.sum)

        //函数式setState
        this.setState((state, props) => {
            return {sum:state.sum+1}
        })
    }
    render() {
        return (
        <div>
            <h2>The current Sum is {this.state.sum}</h2>
            <button onClick={this.add}>Click to add 1</button>
        </div>
        )
    }
}
