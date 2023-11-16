import React from 'react'

const Frameworks = () => {
  return (
    <>
     <section class="bg-white dark:bg-white-700">
        <div data-aos="fade-up" class="gap-8 items-center py-8 px-4 mx-auto max-w-full lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
            <div class="font-light text-gray-500 font-mono sm:text-lg dark:text-gray-400 m-10">
                <h2 class="mb-4 text-6xl font-extrabold text-gray-900 dark:text-black">What We Do.....</h2>
                <p class="mb-4 mt-10 text-3xl text-amber-800 ">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg hover:scale-105 duration-300 " src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="office content 1"/>
                <img class="mt-4 w-full lg:mt-10 rounded-lg hover:scale-105 duration-300" src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="office content 2 "/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Frameworks