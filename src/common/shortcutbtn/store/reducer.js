import { fromJS } from "immutable"

import { 
    CHANGE_SHOW_BACK_TO_TOP_BTN
} from "./actions.js"

const initialState = fromJS({
    showBackToTopBtn: false
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_SHOW_BACK_TO_TOP_BTN:
            return state.set("showBackToTopBtn", payload.showBackToTopBtn);
        default:
            return state
    }
}
