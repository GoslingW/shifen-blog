import {
    CHANGE_SHOW_BACK_TO_TOP_BTN
} from "./actions.js"


export const getChangeShowBackToTopBtnAction = (showBackToTopBtn) => {
    return (dispatch, getState) => {
        // 仅当不一样的时候改变状态，节省一些执行 reducer 的性能
        if (getState().getIn(["ShortcutBtn", "showBackToTopBtn"]) !== showBackToTopBtn) {
            const action = {
                type: CHANGE_SHOW_BACK_TO_TOP_BTN,
                payload: {
                    showBackToTopBtn
                }
            }
            dispatch(action);
        }
    }
}
