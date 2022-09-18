import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

  search = () => {
    //连续解构赋值
    //const {a:{b:{c}}} = obj 拿到a里面的b里面的c的值（最终的变量名为c）
    //const {a:{b:{c：newname}}} = obj 连续解构赋值+重命名（最终的变量名为newname）
    const {keywordElement:{value:keyword}} = this
    this.props.updateAppState({
      isFirst:false,
      isLoading:true
    })
    axios.get(`/api1/search/users234?q=${keyword}`).then(response => {
            this.props.updateAppState({isLoading:false,users:response.data.items})
        },
        error => {
          console.log(error)
          this.props.updateAppState({isLoading:false,err:error.message})
        }
      ).catch(err => {})
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keywordElement = c} type="text" placeholder="enter keywords"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
