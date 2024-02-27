import React from 'react'
import { Link } from 'react-router-dom'
import FooterBG  from "../../../assets/NobleTecVector4.png"
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
// import "./Footer.css"

const Footer = () => {

    return (

      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={FooterBG} alt="logo tailus" class="w-44 m-auto" />
          </a>

          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800 font-['Maven Pro'] font-normal leading-loose tracking-widest">
            We stand for solving the issues of people by means of innovative solutions and make them comfortable and safe.
               NobleTec wants to make the technology noble by resolving the painful issues of people.
            </p>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">

          <div class="px-4 sm:px-6 lg:col-span-4 lg:px-8">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p>
                  <span class="tracking-widest font-['Maven Pro'] font-semibold leading-loose text-gray-800 text-xl">
                    Call us
                  </span>

                  <a
                    href="#"
                    class="block text-2xl font-medium text-gray-900 hover:opacity-75 text-blue-900 sm:text-3xl duration-300 transform hover:translate-x-2 hover:text-blue-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 inline-block">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span class="ml-2">   077 792 4415 </span> <br/>
                    <span class="ml-10 ">  072 335 5006 </span>

                  </a>
                </p>

                <ul class="mt-8 space-y-1 text-lg tracking-widest font-['Maven Pro'] text-gray-700">
                  <li class="font-bold mb-4 duration-300 transform hover:translate-x-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                    <span class="ml-4" >info@nobletec.com</span>
                  </li>
                  <li class="duration-300 transform hover:translate-x-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> <span class="mr-4 inline">116/11 Kodippili Mawatha, High Level Road, Pannipitiya<span class="ml-8"><br/>Sri Lanka</span></span>
                  </li>
                </ul>
              </div>

              <div class="flex gap-10 sm:grid-cols-2">
                <div>
                  <p class="tracking-widest font-['Maven Pro'] font-bold leading-loose text-gray-800 text-xl">Services</p>
                  <ul class="mt-6 space-y-4 text-sm ">
                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/services" class="text-gray-700 text-[18px] transition hover:opacity-75">
                        Software Development
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/services" class="text-gray-700 text-[18px] transition hover:opacity-75">
                        Web Development
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/services" class="text-gray-700  text-[18px] transition hover:opacity-75">
                        Industrial Training
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/services" class="text-gray-700 text-[18px] transition hover:opacity-75">
                        Mobile Development
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/services" class="text-gray-700 text-[18px] transition hover:opacity-75">
                        Information Security
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/services" class="text-gray-700 text-[18px] transition hover:opacity-75">
                        Consultancy Services
                      </Link>
                    </li>

                  </ul>
                </div>

                {/* <div class="px-8">
                  <p class="tracking-widest font-['Maven Pro'] font-bold leading-loose text-gray-800 text-xl">Company</p>

                  <ul class="mt-6 space-y-4 text-sm">
                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/about" class="text-gray-700 text-[20px] transition hover:opacity-75">
                        About
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/products" class="text-gray-700  text-[20px] transition hover:opacity-75">
                        Products
                      </Link>
                    </li>

                    <li class="duration-300 transform hover:translate-x-2">
                      <Link to="/service" class="text-gray-700 text-[20px] transition hover:opacity-75">
                        Services
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600 font-['Maven Pro'] font-normal leading-loose tracking-widest align-middle">
          © Copyright 2024 NobleTec. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/company/97441929"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-7 grayscale hover:grayscale-0">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
           
          </a>
          <a
            href="https://www.instagram.com/aidprimegroup/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-7 grayscale hover:grayscale-0">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552360621449"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-7 grayscale hover:grayscale-0">
<linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
</svg>
          </a>
        </div>
      </div>
    </div>
  
    )
}

export default Footer