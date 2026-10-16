import { fromJS } from "immutable"
import axios from "axios";

import {
    GET_INITIAL_HOME_PAGE_DATA,
    LOAD_MORE_ARTICLE,
    CHANGE_LOADING_STATE,
    CLEAR_ARTICLE_LIST
} from "./actions.js"


// 获取首页数据
export const getGetInitialHomepageDataAction = (cancelTokenSource) => {
    return ((dispatch) => {
        setTimeout(() => {
            console.log("首页数据这里延时了1000ms，用于演示懒加载");
            axios.get("./api/home.json", { cancelToken: cancelTokenSource.token })
                .then((res) => {
                    const action = {
                        type: GET_INITIAL_HOME_PAGE_DATA,
                        payload: fromJS(res.data)
                    }
                    dispatch(action);
                }).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        console.log(error);
                    }
                });
        }, 500);
    });
}


// 加载更多获取数据

export const getLoadMoreAction = () => {
    return (async (dispatch, getState) => {
        const wantedPage = getState().getIn(["Homepage", "articlePage"]) + 1;
        const res = await axios.get("./api/moreArticles.json?page=" + wantedPage);
        const data = res.data;
        const action = {
            type: LOAD_MORE_ARTICLE,
            payload: {
                data: fromJS(data.data),
                page: wantedPage
            }
        }
        dispatch(action);
        dispatch(getChangeLoadingStateAction(false));
    });
};

export const getChangeLoadingStateAction = (loading) => ({
    type: CHANGE_LOADING_STATE,
    payload: {
        loading
    }
})

export const getClearArticleListAction = () => ({
    type: CLEAR_ARTICLE_LIST
})
