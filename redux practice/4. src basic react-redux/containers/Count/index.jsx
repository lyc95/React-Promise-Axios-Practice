import CountUI from "../../components/Count";
import {connect} from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";

//a function's returned object will be the props that is passed to UI component -- 状态
/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. 返回的对象的key作为传递给UI组件props的key, value就作为传递给UI组件的props的值
 * 3. mapStateToProps用于传递状态
 */
function mapStateToProps(state){
    return {count:state}
}


/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. 返回的对象的key作为传递给UI组件props的key, value就作为传递给UI组件的props的值
 * 3. mapStateToProps用于传递操作状态的方法
 */
//b function's returned object will be the props that is passed to UI component--操作状态的方法
function mapDispatchToProps(dispatch){
    return {'plus': number => dispatch(createIncrementAction(number)),
            'minus': number => dispatch(createDecrementAction(number)),
            'plusAsync': (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}

//使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)