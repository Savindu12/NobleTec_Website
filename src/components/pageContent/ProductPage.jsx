import React from 'react'
import Products from '../home/homes/Products'
import Tech from '../home/homes/Tech'
import BillBook from '../home/ProductPage/BillBook'
import BillBookTech from '../home/ProductPage/BillBookTech'
import MedBook from '../home/ProductPage/MedBook'
import PollApp from '../home/ProductPage/PollApp'
import PollAppTech from '../home/ProductPage/PollAppTech'
import ProductAbout from '../home/ProductPage/ProductAbout'
import ProductTypes from '../home/ProductPage/ProductTypes'
import Text from '../home/ProductPage/Text'
import Backend from '../home/TechnologyPage/Backend'
import Frontend from '../home/TechnologyPage/Frontend'
import Partners from '../home/TechnologyPage/Partners'
import Technical from '../home/TechnologyPage/Technical'
import Test from '../home/homes/Test'

const ProductPage = () => {
  return (
   <>
     {/* <Products/> */}
     <Test/>
      {/*<ProductTypes/>*/}
      <Technical/>
      <ProductAbout/>
      <PollApp/>
      <PollAppTech/>
      <BillBook/>
      <BillBookTech/>
      <MedBook/>
      {/*<Text/>*/}
   </>
  )
}

export default ProductPage