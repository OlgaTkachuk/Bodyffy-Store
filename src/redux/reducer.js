import { combineReducers } from 'redux'
import {getProductsImgReducer} from "./GetProductInfo/reducers";
import {getCategoryInfoReducer} from "./GetCategoryInfo/reducers";



export const rootReducer = combineReducers ({
    prodImgs: getProductsImgReducer,
    categoryInfo: getCategoryInfoReducer
})





