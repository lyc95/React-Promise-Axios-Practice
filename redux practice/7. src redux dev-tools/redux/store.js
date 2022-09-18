import { createStore, applyMiddleware, combineReducers } from 'redux'
import CounterReducer from './reducers/count'
import PersonReducer from './reducers/person'
import  thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducer = combineReducers({
    sum:CounterReducer,
    persons:PersonReducer
})
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
