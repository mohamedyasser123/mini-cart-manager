import { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/CartReducer";
import { fetchData } from "../servises/Api";
import { type } from "@testing-library/user-event/dist/type";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,initialState);
    useEffect(()=>{
        const getProduct=async()=>{
            const data=await fetchData();
            dispatch({type:"SET_PRODUCTS",payload:data});
        }
        getProduct();


    },[]);
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );

}