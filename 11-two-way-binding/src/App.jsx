import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    const [name, setName] = useState('')

    e.preventDefault 
    console.log("form submitted")

    setName('') // it reset the placeholder empty after submitting something
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}> <input 
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
      /></form>
      <button>Submit</button>
      </div>
  )
}

export default App