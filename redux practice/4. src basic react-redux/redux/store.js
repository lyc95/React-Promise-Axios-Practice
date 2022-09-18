import { createStore, applyMiddleware } from 'redux'
import CounterReducer from './count_reducer'
import  thunk from 'redux-thunk'

export default createStore(CounterReducer, applyMiddleware(thunk))

