class Count extends React.Component{
    //1
    constructor(props){
        console.log("constructor")
        super(props)
        state = {count:0}
    }
    //selfdefined function
    add = () => {
        const{count} = this.state
        this.setState({count:count+1})
    }

    death = () => {
        ReactDom.unmountComponentAtNode(document.getElementById("test"))
    }
    force = () => {
        this.forceUpdate()
    }

    //2
    componentWillMount(){
        console.log("is going to mount the component")
    }
    //3
    render(){
        const {count} = this.state
        return(
            <div>
                <h2>Current Sum is {count}</h2>
                <button onClick = {this.add}>add 1</button>
                <button onClick = {this.death}>unmount</button>
                <button onClick = {this.force}>forceUpdate</button>
            </div>
        )
        
    }
    //4
    componentDidMount(){
        console.log("did the mount")
    }

    //5
    componentWillUnmount(){
        console.log("is going to unmount")
    }

    //setState flow
    //called after setState before render been called again
    //控制组件更新的阀门
    //1
    shouldComponentUpdate(){
        //if we did not define this function
        //React will help us to create and return true boolean value
        console.log("shouldComponentUpdate")
        return true
        //return flase -> the pipe line will stop here
    }
    //2
    componentWillUpdate(){
        console.log("componentWillUpdate")
        
    }
    //3
    //render() will be called inbetween 
    //4
    componentDidUpdate(){
        console.log("componentDidUpdate")  
    }


     //forceUpdate flow
     //similar procedure with setState there is no step for shouldComponentUpdate()
     //which means that it skips the first step
     //不受阀门的控制

}

//Parent A and 
class A extends React.Component{
    state = {
        carName:'BENCHI'
    }
    changeCar = () => {
        this.setState({carName:'AUTO'})
    }
    render() {
        return(
            <div>
                <div>I'm A</div>
                <button onClick={this.changeCar}>change Car</button>
                <B carName = {this.state.carName}/>
            </div>
            
        )
    }
}
// child B
class B extends React.Component{
    //第一次传的不算....
    //Component is going to receive the new props
    //父组件的render引发的子组件的flow
    //A 的state更新引发A re-render -> B will also need to be re-rendered following the following steps
    //0
    componentWillReceiveProps(props){
        console.log("B WillReceiveProps", props)
    }
    //1
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate B')
        return true
    }
    //2
    componentWillUpdate(){
        console.log("componentWillUpdate B")
        
    }
    //3
    render() {
        return(
            <div>I'm B And the car received is :{this.props.carName}</div>
        )
    }
    //4
    componentDidUpdate(){
        console.log("componentDidUpdate B")  
    }
}
ReactDom.render(<A />, document.getElementById("test"))
/*
1. Initialization stage, traiggered by ReactDOM.render()
    1. constructor()
    2. componentWillMount()
    3. render()
    4. componentDidMount()   ====>常用，
        一般用来做初始化的设置，定时器，网络请求，订阅消息
2. Update Stage - triggered by either inernal state updating(this.setState...) or parent Component re-rendering
    1. shouldComponentUpdate()
    2. componentWillUpdate()
    3. render() ==>必用！
    4. componentDidUpdate()
3. UnMount Stage- triggered by ReactDOM.unmountComponentAtNode()
    1. componentWillUnmount() =====>
        做一些收尾的事情，关闭定时器，取消订阅
*/