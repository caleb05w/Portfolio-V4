import React from 'react'

function aboutText({ Title, Company, Year }) {
    return (
        <div>
            <div className='flex flex-row w-full  justify-between'>
                <div className='flex flex-col gap-[12px] w-fit'>
                    <h6 className='size-[18px] w-fit text-nowrap   h-fit'> {Company} </h6>
                    <h6 className='text-my-gray size-[20px] text-nowrap h-fit'> {Title} </h6>
                </div>
                <h6 className='size-[20px] text-my-gray w-fit'> {Year} </h6>
            </div>
        </div>
    )
}

export default aboutText