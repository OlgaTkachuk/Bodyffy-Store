import { combineReducers } from 'redux'
import {getProductsInfoReducer} from "./GetProductInfo/reducers";
import {getCategoryInfoReducer} from "./GetCategoryInfo/reducers";
import {shoppingCartReducer} from "./ManageShoppingCart/reducers";


export const rootReducer = combineReducers ({
    prodInfo: getProductsInfoReducer,
    categoryInfo: getCategoryInfoReducer,
    cart: shoppingCartReducer
})





