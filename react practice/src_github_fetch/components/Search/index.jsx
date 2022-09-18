import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {

  search = async() => {
    const {keywordElement:{value:keyword}} = this
    PubSub.publish('update',{isFirst:false,isLoading:true})
    // axios.get(`/api1/search/users2?q=${keyword}`).then(response => {
    //         PubSub.publish('update',{isLoading:false,users:response.data.items})},
    //     error => {
    //       PubSub.publish('update',{isLoading:false,err:error.message})
    //     }
    //   ).catch(err => {})
    // using fetch send request
    //  fetch(`/api1/search/users2?q=${keyword}`).then(
    //   response => response.json()
    //   //此步骤仅为联系服务器， 只要返回的状态码是2xx，4xx都是成功
    //  ).then(
    //   response => {console.log(response)}
    //  ).catch(
    //   (error) => { console.log('failed', error) }
    //  )
    try {
      const response = await fetch(`/api1/search/users2?q=${keyword}`)
      const data = await response.json()
      PubSub.publish('update',{isLoading:false,users:data.items})
    } catch(error){
      PubSub.publish('update',{isLoading:false,err:error.message})
    }
    

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
