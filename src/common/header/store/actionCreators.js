import * as actionConstants from "./actions.js";
import axios from "axios";
import { fromJS } from "immutable";
import localforage from "localforage";

export const getChangeFocusStateOnSearchBarAction = (payload) => ({
    type: actionConstants.CHANGE_FOCUS_STATE_ON_SEARCH_BAR,
    payload
})

// 异步获取搜索框的提示列表
export const getGetAdvisedTagListAction = () => {
    return (async (dispatch) => {
        try {
            const res = await axios.get("../api/tagList.json");
            const data = res.data.data; // 获取 tagList
            const action = {
                type: actionConstants.GET_ADVISED_TAG_LIST,
                payload: fromJS({
                    tagList: data,
                    totalPage: Math.ceil(data.length / 8)
                })
            }
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    })
}
// 搜索框的提示列表的“换一批”功能
export const getChangePageAction = (payload) => ({
    type: actionConstants.CHANGE_PAGE,
    payload // undefined，仅为了保持结构
})

export const getChangeMouseEnterStateOnSearchHintAction = (payload) => ({
    type: actionConstants.CHANGE_MOUSE_ENTER_STATE_ON_SEARCH_HINT,
    payload
})
// 点击登录显示登录组件
export const getChangeShowLoginBtn = (showLoginBtn) => ({
    type: actionConstants.CHANGE_SHOW_LOGIN_BUTTON,
    payload: {
        showLoginBtn
    }
})


// 页面刚加载的时候，使用 localforage 自动登录
export const getAutoLoginAction = () => {
    return (async (dispatch) => {
        const storageUserInfo = await localforage.getItem("userInfo");
        if (storageUserInfo) {
            console.log("已有用户信息，自动登录");
            const action = {
                type: actionConstants.LOGIN,
                payload: {
                    loginStatus: true,
                    // localforage 不能存储 immutable 数据
                    userInfo: fromJS(storageUserInfo)
                }
            }
            dispatch(action);
        }
    })
}

// 登录或者注销行为
export const getLoginAction = (loginAction) => {
    return (async (dispatch) => {
        try {
            // 登录行为
            if (loginAction === true) {
                const res = await axios.get("../api/login.json");
                const data = res.data;

                // 登录成功
                if (data.success === true) {

                    // localforage 不能存储 immutable 数据
                    const userInfo = {
                        id: data.data.id,
                        avatar: data.data.avatar,
                        name: data.data.name
                    };

                    const action = {
                        type: actionConstants.LOGIN,
                        payload: {
                            loginStatus: true,
                            userInfo: fromJS(userInfo)
                        }
                    }
                    dispatch(action);

                    // 登陆成功后设置 localForage
                    console.log("设置 localforage 的用户信息");
                    await localforage.setItem("userInfo", userInfo);

                    // 登录成功，则关闭登录组件
                    dispatch(getChangeShowLoginBtn(false));

                // 登录失败
                } else {
                    // 登录失败则不关闭登录组件
                    console.log("登录失败");
                    return;
                }

            // 注销行为
            } else {
                // 同时清除 localforage
                console.log("清除 localforage 的用户信息");
                await localforage.removeItem("userInfo");
                const action = {
                    type: actionConstants.LOGIN,
                    payload: {
                        loginStatus: false,
                        userInfo: null
                    }
                }
                dispatch(action);
            }
            // 登录和注销后都需要刷新页面
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    })
}

// 开启或关闭头像扩展栏
export const getChangeShowAvatarBox = (showAvatarBox) => {
    return (dispatch, getState) => {
        if (getState().getIn(["Header", "showAvatarBox"]) !== showAvatarBox) {
            const action = {
                type: actionConstants.CHANGE_SHOW_AVATAR_BOX,
                payload: {
                    showAvatarBox
                }
            }
            dispatch(action)
        }
    }
}

// 开启关闭导航栏状态
export const getChangeShowHeaderAction = (showHeader) => {
    return (dispatch, getState) => {
        if (getState().getIn(["Header", "showHeader"]) !== showHeader) {
            const action = {
                type: actionConstants.CHANGE_SHOW_HEADER,
                payload: {
                    showHeader
                }
            }
            dispatch(action);
        }
    };
}