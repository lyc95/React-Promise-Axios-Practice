import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h3>I'm Home</h3>
      {sum === 2 ? <Navigate to="/about" replace={true}/> : <h4>当前sum的值是：{sum}</h4>}
      <button onClick={() => setSum(2)}>set to 2</button>
    </div>
  )
}
