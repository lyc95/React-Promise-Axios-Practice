import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import {connect} from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const p = {id:nanoid(), name, age}
        this.props.addPerson(p)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
        <div>
            <h2>Person Component</h2>
            <h2>The Current Sum above is {this.props.currSum}</h2>
            <input ref={c => this.nameNode = c} type='text' placeholder='Name...'/>
            <input ref={c => this.ageNode = c} type='text' placeholder='Age...'/>
            <button onClick={this.addPerson}>Add</button>
            <ul>
                {
                    this.props.persons.map( p => {
                        return <li key={p.id}>{p.name}--{p.age}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default connect(
    state => ({persons:state.persons, currSum:state.sum}),//映射状态
    {addPerson:createAddPersonAction} //映射操作状态的方法
)(Person)