import {
    CHANGE_PREVIEW
} from "./actions.js";

export const getChangePreviewAction = (previewContent) => ({
    type: CHANGE_PREVIEW,
    payload: {
        previewContent
    }
})