import * as actionTypes from '../actions/actions'

export const initialState = {
    slider_number: (window.innerWidth < 760) ? 1 : 3,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATING_SCREEN_WIDTH": {
            if (action.screen === 'small') {
                return{
                    slider_number: 1
                }
            }else if (action.screen === 'medium') {
                return{
                    slider_number: 2
                }

            } else if (action.screen === 'wide') {
                return{
                    slider_number: 3
                }

            }
        }
        default: {
            return state;
        }
    }

}

