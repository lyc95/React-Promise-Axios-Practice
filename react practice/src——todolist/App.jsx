import React, { Component } from 'react'
import Header from './components/Header/Index'
import List from './components/List/Index'
import Footer from './components/Footer/Index'
import './App.css'

export default class App extends Component {

    //状态在哪里，操作状态的方法就在哪里
    //父改子 - props传参数变量
    //子改父 - props传方法变量
  state = {
    todos:[
      {id:'1', name:'eat', done:true},
      {id:'2', name:'sleep', done:true},
      {id:'3', name:'coding', done:false}
    ]
  }
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodo = [todoObj, ...todos]
    this.setState({todos:newTodo})
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, done}
        //return {...todo, done:done}
      }
      else {
        return todo
      }
    })
    this.setState({todos:newTodo})
  }
  deleteTodo = (id) => { 
    const {todos} = this.state
    const newTodo = todos.filter(todo => todo.id !== id)
    this.setState({todos:newTodo})
   }

   //check add
   checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos =todos.map((todo) => {
      return {...todo, done}
    })
    this.setState({todos:newTodos})
   }
   
   clearDone = () => {
    const {todos} = this.state
    const newTodos =todos.filter(todo => !todo.done)
    this.setState({todos:newTodos})
   }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
        </div>
    </div>
    )
  }
}
