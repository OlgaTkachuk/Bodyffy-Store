import {SET_PRODUCT} from "./constants";

export function setProduct(product) {
     return {
         type: SET_PRODUCT,
         payload: product
     }
 }