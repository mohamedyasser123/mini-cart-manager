import React, { use, useContext } from 'react'
import { CartContext } from "../context/cartContext";
import ProductItem from './ProductItem'

function ProductList() {
    const{state}=useContext(CartContext)
  return (

    <div className='products'>
        <h2>ProductList</h2>
        {state.products.map((product)=>{
           return <ProductItem key={product.id} product={product}></ProductItem>
        })}



    </div>
  )
}

export default ProductList