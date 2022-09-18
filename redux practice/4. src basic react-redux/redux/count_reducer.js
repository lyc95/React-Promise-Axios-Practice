/*
  1. Create reducer that is providing sevice for Count Component, reducer is function
  2. reducter will receive 2 parameters : previous state and action object
*/ 

import { INCREMENT, DECREMENT } from "./constant"
const initState = 0
//default value for the preState in case of initial state when the preState is undefined
export default function CounterReducer(preState = initState, action){
    //if (preState === undefined) preState = 0
    const {type, data} = action
    //the following action is depended on the type that we get from action object
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }
}