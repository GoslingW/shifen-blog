import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as actionCreators from "./store/actionCreators.js";

import NormalHeader from "./components/NormalHeader.js";
import WriteHeader from "./components/WriteHeader.js";
import Login from "../login/index.js"; // 点击登录按钮唤出的登录组件，在 header 文件夹外面


export function Header(props) {

    // 自动登录
    useEffect(() => {
        const func = props.handleAutoLogin;
        func()
    }, [props.handleAutoLogin])

    return (
        <React.Fragment>
            <Switch>
                {/* 写文章页面的导航栏和其他的不一样 */}
                <Route path="/write" exact component={WriteHeader} />
                <Route path="/" component={NormalHeader} />
            </Switch>
            {/* 登录页面没有 url，而是一个组件 */}
            {props.showLoginBtn ? <Login /> : null}
        </React.Fragment>
    )
}

export const mapStateToProps = (state) => ({
    showLoginBtn: state.getIn(["Header", "showLoginBtn"])
})

export const mapDispatchToProps = (dispatch) => {
    return {
        // 自动登录
        handleAutoLogin() {
            dispatch(actionCreators.getAutoLoginAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)