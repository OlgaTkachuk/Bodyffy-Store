import { combineReducers } from 'redux'
import {getProductsImgReducer} from "./GetProductImages/reducers";
import {productDetailsReducer} from "./ProductDetails/reducers";


export const rootReducer = combineReducers ({
    prodImgs: getProductsImgReducer,
    prodDetails: productDetailsReducer
})




// }

