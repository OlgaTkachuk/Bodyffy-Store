import Client from "../../Contentful";
import {GET_PHOTOS_FAIL, GET_PHOTOS_SUCCESS} from "./constants";
import actions from './actions'

export class ProductService {
    static instance;

    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    getProductsList = () => async (dispatch,getState) => {
        const state = getState();
        console.log(state);
        const product = state.prodImgs.product;
        try {
            await dispatch(actions.getProductAttempt());
            const response = await Client.getEntries({
                'content_type': 'bodyffyStore',
                'fields.slug': product
            });
            const item = response.items.filter(item =>
                item.fields.slug === product
            )
            const category = item?.map(i =>
                i.fields?.category
            )
            const title = item?.map(i =>
                i.fields?.title
            )
            const price = item?.map(i =>
                i.fields?.price
            )
            const photos = item?.map(i =>
                i.fields?.photos?.map(image =>
                    image.fields.file.url))

            await dispatch(actions.getProductSuccess({photos, item, title, category, price}));
            return {item, photos, title, category, price};
        } catch (err) {
            await dispatch(actions.getProductFail());
            return err;
        }
    };
}


export default ProductService.getInstance();
