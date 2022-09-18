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
    replaceShow = (id, title) => {
        //replace + params factors
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        //replace + query/search factors
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        //replace + state factors
        this.props.history.replace(`/home/message/detail`,{id,title})

    }
    pushShow = (id, title) => {
        //push + params factors
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        //replace + query/search factors
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        //replace + state factors
        this.props.history.push(`/home/message/detail`,{id,title})

    }

    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(-2)
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
                                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                                
                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                <Link replace={true} to={{pathname:'/home/message/detail', state:{id:item.id, title:item.title}}}>{item.title}</Link>
                                &nbsp;<button onClick={() => this.pushShow(item.id, item.title)}> Push </button>
                                &nbsp;<button onClick={() => this.replaceShow(item.id, item.title)}> Replace </button>


                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            {/* 声明接受params参数 */}
            {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

            {/* 无需声明接受search参数 */}
            {/* <Route path="/home/message/detail" component={Detail}/> */}

            {/* 无需声明接受state参数 */}
            <Route path="/home/message/detail" component={Detail}/>

            &nbsp;<button onClick={this.back}> Back </button>
            &nbsp;<button onClick={this.forward}> Forward </button>
            &nbsp;<button onClick={this.go}> go -2 </button>
        </div>
        )
    }
}
