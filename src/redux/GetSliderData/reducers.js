import {GET_SLIDERS_ATTEMPT, GET_SLIDERS_FAIL, GET_SLIDERS_SUCCESS} from "./constants";

const initialState = {
    homeSlider1: [],
    homeSlider2: [],
    error: '',
    isFetching: false
}

export function getSlidersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SLIDERS_FAIL:
            return {...state, error: action.payload.message, isFetching: false}
        case GET_SLIDERS_ATTEMPT:
            return {...state, isFetching: true}
        case GET_SLIDERS_SUCCESS:
            return {...state, homeSlider1: action.payload.homeSlider1, homeSlider2: action.payload.homeSlider2}
        default:
            return state
    }
}