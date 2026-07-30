import React from 'react'

const App = () => {

  function inputChanging() {
    console.log('User is Typing');
  }

  return (
    <div>
      <input onChange={function (elem) {
        console.log(elem.target.value);
      }} type="text" placeholder='Enter your name' />
    </div>
  )
}

export default App