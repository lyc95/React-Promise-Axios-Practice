import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state = {
        messageArr :[
            {id:'01', title:'message001'},
            {id:'02', title:'message002'},
            {id:'03', title:'message003'}
        ]
    }
  render() {
    return (
    <div>
        <ul>
            {
                this.state.messageArr.map(item => {
                    return(
                        <li key={item.id}>
                            {/* 向路由组件传递params参数 */}
                            <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <hr/>
        {/* 声明接受params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
    </div>
    )
  }
}
