import logo from './logo.svg';
import './App.css';
//这里的{Component}不是结构赋值，而是分别暴露的结果
import React, {Component} from 'react';
import Hello from './Component/Hello/Hello'

import Welcome from './Component/Welcome/Welcome'

//创建并暴露App组件
export default class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
//暴露App组件
// export default App