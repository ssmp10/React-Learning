import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [num, setNum] = uNeState(0);

  useEffect(function(){
    console.log("running")
  })

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() =>{
        setNum(num+1)
      }}>Click</button>
    </div>
  )
}

export default App