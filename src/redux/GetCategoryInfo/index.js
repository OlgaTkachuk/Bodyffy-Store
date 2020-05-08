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
        const categorySlug = state.categoryInfo.categorySlug;
        try {
            await dispatch(actions.getCategoryProductsAttempt());
            const response = await Client.getEntries({
                'content_type': 'bodyffyStore',
                'fields.category': categorySlug,
            });

            const {category_slugs, category_photos, category_title, category_collections, collections_photos, collections} =
                response.items.reduce((acc, item) => {
                        acc.category_photos.push(item.fields.photos[0].fields.file.url);
                        acc.category_slugs.push(item.fields.slug)

                        if (!acc.category_title.includes(item.fields.categoryName)) {
                            acc.category_title.push(item.fields.categoryName);
                        }

                        if (!acc.category_collections.includes(item.fields.collection)) {
                            acc.category_collections.push(item.fields.collection);
                        }

                        if (!acc.collections_photos.includes(item.fields.collectionPhoto.fields.file.url)) {
                            acc.collections_photos.push(item.fields.collectionPhoto.fields.file.url);
                        }

                        if (!acc.collections.includes({
                            collection_name: item.fields.collection,
                            collections_photo: item.fields.collectionPhoto.fields.file.url
                        })) {
                            acc.collections.push({
                                collection_name: item.fields.collection,
                                collections_photo: item.fields.collectionPhoto.fields.file.url
                            });
                        }

                        return acc;
                    },
                    {
                        category_photos: [],
                        category_slugs: [],
                        category_title: [],
                        category_collections: [],
                        collections_photos: [],
                        collections: []
                    });


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
            await dispatch(actions.getCategoryProductsFail(err));
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
                'fields.collection': activeCollection
            });

            const {category_photos, category_slugs} =
                response.items.reduce((acc, item) => {
                    acc.category_photos.push(item.fields.photos[0].fields.file.url);
                    acc.category_slugs.push(item.fields.slug);
                    return acc
                }, {
                    category_photos: [],
                    category_slugs: []
                })

            await dispatch(actions.getCollectionProductsSuccess({
                category_photos,
                category_slugs,
            }));
            return {
                category_photos,
                category_slugs,
            };
        } catch (err) {
            await dispatch(actions.getCollectionProductsFail(err));
            return err;
        }
    };
}

export default CategoryService.getInstance();