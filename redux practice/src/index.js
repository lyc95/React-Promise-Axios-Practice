import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    // Provider的作用是让App所有的children container component都能接收到store
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)
//using react-redux 不需要再进行state监测,container component具备有变化监测的能力
//检测redux中状态的改变，若发生改变，重新渲染组件
// store.subscribe(() => {
//     ReactDOM.render(<App/>, document.getElementById('root'))
// })