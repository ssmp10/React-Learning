import React from 'react'
import { Card } from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age= {23}/>
      <Card user='Riju' age={34}/>
    </div>
  )
}

export default App