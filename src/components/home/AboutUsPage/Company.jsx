import React from 'react'

const Company = () => {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-x1 md:max-w-full lg:max-w-screen-x3 md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div  data-aos="fade-up" className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg ">
          <img
            src="https://images.unsplash.com/photo-1551651653-c5186a1fbba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
            className="object-cover w-full h-64 hover:scale-105 duration-500 "
            alt=""
          />
          
          <div className="p-5 border border-t-0">
          
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-10 mt-10 text-3xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Mobile Development
            </a>
            <p className="mb-2 text-gray-700 text-2xl">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
          </div>
        </div>
        <div  data-aos="fade-up" className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="object-cover w-full h-64 hover:scale-105 duration-500"
            alt=""
          />
          <div className="p-5 border border-t-0">
           
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-10 mt-10 text-3xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              E-Commerce Solutions
            </a>
            <p className="mb-2 text-gray-700 text-2xl ">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>

          </div>
        </div>
        <div  data-aos="fade-up" className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGFwcGxpY2F0aW9uJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="object-cover w-full h-64 hover:scale-105 duration-500"
            alt=""
          />
          <div className="p-5 border border-t-0">
           
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-10 mt-10 text-3xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Web Development
            </a>
            <p className="mb-2 text-gray-700 text-2xl ">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
          
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Company