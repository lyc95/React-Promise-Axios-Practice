class Life extends React.Component {

    state = {opacity:1}
    death = () =>{
        //remove timer, can also put in componentWillUnmount()
        //clearInterval(this.timer)
        //unmount
        ReactDOM.unmountComponentAtNode(document.getElementById("test"))
    }

    //组件挂载完毕 and after render() been called
    componentDidMount(){
        this.timer = setInterval(() => {
            let {opacity} = this.state
            opacity -= 0.1
            if (opacity < 0) opacity = 1
            this.setState({opacity})
        },200);
    }

    //组件取消挂载
    componentWillUnmount(){
        //remove timer
        clearInterval(this.timer)
    }

    //初始化渲染 或者状态更新之后
    render(){
        <div>
            <h2 style={{opacity:this.state.opacity}}>React is too hard!</h2>
            <button onClick={this.death}>die lah </button>
            <button onClick = {this.action}>Start</button>
        </div>
    }
}
//mount（挂载）
//unmount（卸载）