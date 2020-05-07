import Client from "../../Contentful"
import actions from "./actions"
import {CategoryService} from "../GetCategoryInfo";

export class SliderService {
    static instance;

    static getInstance() {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance
    }

    getSlidersList = () => async (dispatch) => {
        try {
            await dispatch(actions.getSlidersAttempt());
            const response = await Client.getEntries({
                'content_type': 'BodyffyCarousels',
            });
            console.log(response);
            await dispatch(actions.getSlidersSuccess({
            }));
            return {

            };
        } catch (err) {
            await dispatch(actions.getSlidersFail());
            return err;
        }
    };

}

export default CategoryService.getInstance();