import React from 'react'
import HomeBG from "../../../assets/product2.jpg"
import { useEffect } from 'react';

const backgroundImageStyle = {
    backgroundImage: `url("${HomeBG}")`,
    backgroundSize: "cover",
  };

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App rounded-b-lg">
    <div className=" text-white object-center bg-center " style={backgroundImageStyle}>
      <div className="bg-gradient-to-b from-gray-900 px-40 py-10  rounded-b-lg">
        <div className=" max-w-8xl h-full grid grid-cols-1 gap-20 rounded-b-lg">

    <div class="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
         <div class="md:flex md:gap-12 pt-40 lg:py-56">
            <div data-aos="fade-left" class="md:w-6/12">
                 <h1 class="text-white font-bold text-4xl xl:text-5xl">Build in your way with our experts <span class="text-amber-500">Support.</span></h1>
                 {/* <p class="mt-8 text-gray-700">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p> */}
             </div>
         </div>
      </div> 

    </div>
  </div>
        </div>
      </div>
    

   

    // <div>
    //   <div className="App rounded-b-lg">
    // <div className=" text-white object-center bg-center  " style={backgroundImageStyle}>
    //   <div className="bg-gradient-to-b from-gray-900 px-40 py-10  rounded-b-lg"></div>
    // <div class="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
    //     <div class="md:flex md:gap-12 pt-40 lg:py-56">
    //          <div class="md:w-6/12">
    //              <h1 class="text-gray-900 font-bold text-4xl xl:text-5xl">Build in your way but with our experts <span class="text-sky-500">Support.</span></h1>
    //              <p class="mt-8 text-gray-700">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
    //          </div>
    //      </div>
    //  </div> 
    //  </div>
    //  </div>
    //  </div>
  )
}

export default Products