import Client from "../../Contentful"
import actions from "./actions"


export class SliderService {
    static instance;

    static getInstance() {
        if (!SliderService.instance) {
            SliderService.instance = new SliderService();
        }
        return SliderService.instance
    }

    getSlidersList = () => async (dispatch) => {
        try {
            await dispatch(actions.getSlidersAttempt());

            const {items} = await Client.getEntries({'content_type': 'bodyffyCarousels'});
            const homeSlider1 = sliderBuilder(items, 'sliderHome1')
            const homeSlider2 = sliderBuilder(items, 'sliderHome2')
            const homeSlider3 = sliderBuilder(items, 'sliderHome3')

            await dispatch(actions.getSlidersSuccess({homeSlider1, homeSlider2, homeSlider3}));

            return {homeSlider1, homeSlider2, homeSlider3};
        } catch (err) {
            await dispatch(actions.getSlidersFail(err));
            return err;
        }
    };

}

export default SliderService.getInstance();


function sliderBuilder(items, sliderName) {
    return items.reduce((sliders, item) => {
        if (item.fields.carouselType === sliderName) {
            sliders.push({
                links: item.fields.links.links,
                photos: item.fields.photos.map((img) => img.fields.file.url)
            })
        }

        return sliders
    }, [])
}