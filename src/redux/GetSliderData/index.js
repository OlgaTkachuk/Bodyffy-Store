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
            const response = await Client.getEntries({
                'content_type': 'bodyffyCarousels',
            });
            console.log(response, "RRRRRR");

            const homeSlider1 = response.items.reduce((sliders, item) => {
                if (item.fields.carouselType === 'sliderHome1') {
                    sliders.push({
                        links: item.fields.links.links,
                        photos: item.fields.photos.reduce((imgArr, img) => {
                            imgArr.push(img.fields.file.url)
                            return imgArr
                        }, [])
                    })
                }
                return sliders
            }, [])

            const homeSlider2 = response.items.reduce((sliders, item) => {
                if (item.fields.carouselType === 'sliderHome2') {
                    sliders.push({
                        links: item.fields.links.links,
                        photos: item.fields.photos.reduce((imgArr, img) => {
                            imgArr.push(img.fields.file.url)
                            return imgArr
                        }, [])
                    })
                }
                return sliders
            }, [])
            console.log(homeSlider1, "SSSSSSSSS1111111");
            console.log(homeSlider2, "SSSSSSSSS1222222222");

            await dispatch(actions.getSlidersSuccess({homeSlider1, homeSlider2}));
            return {
                homeSlider1, homeSlider2
            };
        } catch (err) {
            await dispatch(actions.getSlidersFail(err));
            return err;
        }
    };

}

export default SliderService.getInstance();