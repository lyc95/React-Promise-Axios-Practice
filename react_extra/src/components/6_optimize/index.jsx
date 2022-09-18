import React, { Component, PureComponent } from 'react'
import './index.css'


//PureComponent重写了shouldComponentUpdate(...)的内容
//但是再对比state和props只进行了浅比较（对比地址）
//如果地址一样则不更新(return false)， 如果地址不一样则更新(return true)
export default class Parent extends PureComponent {

    state = {carName:'A'}
    changeCar = () => {
        this.setState({carName:'new B'})
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('before',this.props, this.state)//目前的props与state
    //     console.log('next',nextProps, nextState) //要变化的目标props与state的结果
    //     if (this.state.carName === nextState.carName) return false;
    //     else return true;
    // }

    render() {
        console.log('Parent render')
        const {carName} = this.state
        return (
        <div className='parent'>
            <h2>Parent Component</h2>
            <span>My car is {carName}</span><br/>
            <button onClick={this.changeCar}>change car</button>
            <Child carName={'carName'}/>
        </div>
        )
    }
}

class Child extends PureComponent {
    
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('child before',this.props, this.state)//目前的props与state
    //     console.log('child next',nextProps, nextState) //要变化的目标props与state的结果
    //     if (this.props.carName === nextProps.carName) return false;
    //     else return true;
    // }

    render() {
        console.log('Child render')
      return (
        <div className='child'>
            <h3>Child  Component</h3>
            <span>My car received is {this.props.carName}</span><br/>
        </div>
      )
    }
  }
