import React from 'react'
import MB from "../../../assets/Products/image2.png"

const MedBook = () => {
  return (
    <section class="relative pt-36 lg:pb-14 overflow-hidden bg-gray-800" id="anchor">
  <img class="absolute top-0 left-1/2 transform -translate-x-1/2" src="gradia-assets/elements/cta/radial.png" alt=""/>
  <div class="relative z-10 container mx-auto px-4 mb-12">
    <div class="flex flex-wrap -m-6">
      <div class="w-full lg:w-1/2 p-6">
        <div class="lg:max-w-xl">
          <h2 class="mb-6 font-heading font-bold text-4xl sm:text-5xl text-white"><span class="text-pink-500 text-7xl-">Med</span><span class="text-blue-600">Book</span> is a Patient Management System. Act as a Web & Mobile Application</h2>
          <p class="mb-20 text-base text-white">on going development phase.</p>
          {/* <button class="mb-11 font-heading font-semibold w-full lg:w-auto p-5 text-xs text-white bg-blue-600 hover:bg-blue-700 uppercase rounded-md tracking-px">Connect Now</button> */}
          <ul class="flex flex-wrap w-full -m-3.5">
            <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
              <svg class="mr-3" width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                <path d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <p class='text-white'>Responsiveness and Innovative Design</p>
            </li>
            <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
              <svg class="mr-3" width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                <path d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <p class='text-white'>Support for both web & Mobile Devices</p>
            </li>
            {/* <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
              <svg class="mr-3" width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                <path d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <p class='text-white'>Edit online, no software needed</p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="pl-4 lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0">
    <img class="relative rounded-full z-10 w-full ml-auto transform hover:-translate-x-8 transition ease-in-out duration-500" src={MB} alt=""/>
  </div>
</section>
  )
}

export default MedBook