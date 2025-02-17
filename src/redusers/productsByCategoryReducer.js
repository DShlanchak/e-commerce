const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
const SORT_PRODUCTS_BY_CATEGORY = 'SORT_PRODUCTS_BY_CATEGORY'
const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY'
const DISCONT_PRODUCTS_BY_CATEGORY = 'DISCONT_PRODUCTS_BY_CATEGORY'

export const loadProductsByCategoryAction = payload => ({type:LOAD_PRODUCTS_BY_CATEGORY, payload});
export const sortProductsByCategoryAction = payload => ({type:SORT_PRODUCTS_BY_CATEGORY, payload})
export const filterProductsByCategoryAction = payload => ({type:FILTER_PRODUCTS_BY_CATEGORY, payload})
export const discontProductsByCategoryAction = payload => ({type:DISCONT_PRODUCTS_BY_CATEGORY, payload})

export const productsByCategoryReducer = (state = {}, action) => {
    if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
        const {data, category} = action.payload
        const products = data.map(el => ({...el, show_product: true}))
        return {...state, category, data:products }
    } else if (action.type === SORT_PRODUCTS_BY_CATEGORY) {
        if(action.payload === 'title'){
            // return [...state].sort((a, b) => a.title.localeCompare(b.title))
            state.data.sort((a, b) => a.title.localeCompare(b.title))
        } else if(action.payload === 'price_asc'){
            state.data.sort((a, b) => a.price - b.price)
        }else if(action.payload === 'price_desc'){
            state.data.sort((a, b) => b.price - a.price)
        }else if(action.payload === 'default'){
            state.data.sort((a, b) => a.id - b.id)
        }
        return {...state}
    } else if(action.type === FILTER_PRODUCTS_BY_CATEGORY){
        const {min_value, max_value} = action.payload;
        state.data.map(el => {
        if(el.price >= min_value && el.price <= max_value){
            el.show_product = true
        } else {
            el.show_product = false
        }
        return el
        })
        return {...state}
    } else if(action.type === DISCONT_PRODUCTS_BY_CATEGORY){
        if(action.payload) {
            state.data.map(el => {
                if(el.discont_price === null) {
                    el.show_product = false
                } return el
            })
        } else {
            state.data.map(el => {
                el.show_product = true
                return el
            })
        }
        return {...state}
    }
    return state
}