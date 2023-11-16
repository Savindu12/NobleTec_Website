import React from 'react'

const Database = () => {
  return (
    <section class="relative pt-32 pb-28 bg-black overflow-hidden">
  {/* <img class="absolute top-0 left-0" src="gradia-assets/elements/contact/radial3.svg" alt=""/> */}
  <div class="relative z-10 container mx-auto px-4">
    <div class="flex flex-wrap -m-6">
      <div class="w-full md:w-1/2 p-6">
        <div class="md:max-w-lg">
          <h2 class="mb-7 font-heading font-semibold text-6xl sm:text-8xl xl:text-10xl text-white">Want to get in touch with us?</h2>
          <p class="text-gray-400 text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-6">
        <div class="md:max-w-md ml-auto">
          <p class="mb-4 max-w-max text-transparent bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">Send us a mail</p>
          <p class="mb-16 text-white text-2xl">hello@gradia.io</p>
          <p class="mb-4 max-w-max text-transparent bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">Follow us</p>
          <ul>
            <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="#">Facebook</a></li>
            <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="#">Twitter</a></li>
            <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="#">Linkedin</a></li>
            <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="#">Instagram</a></li>
            <li class="text-white hover:text-gray-300 text-2xl"><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Database