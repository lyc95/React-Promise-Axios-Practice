/*
  1. 为count组件生成action object
*/ 
import { INCREMENT, DECREMENT } from "../constant"
//import store from "./store"
//sync action means that the value of the action is object
export const increment = (data) => ({type:INCREMENT, data})
export const decrement = (data) => ({type:DECREMENT, data})

//async action means that the value of the action is function
//只有函数才能开启异步任务
//异步action中一般都会调用同步action
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}
