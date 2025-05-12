import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Navcell({ Name, Link, Number }) {
    return (
        <a href={Link} className='hover:bg-white/10 hover:px-[10px] hover:py-[2px] w-full border-transparent h-fit text-white transition-all duration-[300ms] rounded-[5px] ease-fastEase'>
            <div className='flex flex-row justify-between w-[100% items-center '>
                <h3 className='whitespace-nowrap text-white text-[20px]'>{Name}</h3>
                {/* <MdArrowOutward className='text-white w-auto h-[24px]' /> */}
                <h3 className='text-my-gray text-[20px] '> {Number} </h3>
            </div>
        </a>
    )
}

export default Navcell