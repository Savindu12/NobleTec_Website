import React from 'react'
import AboutCEO from '../home/AboutUsPage/AboutCEO'
import AboutServices from '../home/AboutUsPage/AboutServices'
import Company from '../home/AboutUsPage/Company'
import Features from '../home/AboutUsPage/Features'
import Gallery from '../home/AboutUsPage/Gallery'
import Observal from '../home/AboutUsPage/Observal'
import OutTeam from '../home/AboutUsPage/OutTeam'
import Loop from '../home/Branding/Loop'
import Support from '../home/Branding/Support'
import About from '../home/homes/About'

const AboutPage = () => {
  return (
    <>
        <About/>
        <Features/>
        <AboutCEO/>
        {/* <AboutServices/> */}
        {/* <Company/> */}
        {/* <Observal/> */}
        <Gallery/>
    </>
  )
}

export default AboutPage