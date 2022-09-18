## 1.sum case redux mini
    (1).remove unnecessary state for the Count component
    (2).create  under folder src
        -redux
            -store.js
            -count_reducer.js
    (3).store.js
        1).import createStore function from redux and create a store
        2).createStore and pass a reducer as parameter for the service
        3).do not forget to export store object
    (4).count_reducer.js:
        1).reducer is a function and it has 2 parameters preState and action adn it returns state after the action been proccessed
        2).reducer purpose initilizae the state and processing the state
        3). when the reducer been called for the first time , store is the object who triggered it and preState is undefined and action is @@REDUC/INIT... in this case
    (5).we can detetct the state change for redux in the index.js and it will re-renderd ths pag once it detected the change
        Note:redux only care about the state management and as for we will be responsible for how 状态改变驱动页面的展示

## 2.sum case redux full
    newly added files
    1.count_action.js  用于创建生成action对象
    2.constant.js 放置容易写错的action中的type, 便于管理的同时并减少出错的机率 

## 3.sum case redux async action
    (1).delay operation pass to action instead Component itself
    (2).when need async action？想要对状态进行操作，但是具体的数据烤async任务返回
    (3).details and steps
        1).npm i redux-thunk and set config in the store object
        2).the created action function now returned another function instead of plain object, the asycn function details will be written in this function
        3).after get the result of async task, dispatch a sync action to execute the data
    (4)Note:异步action不是必须的，完全可以等异步任务有了结果再去分发同步的action

## 4.sum case basic react-redux
    (1).UI组件:不能使用任何redux的api， 只负责页面的呈现与交互
        .容器组件:负责与redux通信，将结果交给UI组件
    (2).how to create a container component? using connect function in react-redux
        connect(mapStateToProps,mapDispatchToProps)(UIComponent)
            -mapStateToProps:映射状态，返回值是一个对象
            -mapDispatchToProps:映射操作状态的方法，返回值是个对象
    (3).NOTE1:容器里的store是靠props传进去的，并不是在容器组件中直接引入的
        NOTE2:mapDispatchToProps也可以是一个对象instead of 函数

## 5.sum case react-redux 优化
    (1).combined UI Component and Container Component
    (2).no need to pass store object to container component urself
        to use <Procider store={store}><App/></Provider>
    (3).不需要自己监测redux中状态的改变 with react-redux
    (4).mapDispatch can be a object instead of action
    (5).steps
        1).define UI component(不暴露)
        2).import connect to generate container component
            connect(
                state => (){key:value},//映射状态
                {key:xxxxxxAction} //映射操作状态的方法
            )(UI Component)
        3).In the UI Component, use this.props.xxxxx to read/operate the state

## 6.sum case react-redux 数据共享
    (1).define Person Component and Count Component and they share the data through redux
    (2).define reducer, action and constant for the Person Component
    (3).key: To combine the Person reducer and Count reducer, use combineReducers
            it is an Object after combination
    (4).reducers are the always the one that are passed to store.
        remeber to take the correct state from redux
## 7.sum case react-redux dev tools
    (1).npm i redux-devtools-extension
    (2). config in store object
        import {composeWithDevTools} from 'redux-devtools-extension'
        const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

## 8.sum case react-redux final
    (1).under folder reducers, can consider to create a index.js file to combine all the exported reducers 
        so that in the store.js we only import combined reducers from that index.js file