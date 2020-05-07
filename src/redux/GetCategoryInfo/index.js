import Client from "../../Contentful";
import actions from './actions'

export class CategoryService {
    static instance;

    static getInstance() {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance;
    }

    getCategoryProductsList = () => async (dispatch, getState) => {
        const state = getState();
        console.log(state);
        const categorySlug = state.categoryInfo.categorySlug;
        const activeCollection = state.categoryInfo.activeCollection;
        try {
            await dispatch(actions.getCategoryProductsAttempt());
            const response = await Client.getEntries({
                'content_type': 'bodyffyStore',
                'fields.category': categorySlug,
            });

            const category_photos = response.items.reduce((photosArr, photoObject) => {
                photosArr.push(photoObject.fields.photos[0].fields.file.url);
                return photosArr;
            }, []);

            const category_slugs = response.items.reduce((slugsArr, slug) => {
                slugsArr.push(slug.fields.slug);
                return slugsArr;
            }, []);

            const category_title = response.items.reduce((titles, item) => {
                if (!titles.includes(item.fields.categoryName)) {
                    titles.push(item.fields.categoryName);
                }
                return titles
            }, []);

            const category_collections = response.items.reduce((collectionsArr, coll) => {
                if (!collectionsArr.includes(coll.fields.collection)) {
                    collectionsArr.push(coll.fields.collection);
                }
                return collectionsArr;
            }, []);

            const collections_photos = response.items.reduce((photosArr, photoObject) => {
                if (!photosArr.includes(photoObject.fields.collectionPhoto.fields.file.url)) {
                    photosArr.push(photoObject.fields.collectionPhoto.fields.file.url);
                }
                return photosArr;
            }, []);
            const collections = response.items.reduce((collArr, item) => {
                if (!collArr.includes({
                    collection_name: item.fields.collection,
                    collections_photo: item.fields.collectionPhoto.fields.file.url
                })) {
                    collArr.push({
                        collection_name: item.fields.collection,
                        collections_photo: item.fields.collectionPhoto.fields.file.url
                    });
                }
                return collArr;
            }, []);

            console.log(collections);

            await dispatch(actions.getCategoryProductsSuccess({
                category_photos,
                category_slugs,
                category_collections,
                category_title,
                collections_photos,
                collections
            }));
            return {
                category_photos,
                category_slugs,
                category_collections,
                category_title,
                collections_photos,
                collections
            };
        } catch (err) {
            await dispatch(actions.getCategoryProductsFail());
            return err;
        }
    };
    getCollectionProductsList = () => async (dispatch, getState) => {
        const state = getState();
        const categorySlug = state.categoryInfo.categorySlug;
        const activeCollection = state.categoryInfo.activeCollection;
        try {
            await dispatch(actions.getCollectionProductsAttempt());
            const response = await Client.getEntries({
                'content_type': 'bodyffyStore',
                'fields.category': categorySlug,
                'fields.collection' : activeCollection
            });

            const category_photos = response.items.reduce((photosArr, photoObject) => {
                photosArr.push(photoObject.fields.photos[0].fields.file.url);
                return photosArr;
            }, []);

            const category_slugs = response.items.reduce((slugsArr, slug) => {
                slugsArr.push(slug.fields.slug);
                return slugsArr;
            }, []);

            await dispatch(actions.getCollectionProductsSuccess({
                category_photos,
                category_slugs,
            }));
            return {
                category_photos,
                category_slugs,
            };
        } catch (err) {
            await dispatch(actions.getCollectionProductsFail());
            return err;
        }
    };
}


export default CategoryService.getInstance();
