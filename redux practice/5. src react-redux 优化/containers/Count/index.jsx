import {connect} from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";
import React, { Component } from 'react'

//定义UI组件
//不再需要默认暴露
class Count extends Component {
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

//映射状态
//a function's returned object will be the props that is passed to UI component -- 状态
/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. 返回的对象的key作为传递给UI组件props的key, value就作为传递给UI组件的props的值
 * 3. mapStateToProps用于传递状态
 */
//const mapStateToProps = (state) => ({count:state})


//映射操作状态的方法
/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. 返回的对象的key作为传递给UI组件props的key, value就作为传递给UI组件的props的值
 * 3. mapStateToProps用于传递操作状态的方法
 */
//b function's returned object will be the props that is passed to UI component--操作状态的方法
// const mapDispatchToProps = dispatch => (
//     {
//         'plus': number => dispatch(createIncrementAction(number)),
//         'minus': number => dispatch(createDecrementAction(number)),
//         'plusAsync': (number, time) => dispatch(createIncrementAsyncAction(number, time))
//     }
// )


//使用connect()()创建并暴露一个Count容器组件
export default connect(
    (state) => ({count:state}),
    //mapDispatchToProps一般写法
    // dispatch => ({
    //     plus: number => dispatch(createIncrementAction(number)),
    //     minus: number => dispatch(createDecrementAction(number)),
    //     plusAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    // })
    //mapDispatchToProps精简写法
    {
        plus: createIncrementAction,
        minus: createDecrementAction,
        plusAsync: createIncrementAsyncAction
    }
)(Count)