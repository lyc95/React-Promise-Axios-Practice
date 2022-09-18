import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

    state = {
        hasError:''
    }
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }

    render() {
        return (
        <div>
            <h2>Parent Component</h2>
            {this.state.hasError ? <h2>Bad Internet</h2> : <Child/>}
        </div>
        )
    }
}
