import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {

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
    console.log(this.props)
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          &nbsp;<button onClick={this.back}> Back </button>
          &nbsp;<button onClick={this.forward}> Forward </button>
          &nbsp;<button onClick={this.go}> go -2 </button>
        </div>
    )
  }
}
//暴露的是withRouther函数调用的返回值
//作用：接受以一般组件，并在一般组件身上加上路由组件所特有的props属性(加工一般组件)
//withRouther的返回值是一个新组件
export default withRouter(Header)
