import React,{useEffect} from 'react'
import supportImg from "../../../assets/19366.jpg";
import Quality from "../../../assets/Home/QA.png";
import Experience from "../../../assets/Home/Ex.png";
import CreativeTech from "../../../assets/Home/Ino.png"
import Responsive from "../../../assets/Home/Res.png"
import Aos from "aos";
import "aos/dist/aos.css";


const Support = () => {

    useEffect (() => {
        Aos.init({duration:2000});
    },[]);

  return (
    <div name='support' className='w-full'>
      <div className='w-full h-full bg-gray-300 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay ' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[2100px] mx-auto relative '>
          <div data-aos="fade-up" className='px-4 py-10'>
              <h2 className='text-6xl pt-5 text-amber-500 uppercase text-center font-serif'>Why Choose Us</h2>
              {/* <h3 className='text-3xl font-bold py-6 text-center'>Sparking Innovation, One Sprint At a Time</h3> */}
              <p className='px-40 py-10  text-3xl text-black text-center font-mono'>Every workplace is different. We have our unique products, services, values, and innovative ideas to change your business in a short period of time. Our Expertise and Experiences, Quality deliverables, Innovative digital solutions, and Responsiveness are unbeatable.</p>
          </div>

      <div data-aos="fade-up" className='max-w-[1400px] mx-auto grid md:grid-cols-4 gap-4 rounded-lg'>
           <div class="absolute aspect-video cursor-pointer  rounded-x1 relative group ">
          <div class="rounded-x3 rounded-lg z-50 opacity-0  group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-gradient-to-b from-transparent to-yellow-50 inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div class="transform-gpu  p-2 space-y-1 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div class="font-bold uppercase  text-amber-200 text-3xl opacity-100">Experience</div>

                        {/* <div class="opacity-100 text-2xl  ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam.
                        </div> */}
                    </div>
                </div>
            </div>
            <img
                alt=""
                class="object-cover w-full  aspect-square group-hover:scale-110 transition duration-300 ease-in-out rounded-3xl "
                src={Experience}
            />
        </div>

        <div class="absolute aspect-video cursor-pointer rounded-x3 relative group ">
          <div class="rounded-xl rounded-lg z-50  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-gradient-to-b from-transparent to-yellow-50 inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div class="transform-gpu  p-2 space-y-1 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div class="font-bold uppercase text-gray-00 text-3xl opacity-100 ">Quality</div>

                        {/* <div class="opacity-100 text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam. 
                        </div> */}
                    </div>
                </div>
            </div>
            <img
                alt=""
                class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out rounded-3xl  "
                src={Quality}
            />
        </div>

        <div class="absolute aspect-video cursor-pointer rounded-x3 relative group">
          <div class="rounded-xl rounded-lg z-50  bg-gradient-to-b from-transparent to-amber-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div class="transform-gpu  p-2 space-y-1 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div class="font-bold uppercase text-yellow-200 text-3xl opacity-100">Innovative</div>

                        {/* <div class="opacity-100 text-2xl ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam.
                        </div> */}
                    </div>
                </div>
            </div>
            <img
                alt=""
                class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out rounded-3xl"
                src={CreativeTech}
            />
        </div>

        <div class="absolute aspect-video cursor-pointer rounded-x3 relative group">
          <div class="rounded-xl rounded-lg z-50 bg-gradient-to-b from-transparent to-black  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div class="transform-gpu  p-2 space-y-1 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div class="font-bold uppercase text-white text-3xl opacity-100">Responsiveness</div>

                        {/* <div class="opacity-100 text-2xl ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam.
                        </div> */}
                    </div>
                </div>
            </div>
            <img
                alt=""
                class="object-cover  w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out rounded-3xl"
                src={Responsive}
            />
        </div>
      </div>
    </div>
      </div>
  )
}

export default Support