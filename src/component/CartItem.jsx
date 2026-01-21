import React, { useContext } from 'react'
import { CartContext } from "../context/cartContext";

function CartItem({item}) {
    const {dispatch}=useContext(CartContext)
    const delItem=()=>{
        dispatch({type:"DEL_FROM_Cart",payload:item.id})
    }
  return (
    <div className="cart-item">
        <img src={item.image}alt={item.title}></img>
         <span>{item.title}</span>
      <button onClick={delItem}>Remove</button>
    </div>
  )
}

export default CartItem