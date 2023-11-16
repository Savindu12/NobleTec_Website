import React from 'react'
import TechBG from "../../../assets/technologies.jpg"
import HomeBG from "../../../assets/Tech3.jpg"
import Typed from 'react-typed'
import { useEffect } from 'react'

const backgroundImageStyle = {
  backgroundImage: `url("${HomeBG}")`,
  backgroundSize: "cover",
};

const Tech = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])

  return (

    <div className="App rounded-b-lg">
    <div className=" text-white object-center bg-center " style={backgroundImageStyle}>
      <div className="bg-gradient-to-b from-gray-900 px-40 py-10  rounded-b-lg">
        <div className=" max-w-8xl h-full grid grid-cols-1 gap-20 rounded-b-lg">
        <div className='text-white'>
    <div className='max-w-[1940px] mt-[-86px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-20'>
      <h1  data-aos="fade-up"  data-aos-anchor-placement="top-center" className='md:text-6xl sm:text-4x1 text-4xl font-bold md:py-7 mt-10 pt-20'>
       <span className='text-blue-400'>NobleTec </span><span className='text-amber-500'>Technologies</span>
      </h1>
      <div  data-aos="fade-up"  className='flex justify-center items-center text-amber-200'>
      <span className='md:text-5xl sm:text-4xl text-4xl font-bold md:pl-4 pl-2 text-blue-400'>We Are Working With </span>
        <Typed
        className='md:text-5xl sm:text-4xl text-4xl font-bold md:pl-4 pl-2'
          strings={['React JS..', ' GO..', 'Flutter..', 'Grpc','Postgre','WordPress','MySQL','.NET Core','Digital Ocean','Azure']}
          typeSpeed={70}
          backSpeed={50}
          backDelay={1}
          loop
        />
      </div>
      <p  data-aos="fade-up"  className='md:text-3xl mt-10 font-bold text-white'>Development Roles with Web Development, Software Architecture, 
      <br></br>DevOps & Product Design</p>

    </div>
  </div>
        </div>
      </div>
    </div>

   
    </div> 

      /* <div data-aos="fade-right" className=" bg-gradient-to-r from-gray-900 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
      <div className=" inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className=" absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className=" object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={TechBG}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Technology
          </p>
          <h2 className="mb-5 font-sans text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl sm:leading-none">
            Everything you
            can imagine{' '}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-3xl  text-base text-gray-700 md:text-3xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          
        </div>
      </div>
      
    </div>
  */


  )
}

export default Tech