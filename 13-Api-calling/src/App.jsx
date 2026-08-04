import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // FETCH API
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const d = await response.json()

    console.log(d);
  }

  // AXIOS API
  const [data, setData] = useState([])

  const getData2 = async() => {
    const response2 = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    setData(response2);
  }
  return (
    <div>
      <button onClick={getData}>Fetch API Calling</button>
      <button onClick={getData2}>Axios API Calling</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello, {elem} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App