// used for creating core store object
import { createStore, applyMiddleware} from 'redux'
//support async action
import  thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//import combined reducers
import reducer from './reducers/index'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
