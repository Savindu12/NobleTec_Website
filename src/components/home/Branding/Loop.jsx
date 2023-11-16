import React from 'react'
import MovingComponent from 'react-moving-text';
import Typed from 'react-typed'
import IT from "../../../assets/Home/ALL.jpg";
import Consulting from "../../../assets/Home/consulting.jpg"
import Security from "../../../assets/Home/sercurity1.jpg"
import Commerce from "../../../assets/Home/Commerce.jpg"
import Mobile from "../../../assets/Home/Mobile.jpg"
import WE from "../../../assets/Home/WEB.jpg"
import FadeIn from 'react-fade-in';
import supportImg from "../../../assets/Art2.jpg";
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const backgroundImageStyle = {
	backgroundImage: `url("${supportImg}")`,
	backgroundSize: "cover",
  };

const Loop = () => {

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

  return (
	<div class="py-16" style={backgroundImageStyle}>  
	<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
		<div data-aos="fade-up" class="mb-12 space-y-2 text-center">
		<h2 className="text-5xl font-bold text-center font-medium leading-loose tracking-widest">All-In One Place</h2>
		  <p className="text-3xl text-gray-500 mb-10 text-center font-['Maven Pro'] font-normal leading-relaxed tracking-widest">
		  We are equipped with technologies for your need. Let us know your problem, we will provide you with solutions ranging from one application to an enterprise solution. Further, we can become as the trusted technology partner in your business.
		  </p>
		</div>
  
		<div data-aos="fade-up" class="grid gap-12 lg:grid-cols-2">
		  <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl transition duration-500 hover:scale-110">
			<img src={Mobile} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg "/>
			<div class="sm:w-7/12 pl-0 p-5 ">
			  <div class="space-y-2">
				<div class="space-y-4">
				  <h4 class="text-2xl font-semibold text-cyan-900 transition group-hover:text-yellow-600">Mobile Application Development</h4>
				  <p class="text-gray-600 font-serif">We help businesses to steer through mobile strategy faster, smarter and more economically with various services in the mobile space. If you are looking to achieve a competitive edge through smarter solutions we may be the right partner. </p>
				</div>
			  </div>
			</div>
		  </div>
		  
		  <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl transition duration-500 hover:scale-110">
			<img src={WE} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg "/>
			<div class="sm:w-7/12 pl-0 p-5">
			  <div class="space-y-2">
				<div class="space-y-4">
				  <h4 class="text-2xl font-semibold text-cyan-900 transition group-hover:text-yellow-600">Web Application Development</h4>
				  <p class="text-gray-600 font-serif">We are specialized in developing web applications catering your business needs. We can bring you the strategic advantages to your business using web and cloud based solutions.</p>
				</div>
			  </div>
			</div>
		  </div>

		  <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl transition duration-500 hover:scale-110">
			<img src={Consulting} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg"/>
			<div class="sm:w-7/12 pl-0 p-5">
			  <div class="space-y-2">
				<div class="space-y-4">
				  <h4 class="text-2xl font-semibold text-cyan-900 transition group-hover:text-yellow-600">IT Consulting</h4>
				  <p class="text-gray-600 font-serif">Whether your business is small, medium or large in size it is running on information. Without properly structuring, it will be open for low quality, security threats, data losses, slow performance and costly downtime. Our consultancy services are focused on delivering best in class solutions for your business issues and business enhancement needs.</p>
				</div>
			  </div>
			</div>
		  </div>

		  <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl transition duration-500 hover:scale-110">
			<img src={Security} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg "/>
			<div class="sm:w-7/12 pl-0 p-5">
			  <div class="space-y-2">
				<div class="space-y-4">
				  <h4 class="text-2xl font-semibold text-cyan-900 transition group-hover:text-yellow-600">Information Security / ISO 27001</h4>
				  <p class="text-gray-600 font-serif">Security-First is unchanged in any business. Today business information becomes more vulnerable than ever due to hackers, viruses, and various internal and external threats. We assist your business and provide solutions for information security. Further, we consult your business to become an internationally recognized secure business through the ISO 27001 certification.</p>
				</div>
			  </div>
			</div>
		  </div>

		  <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl transition duration-500 hover:scale-110">
			<img src={IT} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg "/>
			<div class="sm:w-7/12 pl-0 p-5">
			  <div class="space-y-2">
				<div class="space-y-4">
				  <h4 class="text-2xl font-semibold text-cyan-900 transition group-hover:text-yellow-600">Industrial Training</h4>
				  <p class="text-gray-600 font-serif">Our industry orientation program for undergraduate students in ICT is designed to transform interns into confident and skillful software engineers at the end of the internship period. Interns are trained with the cutting-edge technologies and practise in real life projects.</p>
				</div>
			  </div>
			</div>
		  </div>

		  <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl transition duration-500 hover:scale-110">
			<img src={Commerce} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg"/>
			<div class="sm:w-7/12 pl-0 p-5">
			  <div class="space-y-2">
				<div class="space-y-4">
				  <h4 class="text-2xl font-semibold text-cyan-900 transition group-hover:text-yellow-600">E-Commerce Application Development</h4>
				  <p class="text-gray-600 font-serif">E-commerce is the most preferred way of trading goods and services today. We develop e-commerce applications to establish your business in web presence. We can help in designing and developing websites and SEO for recognizing your business in the global market.</p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	</div>
  </div>
  
          

          
        
  )
}

export default Loop