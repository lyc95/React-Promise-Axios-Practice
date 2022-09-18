import { ADD_PERSON } from "../constant";

//initialize the persons array
const initState = [{id:'001', name:'tom', age:18}]
export default function PersonReducer(prevState = initState, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            //return preState.unshift(data)
            //above is not okay as we are trying to modifying the preState,PersonReducer必须是一个纯函数
            //纯函数：相同的input -> 相同的output，不可以改写原生输入对象的值
            return [data, ...prevState]
        default:
            return prevState;
    }
}