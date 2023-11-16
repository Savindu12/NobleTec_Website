import React, {useEffect} from 'react'
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect (() => {
        Aos.init({duration:2000});
    },[]);

  return (
    
         <section className='about'>
<div name='about' className='w-full my-32'>
        <div className='max-w-[1940px] mx-auto'>
            <div data-aos="fade-up" className='text-center'>
                <h2 className='text-7xl font-bold '>SPARKING INNOVATION, ONE SPRINT AT A TIME</h2>
                <p className='text-4xl py-7 text-gray-500'>lorem ipsum solor, sit amet consecture apliciscting elit. Repemdifills reppeldt  </p> 
                <p className='text-4xl py-4 text-gray-700'>lorem ipsum solor, sit amet consecture apliciscting elit. </p>
                <p className='text-4xl py-4 text-gray-700'></p>
            </div>

            <div data-aos="fade-up"  className='boxes grid md:grid-cols-3 gap-4 px-6 text-center  '>
                <div className='border py-12 rounded-xl shadow-xl group-hover:bg-yellow-900 group-hover:scale-105 lg:group-hover:scale-110' >
                    <p className='text-7xl font-bold text-amber-600'>Projects</p>
                    <p className='text-gray-500 mt-6 text-6xl '>100+</p>
                </div>
                <div   className='border py-12 rounded-xl shadow-xl' >
                    <p className='text-7xl font-bold text-amber-600'>Technologies</p>
                    <p className='text-gray-500 mt-6 text-6xl '>10+</p>
                </div>
                <div className='border py-12 rounded-xl shadow-xl' >
                    <p className='text-7xl font-bold text-amber-600'>Since</p>
                    <p className='text-gray-500 mt-6 text-6xl'>2018</p>
                </div>
            </div>
        </div>
    </div>
        </section> 
    
    
  )
}

export default About