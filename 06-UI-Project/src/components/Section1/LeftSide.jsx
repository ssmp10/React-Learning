import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import BottomArrow from './BottomArrow'

const LeftSide = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <HeroText />
      <BottomArrow />
    </div>
  )
}

export default LeftSide