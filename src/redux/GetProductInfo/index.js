import Client from "../../Contentful";
import actions from './actions'

export class ProductService {
    static instance;

    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    getProductsList = () => async (dispatch, getState) => {
        const state = getState();
        const product = state.prodInfo.product;
        try {
            await dispatch(actions.getProductAttempt());
            const response = await Client.getEntries({
                'content_type': 'bodyffyStore',
                'fields.slug': product
            });
            const item = response.items.filter(item => item.fields.slug === product)
            const [itemToShow] = item;
            let {category, title, price, photos,description, similarProductsPhotos = [], similarProductsLinks = []} = itemToShow.fields

            photos = photos?.map(image => image.fields.file.url);
            const similar_photos = similarProductsPhotos?.map(image => image.fields.file.url)
            const similar_links = similarProductsLinks?.links || []

            await dispatch(actions.getProductSuccess({
                photos,
                item,
                title,
                category,
                price,
                similar_photos,
                similar_links,
                description
            }));
            return {item, photos, title, category, price, similar_photos, similar_links, description};
        } catch (err) {
            await dispatch(actions.getProductFail(err));
            return err;
        }
    };
}


export default ProductService.getInstance();
