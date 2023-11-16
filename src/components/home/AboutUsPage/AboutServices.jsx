import React from 'react'
import PD from "../../../assets/Service/ProDe.jpg"
import SA from "../../../assets/Service/SA.jpg"
import WEB from "../../../assets/WEb.jpg"
import DEV from "../../../assets/devops.jpg"

const AboutServices = () => {
  return (
   <>
    <div  class="py-16 bg-gray-50">
    <div  class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div data-aos="fade-up">
            <span class="text-yellow-600 text-4xl font-semibold">Main features</span>
            <h2 class="mt-4 text-5xl  text-yellow-900 font-bold md:text-5xl">A technology-first approach to qualities </h2>
        </div>
        <div class="mt-20 grid -mx-28 sm:grid-cols-2 lg:grid-cols-3">
            <div data-aos="fade-up" class="relative group">
                <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-blue-100"></div>
                <div class="relative p-8 space-y-4">
             
                    <h6 class="text-3xl text-yellow-800 font-medium">Web Development</h6>
                    <p class="text-2xl text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                </div>
            </div>
            <div data-aos="fade-up" class="relative group">
                <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-yellow-100"></div>
                <div class="relative p-8 space-y-4">

                    <h6 class="text-3xl text-yellow-800 font-medium">DevOps</h6>
                    <p class="text-2xl text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                </div>
            </div>
            <div data-aos="fade-up" class="relative group">
                <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-blue-100"></div>
                <div class="relative p-8 space-y-4">
                
                    <h6 class="text-3xl text-yellow-800 font-medium">Software Architecture</h6>
                    <p class="text-2xl text-gray-600">
                        Placeat omnis repellendus animi magnam harum earum non illo provident laborum quae ipsa unde nemo quasi, aliquam nesciunt totam recusandae natus! Magni.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" class="relative group">
                <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-yellow-100"></div>
                <div class="relative p-8 space-y-4">
                 
                    <h6 class="text-3xl text-yellow-800 font-medium">Product Design</h6>
                    <p class="text-2xl text-gray-600">
                        Placeat omnis repellendus animi magnam harum earum non illo provident laborum quae ipsa unde nemo quasi, aliquam nesciunt totam recusandae natus! Magni.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>  
  </>    
    
  )
}

export default AboutServices