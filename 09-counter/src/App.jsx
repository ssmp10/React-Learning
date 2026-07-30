import React from 'react'
import { useState } from 'react'

const App = () => {

  const [click, setclick] = useState(0)

  function increasing() {
    setclick(click + 1)
  }

  function decreasing() {
    setclick(click - 1)

  }
  return (
    <div>
      <h1>Your count is {click}</h1>
      <button onClick={increasing}>Increase</button>
      <button onClick={decreasing}>decrease</button>
    </div>
  )
}

export default App