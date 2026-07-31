import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title, detail)
    setTitle('')
    setDetail('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 items-start p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <div className='flex w-1/2 items-start flex-col gap-4'>
        {/* FIRST INPUT */}
          <input
            type='text' placeholder='Enter notes heading'
            className='px-5 py-2 border-2 rounded'
            value={title}
            onChange={(e) =>{
              setTitle(e.target.value)
            }}
          />
        {/* DETAILED INPUT */}
          <input
            type='text'
            className='px-5 h-20 py-2 border-2 rounded'
            placeholder='Write details'
            value={detail}
            onChange={(e) =>{
              setDetail(e.target.value)
            }}
          />
          <button className='bg-white text-black px-5 py-2 rounded'>Add Note</button>
        </div>
        <img className='h-60' src='https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-cream-sticky-notes-paper-illustration-with-clip-white-transparent-background-png-image_6484210.png' alt="" />
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App