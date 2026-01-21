import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import CartItem from './CartItem'

function Cart() {
    const {state}=useContext(CartContext)
  return (
    <div className="cart">
        <h2>Cart{state.cart.length}</h2>
        {state.cart.length===0&&<p>No Items </p>}
        {state.cart.map((item)=>{
           return <CartItem key={item.id}item={item}></CartItem>

        })}





    </div>
  )
}

export default Cart