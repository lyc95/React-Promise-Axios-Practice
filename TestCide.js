//Ref with String
class Demo extends React.Component {
    showData = () =>{
        const { input1 } = this.refs
        alert(input1.value)
    }

    showData2 = () =>{
        const {input2} = this.refs
        alert(input2.value)
    }

//define ref to define itself and store in the refs attribute in the instance component
    render(){
        return (
            <div>
                <input ref="input1" type="text" placeholder="click to prompt"></input>
                <button onClick={this.showData}>click to show the data on the left side</button>
                <input ref="input2" onBlur={this.showData2} type="text" placeholder="prompt"></input>
            </div>
        )
    }
}
ReactDOM.render(<Demo />, document.getElementById('root'))

//Ref with Callback function（回调形式）
class Demo extends React.Component {
    showData = () =>{
        const { input1 } = this
        alert(input1.value)
    }

    showData2 = () =>{
        const {input2} = this
        alert(input2.value)
    }

//define ref to define itself and store in the refs attribute in the instance component
    render(){
        return (
            <div>
                //ref = {}
                //这里通过箭头函数，传入当前节点（这个InputTag)并把当前的节点赋值给组件实例自身的input1属性上
                <input ref={ currentNode => this.input1 = currentNode } type="text" placeholder="click to prompt"></input>
                <button onClick={this.showData}>click to show the data on the left side</button>
                <input ref={curr => this.input2 = curr} onBlur={this.showData2} type="text" placeholder="prompt"></input>
            </div>
        )
    }
}
ReactDOM.render(<Demo />, document.getElementById('root'))

//Ref with Callback function（回调形式 + 内联）
class Demo extends React.Component {
    state = {isHot:true}
    changeWeather = () => {
        const {isHot} = this.state
        this.setState({isHot:!isHot})
    }
    showInfo = () =>{
        const {input1} = this
        alert(input1.value)
    }
    saveInfo = (c) => {
        this.input1 = c;
        console.log('@', c)
    }
    //define ref to define itself and store in the refs attribute in the instance component
    render(){
        const {isHot} = this.state
        return (
            <div>
                <h2>today is {isHot ? 'Hot' : 'Not Hot'}</h2>
                {/*内联回调 更新的时候会调用两次，但是用这种方法就好了，用两次也无关紧要*/}
                {/*<input ref={current => {this.input1 = current; console.log('hhhhhh', current);}} type = "text" />*/}
                {/*类绑定回调 ，不用写这种*/}
                {/*不知道为什么input1没有绑定到实例身上 */}
                <input ref={this.saveInput} type = "text" />
                <button onClick = {this.showInfo}>click me </button>
                <button onClick = {this.changeWeather}>change weather</button>
            </div>
        )
    }
}
ReactDOM.render(<Demo />, document.getElementById('root'))

//createRef
class Demo extends React.Component {
    //React.createRef调用后返回一个容器，该容器可以存储被ref所标识的节点，该容器是专人专用的，也就是说只能储存一个
    //用几个就要创建几个容器
    myRef = React.createRef()
    myRef2 = React.createRef()
    showInfo = () =>{
        console.log(this.myRef)
        console.log(this.myRef.current)//currentNode
        console.log(this.myRef.current.value)
    }
    showData2 = ()=>{
        alert(this.myRefS.current.value);
    }
    //define ref to define itself and store in the refs attribute in the instance component
    render(){
        return (
            <div>
                <input ref={this.myRef} type = "text" />
                <button onClick = {this.showInfo}>click me </button>
                <input onBlur = {this.showData2} ref={this.myRef2} type = "text" />
            </div>
        )
    }
}
ReactDOM.render(<Demo />, document.getElementById('root'))



