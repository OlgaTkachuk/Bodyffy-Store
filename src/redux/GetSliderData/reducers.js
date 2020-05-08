import {GET_SLIDERS_ATTEMPT, GET_SLIDERS_FAIL, GET_SLIDERS_SUCCESS} from "./constants";

const initialState = {
    homeSlider1: [],
    homeSlider2: [],
    homeSlider3: [],
    error: '',
    isFetching: false
}

export function getSlidersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SLIDERS_FAIL:
            return {...state, isFetching: false, error: action.payload}
        case GET_SLIDERS_ATTEMPT:
            return {...state, isFetching: true}
        case GET_SLIDERS_SUCCESS:
            return {
                ...state,
                homeSlider1: action.payload.homeSlider1,
                homeSlider2: action.payload.homeSlider2,
                homeSlider3: action.payload.homeSlider3
            }
        default:
            return state
    }
}