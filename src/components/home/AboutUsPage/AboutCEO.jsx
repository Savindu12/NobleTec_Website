import React from 'react'

const AboutCEO = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="lg:pr-10">
        <a
          href="/"
          aria-label="Go Home"
          title="Logo"
          className="inline-block mb-5"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
          <svg viewBox="0 0 1028 1028" fill="currentColor" className="h-8">
              <path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" />
            </svg>
          </div>
        </a>
        <h5 className="mb-4 text-4xl font-extrabold leading-none">
          A Message From
          <br className="hidden md:block" />
          Director-
          <span className="inline-block text-amber-500">
             Ruwan Padukkage
          </span>
        </h5>
        <p className="mb-6 text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem totam rem aperiam, eaque ipsa quae explicabo.
        </p>
        <hr className="mb-5 border-gray-300" />
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/ruwanpadukkage"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ruwan-padukkage-a3a87a15/?originalSubdomain=lk"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 72 72" fill="currentColor" className="h-8">
              <circle cx="15" cy="15" r="4" />
              <path d="M46.603,14C57.173,14,58,14.827,58,25.397v21.277C58,57.178,57.178,58,46.674,58H25.326C14.822,58,14,57.178,14,46.674	V25.326C14,14.822,14.822,14,25.326,14H46.603z M30.202,44.705V31.316h-4.161v13.389H30.202z M28.122,29.401	c1.337,0,2.425-1.088,2.425-2.426c0-1.337-1.088-2.425-2.425-2.425c-1.34,0-2.426,1.086-2.426,2.425S26.78,29.401,28.122,29.401z M45.812,44.705v-7.343c0-3.605-0.779-6.378-4.992-6.378c-2.024,0-3.381,1.11-3.937,2.162h-0.056v-1.829h-3.992v13.389h4.158v-6.624	c0-1.746,0.333-3.437,2.498-3.437c2.134,0,2.162,1.997,2.162,3.55v6.511H45.812z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/rpadukkage"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
          
        </div>
      </div>
      <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96 hover:scale-105 duration-300"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
      </div>
    </div>
  </div>

  )
}

export default AboutCEO