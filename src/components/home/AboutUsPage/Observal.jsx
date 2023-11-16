import React,{useEffect} from 'react'
import AWS from "../../../assets/AWS.png"
import Google from "../../../assets/Google.png"
import WP from "../../../assets/Wordpress.png"
import Azure from "../../../assets/Azure.png"
import Aos from "aos";
import "aos/dist/aos.css";
import "./Observal.css"

const Observal = () => {

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

  return (
    // <>
    //   <div class="pb-6" className='observal'>
    // <div class=" m-auto px-6 md:px-12 lg:px-6">
    //     <div data-aos="fade-up" class="py-4 px-12 bg-cyan-200 rounded-3xl">
    //         <span class="pt-10 block text-center text-5xl font-medium text-cyan-700">Trusted by top class Industry</span>
    //         <div data-aos="zoom-in" class=" flex justify-center flex-wrap items-center gap-5 md:gap-6 lg:gap-8 mt-10">
    //             <div class="flex items-center ">
    //                 <img class="w-60 " src={WP} alt="client logo" loading="lazy" width="400" height="219"/>
    //             </div>
    //             <div class="flex items-center">
    //                 <img class="w-24" src={AWS} alt="client logo" loading="lazy" width="400" height="219"/>
    //             </div>
    //             <div  class="flex items-center">
    //                 <img class="w-28" src={Google} alt="client logo" loading="lazy" width="400" height="219"/>
    //             </div>
    //             <div  class="flex items-center">
    //                 <img class="w-32" src={Azure} alt="client logo" loading="lazy" width="400" height="219"/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // </div> </>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            World
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Sport
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Health
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Weather
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Time
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            News
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Observal