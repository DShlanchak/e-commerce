const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE = 'REMOVE';
const DECREMENT = 'DECREMENT'
const INCREMENT = 'INCREMENT'

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const removeCartAction = payload => ({ type: REMOVE, payload });
export const incrementCartAction = payload => ({ type: INCREMENT, payload });
export const decrementCartAction = payload => ({ type: DECREMENT, payload });

const checkProduct = (state, payload) => {
  const productInCart = state.find(el => el.id === payload.id);
  if(!productInCart){
    return [...state, {...payload, count: 1}]
  } else {
    productInCart.count++
    return [...state]
  }
}

const initialState = JSON.parse(localStorage.getItem('shopping_cart') || '[]')

export const cartReducer = (state = initialState, action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if(action.type === REMOVE){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === INCREMENT){
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if(action.type === DECREMENT){
    const target_cart = state.find(el => el.id === action.payload)
    if (target_cart.count === 1) {
      return state.filter(el => el.id !== target_cart.id)
    } else {
      target_cart.count--
      return [...state]
    }
  } else {
    return state
  }
}
