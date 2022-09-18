import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home' // Home 是路由组件
import About from './pages/About' // About 是路由组件， 会收到路由器给到props的信息，其中包括history，location，match
import Header from './components/Header' //Header is 一般组件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* original html, it use <a> */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* in react, it use route link to change component */}
              {/* NavLink got highlight effect */}
                {/* 标签体内容也通过props传递，key是children */}
                <MyNavLink to='/about' title='About'>About</MyNavLink>
                <MyNavLink to='/home' title='Home'>Home</MyNavLink>
            </div>
        </div>
        <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* register route */}
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
