import { fromJS } from "immutable";

import {
    CHANGE_PREVIEW
} from "./actions.js";

const initialState = fromJS({
    previewContent: ""
})

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case CHANGE_PREVIEW:
            return state.set("previewContent", payload.previewContent);
        default:
            return state;
    }
}
