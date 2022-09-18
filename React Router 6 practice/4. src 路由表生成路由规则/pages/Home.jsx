import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h3>I'm Home</h3>
    </div>
  )
}
