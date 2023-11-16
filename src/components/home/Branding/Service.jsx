import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Quality from "../../../assets/Home/QA.png";
import Experience from "../../../assets/Home/Ex.png";
import CreativeTech from "../../../assets/Home/Ino.png"
import Responsive from "../../../assets/Home/Res.png"

const Service = () => {
    useEffect (() => {
        Aos.init({duration:2000});
    },[]);
  return (
                                   

<div class="py-16 bg-gradient-to-br from-yellow-50 to-red-100">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="mb-12 space-y-2 text-center">
        <span class="block w-max mx-auto px-3 py-1.5 border border-yellow-200 rounded-full bg-yellow-100 text-yellow-700">Blog</span>
        <h2 class="text-2xl text-yellow-900 font-bold md:text-4xl">Sharing is Caring</h2>
        <p class="lg:w-6/12 lg:mx-auto">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div class="relative">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-50"></div>
            <img src={Quality} alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top rounded-t-lg transition duration-500 group-hover:rounded-t-xl"/>
          </div>
          <div class="relative space-y-4 -mt-20 p-4">
            <h2 class="text-2xl font-semibold text-yellow-900">Quality.</h2>
            {/* <p class="text-gray-600">Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...</p> */}
          </div>
          {/* <a href="#" class="absolute inset-x-4 bottom-4 flex items-center space-x-2">
            <div aria-hidden="true" class="h-10 w-10 flex border border-yellow-200 rounded-full">
              <svg aria-hidden="true" width="24" height="24" fill="none" class="my-auto mx-auto flex-none text-yellow-700">
                <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <span class="text-yellow-600">Read more</span>
          </a> */}
        </div>
        <div class="relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div class="relative">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-50"></div>
            <img src="images/woman1.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top rounded-t-lg transition duration-500 group-hover:rounded-t-xl"/>
          </div>
          <div class="relative space-y-4 -mt-20 p-4">
            <h4 class="text-2xl font-semibold text-yellow-900">lorem ispum laboriosam expedita.</h4>
            <p class="text-gray-600">Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
          </div>
          <a href="#" class="absolute inset-x-4 bottom-4 flex items-center space-x-2">
            <div aria-hidden="true" class="h-10 w-10 flex border border-yellow-200 rounded-full">
              <svg aria-hidden="true" width="24" height="24" fill="none" class="my-auto mx-auto flex-none text-yellow-700">
                <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <span class="text-yellow-600">Read more</span>
          </a>
        </div>
        <div class="relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div class="relative">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-50"></div>
            <img src="images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top rounded-t-lg transition duration-500 group-hover:rounded-t-xl"/>
          </div>
          <div class="relative space-y-4 -mt-20 p-4">
            <h4 class="text-2xl font-semibold text-yellow-900">De fuga fugiat lorem ispum laboriosam expedita.</h4>
            <p class="text-gray-600">Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
          </div>
          <a href="#" class="absolute inset-x-4 bottom-4 flex items-center space-x-2">
            <div aria-hidden="true" class="h-10 w-10 flex border border-yellow-200 rounded-full">
              <svg aria-hidden="true" width="24" height="24" fill="none" class="my-auto mx-auto flex-none text-yellow-700">
                <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <span class="text-yellow-600">Read more</span>
          </a>
        </div>
        <div class="relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div class="relative">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-50"></div>
            <img src="images/woman1.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:rounded-t-xl"/>
          </div>
          <div class="relative space-y-4 -mt-20 p-4">
            <h4 class="text-2xl font-semibold text-yellow-900">lorem ispum laboriosam expedita.</h4>
            <p class="text-gray-600">Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
          </div>
          <a href="#" class="absolute inset-x-4 bottom-4 flex items-center space-x-2">
            <div aria-hidden="true" class="h-10 w-10 flex border border-yellow-200 rounded-full">
              <svg aria-hidden="true" width="24" height="24" fill="none" class="my-auto mx-auto flex-none text-yellow-700">
                <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <span class="text-yellow-600">Read more</span>
          </a>
        </div>
      </div>
  </div>
</div>

  )
}

export default Service