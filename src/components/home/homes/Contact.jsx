import React from 'react'
import Typed from 'react-typed'
import HomeBG from "../../../assets/contact3.jpg"
import { useEffect } from 'react';

const backgroundImageStyle = {
  backgroundImage: `url("${HomeBG}")`,
  backgroundSize: "cover",
};

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-gray-500 '>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Contact With Us</p>
            </div>
            <h2 className="font-sans text-5xl font-bold tracking-tight text-gray-300 sm:text-6xl sm:leading-none max-w-lg mb-6">
              Everything you
              <br className="hidden md:block" />
              can imagine{' '}
              <span className="inline-block text-amber-500">is real</span>
            </h2>
            <p className="text-gray-100 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
          </div>
          
        </div>
        {/* <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default Contact