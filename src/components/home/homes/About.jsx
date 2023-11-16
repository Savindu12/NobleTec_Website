import React from 'react'
import Title from "../../../assets/title.jpg"
import HomeBG from "../../../assets/about1.jpg"
import { useEffect } from 'react';

const backgroundImageStyle = {
    backgroundImage: `url("${HomeBG}")`,
    backgroundSize: "cover",
  };
  

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App rounded-b-lg">
    <div className=" text-white object-center bg-center rounded-b-lg " style={backgroundImageStyle}>
      <div className="bg-gradient-to-b from-gray-900 px-40 py-10  rounded-b-lg">
        <div className=" max-w-8xl h-full grid grid-cols-1 gap-20 rounded-b-lg">
        <div className='text-white'>
    <div className='max-w-[1940px] mt-[-86px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-20'>
       
    <div class="relative w-full h-full">
    <div class="min-h-screen flex">
        <div class="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
            <div data-aos="fade-up" class="flex items-center flex-wrap gap-12 lg:gap-0">
                <div class="lg:w-8/14 space-y-8">
                    <span class="flex space-x-2">
                        <span class="block mb-2 border-b-2 border-gray-600"></span>
                        <span class="text-4xl text-blue-400">About NobleTec</span>
                    </span>
                    <h1 class="text-3xl font-bold md:text-6xl text-amber-400">The New <br></br> Way To Discover </h1>
                    <p class="text-4xl text-gray-200">Making complexity to simplicity through technology.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default About