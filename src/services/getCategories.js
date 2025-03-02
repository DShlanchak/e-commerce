import { loadAllCategoriesAction } from "../store/redusers/categoriesReducer";

export const getAllCategories = () => {
    return dispatch => {
        fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
    }
}
