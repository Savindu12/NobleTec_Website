import React,{useEffect} from 'react'
import Products from "../../../assets/web6.jpg"
import Aos from "aos";
import "aos/dist/aos.css";


const ProductTypes = () => {

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

  return (
    <div class="py-16 bg-white">  
  <div data-aos="fade-right" class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12 hover:scale-105 duration-500 ml-10">
          <img src={Products} alt="image" loading="lazy" width="" height="" class="ml-20 h-54 w-96"/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-blue-600 font-bold md:text-4xl"><span class="text-amber-600">Project Development</span> is carried out by passionate developers</h2>
          <p class="mt-6 text-gray-600">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. </p>
          <p class="mt-4 text-gray-600"> They also often help resolve conflicts and remove obstacles that occur throughout the project life cycle and sign off on approvals needed to advance each project phase</p>
        </div>
      </div>
  </div>
</div>
  )
}

export default ProductTypes