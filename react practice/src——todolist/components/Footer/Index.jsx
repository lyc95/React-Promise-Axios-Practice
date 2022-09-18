import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    const {todos, checkAllTodo, clearDone} = this.props
    console.log(todos)
    const doneCount = todos.reduce((pre, curr) => pre + (curr.done ? 1 : 0) , 0)
    const total = todos.length
    return (
        <div className="todo-footer">
            <label>
            <input type="checkbox" onChange={(e) => checkAllTodo(e.target.checked)} checked={doneCount === total && total !== 0}/>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={() => clearDone()} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
