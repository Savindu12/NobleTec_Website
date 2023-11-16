import React from 'react'
import {Link} from 'react-scroll'
import PA from "../../../assets/Products/pollapp.png"
import MB from "../../../assets/Products/image.png"
import BB from "../../../assets/Products/billbook.jpg"
import BillBook from "../../../assets/Products/BillBook.png"
import MedBook from "../../../assets/Products/MedBook.png"
import PollApp from "../../../assets/Products/PollAppLogo.png"
import supportImg from "../../../assets/Products/gray1.jpg";

const backgroundImageStyle = {
  backgroundImage: `url("${supportImg}")`,
  backgroundSize: "cover",
};
const ProductAbout = () => {
  return (
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <div data-aos="fade-up" className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
    //     <p className="mb-3 text-4xl font-semibold tracking-wide uppercase md:mb-2 divide-y">
    //       -Our Products-
    //     </p> 
    //     <p className=" mt-5 text-base text-gray-700 md:text-lg divide-y">
    //       NobleTec helps to develop innovative and creative product ideas
    //       and build them in most successfull and passionate and unique.
    //     </p>
    //   </div>
    //   <div data-aos="fade-up" className="grid gap-6 row-gap-5 lg:grid-cols-3">
    //     <div>
    //       <img
    //         className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 hover:scale-105 duration-500"
    //         src={MB}
    //         alt=""
    //       />
    //       <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
    //       <span class="text-pink-500">Med</span><span class="text-blue-600">Book</span>
    //       </h5>
    //       <p className="text-gray-700">
    //         A Web application which is helps to handle the patient-side
    //         activies and services and do operations as patient management system.
    //       </p>
    //     </div>
    //     <div>
    //       <img
    //         className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 hover:scale-105 duration-500"
    //         src={BB}
    //         alt=""
    //       />
    //       <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
    //         <span class="text-purple-600">Bill Book</span>
    //       </h5>
    //       <p className="text-gray-700">
    //         Developed as a billing management system which is responsible for 
    //         handle and calculate the monthly expeses of patients.
    //       </p>
    //     </div>
    //     <div>
    //       <img
    //         className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 hover:scale-105 duration-500"
    //         src={PA}
    //         alt=""
    //       />
    //       <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
    //         <span class="text-blue-600">Poll App</span>
    //       </h5>
    //       <p className="text-gray-700">
    //         Developed for survey and service evaluation process in nursing homes,
    //         also having functionalities regarding the review and rating process.
    //       </p>
    //     </div>
    //   </div>
    // </div>
      <div className="py-16 bg-gray-100 " style={backgroundImageStyle}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={MB}
            className="object-cover w-full h-64  transition hover:scale-105 duration-500"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            </p>
            {/* <a grayscale transition hover:grayscale-0
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Med Book
            </a> */}
             <img src={MedBook} alt="" className='w-32 mb-2 ' />
            <p className="mb-2 text-gray-700">
            A Web application which is helps to handle the patient-side
            activies and services and do operations as patient management system.
            </p>
            <a
              href="MedBook"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:translate-x-3 transition ease-in-out duration-500 hover:text-amber-600"
            >
              Learn more
              <svg
            className="inline-block w-3 ml-2 mt-1"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={BB}
            className="object-cover w-full h-64 saturate-150 transition hover:scale-105 duration-500"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            </p>
            {/* <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Bill Book
            </a> */}
             <img src={BillBook} alt="" className='w-32 mb-1' />
            <p className="mb-2 text-gray-700">
            Developed as a billing management system which is responsible for 
            handle and calculate the monthly expeses of patients.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:translate-x-3 transition ease-in-out duration-500 hover:text-amber-600"
            >
              Learn more
              <svg
            className="inline-block w-3 ml-2 mt-1"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={PA}
            className="object-cover w-full h-64 saturate-150 transition hover:scale-105 duration-500"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            </p>
            {/* <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Poll App
            </a> */}
             <img src={PollApp} alt="" className='w-32 -mb-1' />
            <p className="mb-2 text-gray-700">
            Developed for survey and service evaluation process in nursing homes,
            having features likes review and rating process.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:translate-x-3 transition ease-in-out duration-500 hover:text-amber-600"
            >
              Learn more
              <svg
            className="inline-block w-3 ml-2 mt-1"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default ProductAbout