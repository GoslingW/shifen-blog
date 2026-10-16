import { fromJS } from "immutable";
import * as actionConstants from "./actions.js";


// 清空 collectionList
export const getClearCollectionListAction = () => ({
    type: actionConstants.CLEAR_COLLECTION_LIST
})

// 动态
export const getGetActivitiesAction = (collectionList) => ({
    type: actionConstants.GET_ACTIVITIES,
    payload: {
        collectionList: fromJS(collectionList)
    }
})

// 文章
export const getGetArticlesAction = (collectionList) => ({
    type: actionConstants.GET_ARTICLES,
    payload: {
        collectionList: fromJS(collectionList)
    }
})
// 收藏
export const getGetFavoritesAction = (collectionList) => ({
    type: actionConstants.GET_FAVORITES,
    payload: {
        collectionList: fromJS(collectionList)
    }
})
