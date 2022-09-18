import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import store from './redux/store'

ReactDOM.render(<App/>, document.getElementById('root'))

//检测redux中状态的改变，若发生改变，重新渲染组件
store.subscribe(() => {
    ReactDOM.render(<App/>, document.getElementById('root'))
})