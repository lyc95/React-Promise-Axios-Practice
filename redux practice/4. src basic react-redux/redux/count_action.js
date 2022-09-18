/*
  1. 为count组件生成action object
*/ 
import { INCREMENT, DECREMENT } from "./constant"
//import store from "./store"
//sync action means that the value of the action is object
export const createIncrementAction = (data) => ({type:INCREMENT, data})
export const createDecrementAction = (data) => ({type:DECREMENT, data})

//async action means that the value of the action is function
//只有函数才能开启异步任务
//异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
