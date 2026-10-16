import * as actionConstants from "./actions.js";
import { fromJS } from "immutable";

const initialState = fromJS({
    collectionList: null
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        // 清空 collectionList
        case actionConstants.CLEAR_COLLECTION_LIST:
            return state.set("collectionList", null);
        // 动态
        case actionConstants.GET_ACTIVITIES:
            return state.set("collectionList", payload.collectionList);
        // 文章
        case actionConstants.GET_ARTICLES:
            return state.set("collectionList", payload.collectionList);
        // 收藏
        case actionConstants.GET_FAVORITES:
            return state.set("collectionList", payload.collectionList);

        default:
            return state
    }
}
