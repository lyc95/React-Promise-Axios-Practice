/*
  1. Create reducer that is providing sevice for Count Component, reducer is function
  2. reducter will receive 2 parameters : previous state and action object
*/ 
const initState = 0
//default value for the preState in case of initial state when the preState is undefined
export default function CounterReducer(preState = initState, action){
    //if (preState === undefined) preState = 0
    const {type, data} = action
    //the following action is depended on the type that we get from action object
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState;
    }
}