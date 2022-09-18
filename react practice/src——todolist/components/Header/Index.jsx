import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import "./index.css"
export default class Header extends Component {

    //对类型以及必要性进行限制
    static propTypes ={
        addTodo:PropTypes.func.isRequired
    }
    //callback function for the keyboard event
    handleKeyUp = (event) => {
        const{keyCode, target} = event
        if (keyCode !== 13) return
        //console.log(target.value)
        if (target.value.trim() === '') {
            alert('Input can not be empty')
            return
        }
        const todoObj = {
            id:nanoid(),
            name:target.value,
            done:false
        }
        this.props.addTodo(todoObj)
        target.value = ''
    }
  render() {
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
        </div>
    )
  }
}
