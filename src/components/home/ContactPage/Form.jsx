import React from 'react'

const Form = () => {
  return (
    <section className="py-6 dark:bg-white dark:text-gray-500">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold text-sky-500">Get in touch</h1>
			<p className="text-2xl pt-10 pb-10">Have a Question? We are eager to help! Please feel free to give us a call, send us an email, or leave us a message in the form below</p>
			<div className="space-y-8">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>116/11 Kodippili Mawatha, <br/>
                         High Level Road, 
                         Pannipitiya,<br/> 
                          Sri Lanka.</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+94 777 924 415 <br/>
                    +94 723 355 006</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>Info@nobletec.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-10 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1 text-2xl">Full name</span>
				<input type="text" placeholder="ABC Perera" className="mt-2 block w-full h-12 rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1 text-2xl">Email address</span>
				<input type="email" placeholder="ABC10@Gmail.com" className="mt-2 block w-full h-12 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1 text-2xl">Message</span>
				<textarea rows="3" className="mt-2 block h-32 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-amber-400 dark:text-gray-900 focus:ring-blue-400 hover:ring-violet-400">Submit</button>
		</form>
	</div>
</section>
  )
}

export default Form