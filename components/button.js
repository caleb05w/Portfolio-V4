import React from 'react'

function button({text}) {
  return (
    <div className='rounded-full px-[14px] py-[7px] bg-white/30 backdrop-blur-sm '>
        <h6 className='text-white'>{text}</h6>
    </div>
  )
}

export default button
