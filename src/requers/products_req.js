import { loadAllProductsAction } from "../store/redusers/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/redusers/productsByCategoryReducer"
import { loadSingleProductAction } from "../store/redusers/singleProductReducer"
// import url from './url'

export const getProductsByCategory = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
        // fetch(`${url}/categories/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}

export const getAllProducts = () => {
    return dispatch => {
     fetch('http://localhost:3333/products/all')
    //  fetch(`${url}/products/all`)
     .then(res => res.json())
     .then(data => dispatch(loadAllProductsAction(data)))
    }
}

export const getSingleProducts = (id) => {
    return dispatch => {
     fetch(`http://localhost:3333/products/${id}`)
    //  fetch(`${url}/products/${id}`)
     .then(res => res.json())
     .then(data => dispatch(loadSingleProductAction(data)))
    }
}

export const getDiscount = () => {
    fetch('http://localhost:3333/sale/send', {
    method:'POST',
    headers: { 
            'Content-Type': 'application/json;charset=utf-8'
            },
    body: JSON.stringify({})     
    })
    .then(res => res.json())
    .then(json => console.log('you will get discount code on your phone number'))
}

export const setOrder = () => {
    fetch('http://localhost:3333/order/send', {
    method:'POST',
    headers: { 
            'Content-Type': 'application/json;charset=utf-8'
            },
    body: JSON.stringify({})     
    })
    .then(res => res.json())
    .then(json => console.log('Your order has been placed'))
}
    

///sale/send
///order/send