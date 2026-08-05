import React, { useState } from 'react'
import { createIcons, x } from 'lucide';

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, detail })
    // console.log(title, detail)
    setTask(copyTask);

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex gap-4 flex-col lg:w-1/2 items-start p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* FIRST INPUT */}
        <input
          type='text' placeholder='Enter notes heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/* DETAILED INPUT */}
        <input
          type='text'
          className='px-5 h-20 py-2 border-2 rounded'
          placeholder='Write details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />
        <button className='bg-white active:bg-amber-300 text-black px-5 py-2 rounded'>Add Note</button>

        <img className='h-60' src='https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-cream-sticky-notes-paper-illustration-with-clip-white-transparent-background-png-image_6484210.png' alt="" />
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black pt-9 pb-4 py-9 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>
              </div>

              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}

        </div>
      </div>
    </div >
  )
}

export default App