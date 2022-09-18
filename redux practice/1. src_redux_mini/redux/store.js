import { createStore } from 'redux'
import CounterReducer from './count_reducer'
export default createStore(CounterReducer)
