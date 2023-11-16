import React from 'react'
import HomeBG from "../../../assets/Service/Service.jpg"
import { useEffect } from 'react'

const backgroundImageStyle = {
    backgroundImage: `url("${HomeBG}")`,
    backgroundSize: "cover",
  };

const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        
      }, [])

  return (

    <div className="App rounded-b-lg">
    <div className=" text-white object-center bg-center  " style={backgroundImageStyle}>
      <div className="bg-gradient-to-b from-gray-900 px-40 py-10  rounded-b-lg">
        <div className=" max-w-8xl h-full grid grid-cols-1 gap-20 rounded-b-lg">
        
        <div data-aos="fade-right" class="py-40 lg:py-56 md:w-9/12 lg:w-7/12 ml-auto h-full">
               <h1 class="text-gray-100 font-bold text-6xl md:text-4xl lg:text-4xl xl:text-6xl">Shaping a world with an endless <span class="text-yellow-500">imagination.</span></h1>
                {/* <p class="mt-8 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>     */}
        </div>
        </div>
      </div>
    </div>
    </div> 

  )
}

export default Service