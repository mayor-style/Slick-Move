import React from 'react'
import Hero from '../components/Hero'
import WorkFlow from '../components/WorkFlow'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className='overflow-hidden bg-black/90'>
      <Hero />
      <div className="p-3 max-xs:p-2 text-white bg-black/10   text-center shadow-xl">
        <h1 className=' text-white text-7xl max-lg:text-5xl max-xs:text-3xl max-sm:text-4xl text-black'>5+ <span className='font-syne max-sm:text-xl  max-lg:text-2xl max-xs:text-lg text-3xl'>Years of experience</span></h1>
      </div>
      <WorkFlow />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default HomePage
