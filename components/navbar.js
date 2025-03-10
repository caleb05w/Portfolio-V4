import React from 'react'
import Button from '../../portfolio/components/button'

function navbar() {
  return (
    <div className='w-full flex flex-row justify-center]'>
    <div className='flex flex-row justify-between w-[79vw] mt-[4vh] fixed z-[100]'>
        <Button
        text='Home'
        />
        <div className='flex flex-row justify-between w-fit gap-[2rem]'>
        <Button
        text='Home'
        />
                <Button
        text='Home'
        />
        </div>
      
    </div>
    </div>
  )
}

export default navbar
