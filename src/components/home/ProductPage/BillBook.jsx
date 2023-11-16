import React from 'react'
import BB1 from "../../../assets/Products/BB1.jpg"
import BB2 from "../../../assets/Products/BB2.jpg"
import BB3 from "../../../assets/Products/BB3.jpg"
import BB4 from "../../../assets/Products/BB4.png"
import PA from "../../../assets/Products/PA.png";
// import BB2 from ""
// import BB3 from ""

const BillBook = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
    <div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-purple-400">Bill Book</h2>
					<p className="mt-3 text-lg dark:text-gray-400">Bill Book is a Web & mobile application which is responsible for calculate and produce the monthly expenses of patients.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4 hover:translate-x-5 transition ease-in-out duration-500">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Calculate the Doctor Recipt Charges</h4>
								<p className="mt-2 dark:text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4 hover:translate-x-5 transition ease-in-out duration-500">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Financial Bill Calculation</h4>
								<p className="mt-2 dark:text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4 hover:translate-x-5 transition ease-in-out duration-500">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Monthly expenses calculation of patient bills</h4>
								<p className="mt-2 dark:text-gray-400">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div> */}
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 flex items-center justify-center -mx-4 lg:pl-8">
          {/*<div className="flex flex-col items-end px-3">*/}
          {/*  <img*/}
          {/*    className="object-cover mb-6 rounded shadow-lg h-40 sm:h-64 xl:h-80 sm:w-64 xl:w-96 hover:scale-105 duration-300"*/}
          {/*    src={BB1}*/}
          {/*    alt=""*/}
          {/*  />*/}
          {/*  <img*/}
          {/*    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-96 hover:scale-105 duration-300"*/}
          {/*    src={BB3}*/}
          {/*    alt=""*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className="px-3">*/}
          {/*  <img*/}
          {/*    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-full hover:scale-105 duration-300 "*/}
          {/*    src={BB4}*/}
          {/*    alt=""*/}
          {/*  />*/}
          {/*</div>*/}
					<div aria-hidden="true" className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
						<img src={BB4} alt="" className="w-full h-full mx-auto dark:bg-transparent hover:scale-110 duration-500" />
					</div>
        </div>
			</div>
		</div>
        </div>
    </section>
  )
}

export default BillBook