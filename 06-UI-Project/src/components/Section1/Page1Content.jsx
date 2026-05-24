import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 px-18 h-[90vh]'>
        <LeftSide />
        <RightSide users={props.users} />
    </div>
  )
}

export default Page1Content