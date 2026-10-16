import {
    GET_ARTICLE,
    GET_ARTICLE_META
} from "./actions.js";
import { fromJS } from "immutable";

const initialState = fromJS({
    article: "",
    articleMeta: null
})

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_ARTICLE:
        return state.set("article", payload.article);
    case  GET_ARTICLE_META:
        return state.set("articleMeta", payload.articleMeta);
    default:
        return state
    }
}


