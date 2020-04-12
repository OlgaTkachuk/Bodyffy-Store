import {

    GET_PRODUCT_ATTEMPT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    SET_ACTIVE_PRODUCT_SLUG
} from "./constants";


// const getProduct = (product) => async (dispatch, getState) => {
//     console.log(product);
//     try {
//         const response = await Client.getEntries({
//             'content_type': 'bodyffyStore',
//         });
//         console.log(response, 'response');
//         const item = response.items.filter(item =>
//             item.fields.slug === product.name
//         )
//         const photos = item?.map(i =>
//             i.fields?.photos?.map(image =>
//                 image.fields.file.url))
//         console.log(photos, 'photos');
//         dispatch({
//             type: GET_PHOTOS_SUCCESS,
//             payload: {photos, item}
//         })
//
//     } catch (e) {
//         dispatch({
//             type: GET_PHOTOS_FAIL,
//             error: true,
//             payload: new Error(e),
//         })
//     }
// }
//
// export function getPhotos(dispatch, getState) {
//     let product = store.getState().prodDetails.product;
//
//     return (dispatch) => {
//         dispatch({
//             type: GET_PHOTOS_REQUEST,
//             payload: product,
//         })
//         dispatch(
//             getProduct(product)
//         )
//
//     }
// }

const getProductAttempt = () => ({
    type: GET_PRODUCT_ATTEMPT
});

const getProductSuccess = (payload) => ({
    type: GET_PRODUCT_SUCCESS,
    payload
});
const getProductFail = () => ({
    type: GET_PRODUCT_FAIL,
});
const setActiveProductSlug = (productSlug) => ({
    type: SET_ACTIVE_PRODUCT_SLUG,
    productSlug
});

export default {
    getProductAttempt,
    getProductSuccess,
    getProductFail,
    setActiveProductSlug
}
// export function getPhotos(dispatch, getState) {
//     let product = store.getState().product;
//     return (dispatch) => {
//         dispatch({
//             type: GET_PHOTOS_REQUEST,
//             payload: product,
//         })
//         setTimeout(() => {
//             dispatch({
//                 type: GET_PHOTOS_SUCCESS,
//                 payload: [1, 2, 3, 4, 5],
//             })
//         }, 1000)
//     }
// }