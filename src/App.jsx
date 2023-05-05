import { useState } from 'react'
import './styles/app.css'

export default function App() {
  const [count, setCount] = useState(0)

  function upCount() {
    return setCount(count + 1)
  }

  function downCount() {
    return setCount(count - 1)
  }

  return (
    <>
      <div>
        <h1>Have Fun! Here's a Counter ;)</h1>

        <h2>{count}</h2>
        <div className='buttons'>
          <button className='dec' onClick={downCount}>-</button>
          <button className='inc' onClick={upCount}>+</button>
        </div>

      </div>
    </>
  )
}