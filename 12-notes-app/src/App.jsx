import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start flex-col gap-4 p-10 justify-between'>
        <div>
          <input 
        type='text' placeholder='Enter notes heading'
        className='px-5 w-1/2 py-2 border-2 rounded' 
        />
        <input
        type='text'
        className='px-5 w-1/2 h-20 py-2 border-2 rounded'
        placeholder='Write details'
        />
        <button className='bg-white w-1/2 text-black px-5 py-2 rounded'>Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default App