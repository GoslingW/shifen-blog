// 点击登录按钮后出现的组件
import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from "../header/store/actionCreators.js";

import {
    StyledLogin,
    LoginMain
} from "./style.js";


export const Login = (props) => {
    return (
        <StyledLogin>
            <LoginMain>
                <i className="iconfont close" onClick={props.handleCloseBtn}>&#xe607;</i>
                <h1 className="title">登录</h1>
                <div className="input-box">
                    <input className="name" type="text" name="name" placeholder="请输入用户名" />
                    <input className="pwd" type="password" name="pwd" placeholder="请输入密码" />
                </div>
                <button className="login" onClick={props.handleLoginBtn}>登录</button>
            </LoginMain>
        </StyledLogin>
    )
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(["Header", "loginStatus"]) // 登录状态是 Header 的状态，用户信息是 Login 的状态
})

const mapDispatchToProps = (dispatch) => {
    return {
        // 关闭的时候，除了改变 state，还要把滚动条显示出来
        handleCloseBtn() {
            const action = actionCreators.getChangeShowLoginBtn(false);
            dispatch(action);
            // 关闭后显示滚动条
            document.documentElement.style.overflowY = "scroll";
        },
        handleLoginBtn(e) {
            e.preventDefault();
            const action = actionCreators.getLoginAction(true);
            dispatch(action);
            // 登录后显示滚动条
            document.documentElement.style.overflowY = "scroll";
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
