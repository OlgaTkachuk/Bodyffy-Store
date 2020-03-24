export const updateWindowSize = width => dispatch => {
    let screen = null;
    if (width < 600) {
        screen = 'small';
    } else if (width >= 600 && width < 900 ) {
        screen = 'medium';
    } else if (width >= 900) {
        screen = 'wide';
    }
    // } else {
    //
    // }
    dispatch({ type: "UPDATING_WINDOW_SIZE", width });
    dispatch({ type: "UPDATING_SCREEN_WIDTH", screen });
}
