import React from 'react'

const Frontend = () => {
  return (
    <div className='max-w-full bg-white dark:bg-gray-300'>
    <div  className="ml-20 mr-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20">
      <div data-aos="fade-up" className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-[1940px] mt-[-66px] mx-auto font-mono text-center flex flex-col justify-center mt-20">
          <span className="md:text-5xl capitalize sm:text-5x1 text-3xl font-bold md:py-7 mb-10 mt-10 pt-20 text-blue-800">
            We're changing the <span className='text-amber-600'> world with  Technology </span>
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-2 ">
        <a href="https://reactjs.org/" aria-label="View Item">
          <div data-aos="fade-up"  className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="https://wallpapercave.com/dwp1x/wp4924054.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-amber-300">React JS</p>
              <p className="text-2xl tracking-wide text-gray-300">
              React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
              </p>
            </div>
          </div>
        </a>
        <a href="https://flutter.dev/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="https://wallpaperaccess.com/full/4609570.jpg"
              alt=""
            />
            <div  className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-amber-300">
                Flutter
              </p>
              <p className="text-2xl tracking-wide text-gray-300">
              Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.
              </p>
            </div>
          </div>
        </a>
        <a href="https://go.dev/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="https://wallpaperaccess.com/full/4482736.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-amber-300">
                GO
              </p>
              <p className="text-2xl tracking-wide text-gray-300">
              Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection.
              </p>
            </div>
          </div>
        </a>
        <a href="https://dotnet.microsoft.com/en-us/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg rounded-lg"
              src="https://wallpapercave.com/dwp1x/wp10272162.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-blue-300">
                .NET Core
              </p>
              <p className="text-2xl tracking-wide text-gray-300 ">
              .NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework.
              </p>
            </div>
          </div>
        </a>
        <a href="https://azure.microsoft.com/en-us/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-blue-300">
                Microsoft Azure
              </p>
              <p className="text-2xl tracking-wide text-gray-300">
              Microsoft Azure, often referred to as Azure, is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers.
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.postgresql.org/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-blue-300">
                PostgreSQL
              </p>
              <p className="text-2xl tracking-wide text-gray-300">
              PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.
              </p>
            </div>
          </div>
        </a>
        <a href="https://wordpress.com/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="https://wallpaperaccess.com/full/2528176.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-amber-300">
                WordPress
              </p>
              <p className="text-2xl tracking-wide text-gray-300">
              WordPress is a free and open-source content management system, Features include a plugin architecture and a template system, referred to within WordPress as Themes.
              </p>
            </div>
          </div>
        </a>
       
       
        <a href="https://aws.amazon.com/" aria-label="View Item">
          <div data-aos="fade-up" className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-32 md:h-64 xl:h-64 rounded-lg"
              src="https://wallpaperaccess.com/full/3209836.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 mt-4 text-4xl font-bold text-blue-300">
                AWS
              </p>
              <p className="text-2xl tracking-wide text-gray-300">
              Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.
              </p>
            </div>
          </div>
        </a>
       

      </div>
      
    </div>
    </div>
  )
}

export default Frontend