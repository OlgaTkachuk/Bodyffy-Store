import { combineReducers } from 'redux'
import {getProductsImgReducer} from "./GetProductInfo/reducers";



export const rootReducer = combineReducers ({
    prodImgs: getProductsImgReducer,

})




// }

