import {
    GET_SLIDERS_ATTEMPT,
    GET_SLIDERS_SUCCESS,
    GET_SLIDERS_FAIL,
} from "./constants";

const getSlidersAttempt = () => ({
    type: GET_SLIDERS_ATTEMPT
});

const getSlidersSuccess = (payload) => ({
    type: GET_SLIDERS_SUCCESS,
    payload
});
const getSlidersFail = () => ({
    type: GET_SLIDERS_FAIL,
});


export default {
    getSlidersAttempt,
    getSlidersSuccess,
    getSlidersFail
}