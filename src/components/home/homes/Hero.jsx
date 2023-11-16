import React from 'react'
import HomeBG from "../../../assets/product2.jpg"
import Home from './Home'

const Hero = () => {
  return (
    <div class="relative w-full">
    <div>
       <div class="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
           <div class="md:flex md:gap-12 pt-40 lg:py-56">
                <div class="md:w-6/12">
                    <h1 class="text-gray-900 font-bold text-4xl xl:text-5xl">Build in your way but with our experts <span class="text-sky-500">Support.</span></h1>
                    <p class="mt-8 text-gray-700">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                    <div class="md:-mr-32">
                        <form action="" class="w-full mt-12">
                            <div class="relative flex items-center p-1 rounded-full bg-white border border-sky-200 shadow-md md:p-2">
                                <div class="pl-6 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input placeholder="Your mail address" class="w-full p-4 rounded-full placeholder-gray-600" type="email"/>
                                <button type="button" title="Start buying" class="ml-auto py-3 px-4 rounded-full text-center transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 md:px-8">
                                    <span class="hidden w-max text-sky-900 font-semibold md:block">
                                        Get Started
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto text-sky-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
                    <img src={HomeBG} alt=""/>
                </div>
            </div>
        </div> 
    </div>
</div>
  )
}

export default Hero