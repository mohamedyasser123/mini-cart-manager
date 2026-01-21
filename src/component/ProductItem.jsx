import React, { useContext } from 'react'
import { CartContext } from "../context/cartContext";
import { type } from '@testing-library/user-event/dist/type';

function ProductItem({product}) {
   const {dispatch}=useContext(CartContext)
    const addToCart=()=>{
        dispatch({type:"ADD_TO_CART",payload:product});
    }

  return (
    <div className='product'>
        <img src={product.image}alt={product.title}></img>
        <h4>{product.title}</h4>
        <p>{product.price}$ </p>
<button onClick={addToCart}>Add To Cart</button>



    </div>
  )
}

export default ProductItem