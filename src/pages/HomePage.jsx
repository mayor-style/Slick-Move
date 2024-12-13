import React from 'react'
import Hero from '../components/Hero'
import WorkFlow from '../components/WorkFlow'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <div className="p-3 max-xs:p-2 text-black bg-black border border-grey bg-gradient border-[1px] border-r-none border-l-none shadow-2xl text-center">
        <h1 className='text-7xl max-lg:text-5xl max-xs:text-3xl max-sm:text-4xl text-black'>5+ <span className='font-syne max-sm:text-xl  max-lg:text-2xl max-xs:text-lg text-3xl'>Years of experience</span></h1>
      </div>
      <WorkFlow />
    </div>
  )
}

export default HomePage
