import React from 'react'
import MovingComponent from 'react-moving-text';
import Typed from 'react-typed'
import Quality from "../../../assets/Home/quality.png"
import Experience from "../../../assets/Home/Ex.png"
import Innovative from "../../../assets/Home/Ino.png"
import Res from "../../../assets/Home/Res.png"
import FadeIn from 'react-fade-in';
import supportImg from "../../../assets/Art1.jpg";
import { useEffect } from 'react'

const backgroundImageStyle = {
	backgroundImage: `url("${supportImg}")`,
	backgroundSize: "cover",
  };

const TestHero = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	
  return (
	<div>
	<div className='w-full h-full bg-gray-400 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay ' src={supportImg} alt="/" />
      </div>
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-3">

      
      <div className=" mx-auto relative font-['Maven Pro'] font-normal leading-loose tracking-widest ">
          <div data-aos="fade-up" className='px-4 py-10'>
              <h2 className="text-4xl text-amber-500 uppercase text-center ">Why Choose Us</h2>
              {/* <h3 className='text-3xl font-bold py-6 text-center'>Sparking Innovation, One Sprint At a Time</h3> */}
              <p className='px-30 py-10 text-xl text-black text-center font-normal leading-relaxed tracking-widest'>Every workplace is different. We have our unique products, services, values, and innovative ideas to change your business in a short period of time. Our Expertise and Experiences, Quality deliverables, Innovative digital solutions, and Responsiveness are unbeatable.</p>
          </div>

      <div data-aos="fade-up" className="grid gap-6 row-gap-5 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div  className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Experience}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-lg font-medium tracking-wide text-white text-center">
                Experience
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Quality}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-lg font-medium tracking-wide text-white text-center">
                Quality
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Innovative}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-lg font-medium tracking-wide text-white text-center">
                Innovative
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Res}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-lg font-medium tracking-wide text-white text-center">
                Responsiveness
              </p>
            </div>
          </div>
        </a>
      </div>

    </div>
	</div>
	</div>
  )
}

export default TestHero