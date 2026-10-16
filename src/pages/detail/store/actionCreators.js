import { fromJS } from "immutable";
import axios from "axios";

import {
    GET_ARTICLE,
    GET_ARTICLE_META
} from "./actions.js";

export const getGetArticleAction = (cancelTokenSource) => {

    return ((dispatch) => {
        setTimeout(() => {
            axios.get("../api/articleDetails/articleMeta.json", { cancelToken: cancelTokenSource.token })
                .then((res) => {
                    if (res.data.success) {
                        const action = {
                            type: GET_ARTICLE_META,
                            payload: {
                                articleMeta: fromJS(res.data.data)
                            }
                        }
                        dispatch(action);
                    }
                })
        }, 300);
        setTimeout(() => {
            axios.get("../api/articleDetails/article.md", { cancelToken: cancelTokenSource.token })
                .then((res) => {
                    const action = {
                        type: GET_ARTICLE,
                        payload: {
                            article: res.data
                        }
                    }
                    dispatch(action);
                })
        }, 500);

    })
}
