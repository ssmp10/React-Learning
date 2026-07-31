import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault 
    console.log("form submitted")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}> <input type='text' placeholder='Enter your name'/></form>
      <button>Submit</button>
      </div>
  )
}

export default App