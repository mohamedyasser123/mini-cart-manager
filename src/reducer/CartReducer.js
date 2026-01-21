export const initialState = {
  products: [],
  cart: []
};

export const cartReducer=(state,action)=>{
    switch(action.type){
        case "SET_PRODUCTS":
            return {...state, products:action.payload}
             case "ADD_TO_CART":
            return {...state,cart:[...state.cart,action.payload]}
            case "DEL_FROM_Cart":
            return {
                ...state,
               cart: state.cart.filter(item => item.id !== action.payload)
            }
            default:
            return state
    }

}