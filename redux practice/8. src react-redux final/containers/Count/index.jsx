import {connect} from 'react-redux'
import { increment, decrement, incrementAsync } from "../../redux/actions/count";
import React, { Component } from 'react'

//定义UI组件
//不再需要默认暴露
class Count extends Component {
    increment = () => { 
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }

    decrement = () => { 
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }

    incrementIfOdd = () => { 
        const {value} = this.selectNumber
        if (this.props.count%2 !== 0) {
            this.props.increment(value*1)
        }
    }

    incrementAsync = () => { 
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1, 500)
    }
    render() {
        console.log(this.props)
        return (
        <div>
            <h2>Count Component</h2>
            <h4>Current Sum is : {this.props.count}</h4>
            <h4>Total Nos of Person below: {this.props.personCount}</h4>
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

//使用connect()()创建并暴露一个Count容器组件
export default connect(
    //state为redux里的总状态
    state => ({
        count:state.sum, 
        personCount:state.persons.length
    }),//映射状态
    {
        increment,
        decrement,
        incrementAsync
    }//映射操作状态的方法
)(Count)
//所有的状态和方法都会整合为一个props并传递给UI组件