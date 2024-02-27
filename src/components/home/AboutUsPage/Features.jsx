import React from 'react';
import "./Features.css"
import { CheckIcon } from '@heroicons/react/outline';
import Contact from "../../../assets/contact.jpg"
import FooterBG  from "../../../assets/NobletecVector.png"
import HomeBG  from "../../../assets/Home.jpg"
import {Parallax} from 'react-parallax';
import { AnnotationIcon, LightBulbIcon, LightningBoltIcon, ShieldCheckIcon,EyeIcon, SparklesIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Our Mission',
    description:
      'To help businesses, individuals, and communities through innovative technical solutions as a trusted technological partner.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Our Vision',
    description:
      'To become one of the trusted technological partners for solving business, individual and social problems and making the technology noble.',
    icon: EyeIcon,
  },
  // {
  //   name: 'Our Core Values',
  //   description:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error rem aperiam, eaque ipsa quae ab.',
  //   icon: LightBulbIcon,
  // },
  // {
  //   name: 'Our Qualities',
  //   description:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.',
  //     icon: SparklesIcon,
  // },
]


const Features = () => {
  return (
    <div  className=''>
    <div className="py-10 bg-gray-100">
    <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div data-aos="fade-up" className="lg:text-center">
        <h2  className="text-4xl text-amber-500 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-8 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-x1">
          A better way to Identify NobleTec Innovation
        </p>
        <p className="mt-8 max-w-7xl text-2xl text-gray-500 lg:mx-auto">
        We stand for solving the issues of people by means of innovative solutions and make them comfortable and safe. NobleTec wants to make the technology noble by resolving the painful issues of people.
        </p>
      </div>

      <div data-aos="fade-up"  className="mt-20">
        <dl className="space-y-10 md:space-y-0  md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-indigo">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-3xl leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-10 mb-10 text-center ml-16 text-2xl text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Features