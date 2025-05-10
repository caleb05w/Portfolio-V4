import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Navcell({ Name, Link }) {
    return (
        <a href={Link} className='hover:border-white border-b-2 border-transparent h-fit w-fit text-white'>
            <div className='flex flex-row gap-[10px] items-center'>
                <h3 className='whitespace-nowrap text-white text-[24px]'>{Name}</h3>
                <MdArrowOutward className='text-white w-auto h-[24px]' />
            </div>
        </a>
    )
}

export default Navcell