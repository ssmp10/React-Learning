import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    { img: 'https://images.unsplash.com/photo-1777892530292-64bd31592278?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro: '' ,
      tag: 'Satisfied' 
    },
    { img: 'https://images.unsplash.com/photo-1779117864334-0ca453940e1c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro: '' ,
      tag: 'Under-Served' 
    },
    { img: 'https://images.unsplash.com/photo-1778110827897-6dc6b6f7c988?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro: '' ,
      tag: 'Satisfied' 
    }    
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App