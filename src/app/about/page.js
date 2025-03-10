import React from 'react'
import Demo from '../../../components/demo'
import CaseContainer from '../../../components/caseContainer'
import Navbar from '../../../components/navbar'

function page() {
  return (
    <div>
      <div className='w-[100vw] h-fit flex flex-col justify-center items-center bg-black'>
        <section className='lg:px-[120px] px-[20px] w-full'><Navbar/></section>
      
        <section className='flex flex-col lg:mx-[120px] mx-[20px] py-[120px] lg:mt-[180px] mt-[60px] gap-[120px] lg:gap-[320px] items-center w-full px-[30px] lg:px-[120px]'>
        <section className=''><Demo /></section>
        <div className='flex flex-col lg:flex-row gap-[10px] w-full'>
        <CaseContainer 
        Title="Innota Technologies"
        Body1="Web Redesign"
        Body2="User Research"
        Case={'https://www.youtube.com/embed/g2C0SvvXtH0?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=g2C0SvvXtH0'}
        />
                <CaseContainer 
        Title="Axis Consulting"
        Body1="Web Redesign"
        Body2="User Research"
        Case={'https://www.youtube.com/embed/IaIF-HaLqXM?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=IaIF-HaLqXM'}
        />
        </div>
        </section>

        {/* <div className='border-2 border-white w-full h-[80vh]'><Video placeholder='https://www.youtube.com/embed/g2C0SvvXtH0?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1'/></div> */}

        
        </div>
        
    </div>
  )
}

export default page
