import React from 'react'
import ReactDOM  from 'react-dom'
function Demo() {

    //数组的解构赋值
    const [sum, setSum] = React.useState(0)
    const [name, setName] = React.useState('li')
    const myRef = React.useRef()
    // React.useEffect(() => {
    //     console.log('@')
    // }, [sum, name]) //非空数组->只监测数组中的变量

    React.useEffect(() => {
        let timer = setInterval(() => {
            setSum(prev => prev+1)
        }, 1000) 
        return () => {
            //useEffect 第一个函数参数返回的函数将会在unmountComponent时调用
            console.log("Component Unmount!!@!")
            clearInterval(timer)
        }
    }, []) //空数组说明谁都不监测，调用一次
    //没有第二个数组参数 -> 谁都监测

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <input type='text' ref={myRef}/>
            <h2>Current sum is {sum}</h2>
            {/* <button onClick={() => setSum(sum+1)}>Add 1</button> */}
            <button onClick={() => setSum(prev => prev+1)}>Add 1</button>
            <button onClick={() => setName('new li')}>change name</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={() => {console.log(myRef);alert(myRef.current.value);}}>alert</button>
        </div>
    )
}
export default Demo
