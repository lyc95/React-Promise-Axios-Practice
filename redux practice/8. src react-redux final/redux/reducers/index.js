// this file is to combine all the reducers
import sum from './count'
import persons from './person'
//to combine the reducers
import {combineReducers } from 'redux'

export default combineReducers({
    sum,
    persons
})
