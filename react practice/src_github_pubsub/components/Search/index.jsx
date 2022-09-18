import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {

  search = () => {
    const {keywordElement:{value:keyword}} = this
    PubSub.publish('update',{isFirst:false,isLoading:true})
    axios.get(`/api1/search/users?q=${keyword}`).then(response => {
            PubSub.publish('update',{isLoading:false,users:response.data.items})},
        error => {
          PubSub.publish('update',{isLoading:false,err:error.message})
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
