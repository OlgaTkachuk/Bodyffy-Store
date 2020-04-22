import { SET_ACTIVE_CATEGORY_SLUG} from "./constants";

const setActiveCategorySlug = (categorySlug) => ({
    type: SET_ACTIVE_CATEGORY_SLUG,
    categorySlug
});

export default {
    setActiveCategorySlug
}
