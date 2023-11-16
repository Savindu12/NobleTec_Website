import React from 'react'
import Features from '../home/AboutUsPage/Features'
import Hero from '../home/homes/Home'
import Tech from '../home/homes/Tech'
import Backend from '../home/TechnologyPage/Backend'
import Frameworks from '../home/TechnologyPage/Frameworks'
import Frontend from '../home/TechnologyPage/Frontend'
import Partners from '../home/TechnologyPage/Partners'
import Technical from '../home/TechnologyPage/Technical'

const TechPage = () => {
  return (
    <>
      <Tech/>
      {/* <Partners/> */}
      <Technical/>
      <Frameworks/>
      <Frontend/>
      
    </>
  )
}

export default TechPage