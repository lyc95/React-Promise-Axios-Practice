import React, { Component } from 'react'
import Item from '../Item/Index'
import PropTypes from 'prop-types'
import './index.css'
export default class List extends Component {
    //对类型以及必要性进行限制
    static propTypes ={
        updateTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

  render() {
    const{todos, updateTodo, deleteTodo} = this.props
    return (
        <ul className="todo-main">
            {
                todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)
            }
        </ul>
    )
  }
}
