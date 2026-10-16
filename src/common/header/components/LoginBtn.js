// 登录按钮和登录后的头像扩展栏
// 自动登录在 Header 里
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actionCreators from "../store/actionCreators.js";
import { getClearCollectionListAction } from "../../../pages/userpage/store/actioncreators.js";

import {
    NavAddition,
    AvatarItems,
    AvatarItem
} from "../style.js";

export const LoginBtn = (props) => {

    // 点击文档的所有地方都会关闭头像扩展栏
    useEffect(() => {
        document.onclick = () => {
            const func = props.handleAvatarBtnClose;
            func();
        }
    }, [props.handleAvatarBtnClose])

    return (
        // 如果登录，则显示头像，消息等功能按钮
        // 因为外层元素绑定了关闭扩展栏的时间，这里要阻止点击事件冒泡，以免关闭扩展栏
        <React.Fragment>
            {props.loginStatus
                // 如果登录了，显示头像
                ? (
                    <NavAddition className="avatar">
                        <img src={props.userInfo.get("avatar")} alt="头像" onClick={props.handleAvatarBtnToggle} />
                        {/* 头像扩展栏 */}
                        {props.showAvatarBox
                            ? (
                                <AvatarItems className="avatar-function">
                                    {/* 第一区块 */}
                                    <AvatarItem>
                                        <Link to="/write">
                                            <i className="iconfont">&#xe652;</i>
                                            写文章
                                        </Link>
                                        <Link to="." style={{ opacity: 0.3 }}>
                                            <i className="iconfont">&#xe643;</i>
                                            草稿
                                        </Link>
                                    </AvatarItem>
                                    {/* 第二区块 */}
                                    <AvatarItem>

                                        <Link
                                            to={"/userpage/" + props.userInfo.get("id")}
                                            onClick={props.clearCollectionList}
                                        >
                                            <i className="iconfont">&#xe603;</i>
                                            我的主页
                                        </Link>

                                        <Link to={"/userpage/" + props.userInfo.get("id") + "/likes"} style={{ opacity: 0.3 }}>
                                            <i className="iconfont">&#xe60c;</i>
                                            我赞过的
                                        </Link>
                                        
                                        <Link
                                            to={"/userpage/" + props.userInfo.get("id") + "/favorites"}
                                            onClick={props.clearCollectionList}
                                        >
                                            <i className="iconfont">&#xe630;</i>
                                            我的收藏
                                        </Link>
                                    </AvatarItem>
                                    {/* 第三区块 */}
                                    <AvatarItem>
                                        <Link to={`/setting/${props.userInfo.get("id")}/profile`}><i className="iconfont">&#xe654;</i>设置</Link>
                                        <Link to="." style={{ opacity: 0.3 }}><i className="iconfont">&#xe622;</i>关于</Link>
                                    </AvatarItem>
                                    {/* 第四区块 */}
                                    <AvatarItem>
                                        <Link to="/" onClick={props.handleLogoutBtn}>
                                            <i className="iconfont">&#xe621;</i>
                                            登出
                                        </Link>
                                    </AvatarItem>
                                </AvatarItems>
                            )
                            : null
                        }
                    </NavAddition>
                )
                : (
                    // 如果没登录，则显示登录按钮
                    <NavAddition className="login">
                        <button onClick={props.handleLoginBtn}>登录</button>
                    </NavAddition>
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    showAvatarBox: state.getIn(["Header", "showAvatarBox"]),
    loginStatus: state.getIn(["Header", "loginStatus"]),
    userInfo: state.getIn(["Header", "userInfo"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        // 注销
        handleLogoutBtn() {
            dispatch(actionCreators.getLoginAction(false));
            dispatch(actionCreators.getChangeShowAvatarBox());  /* 注销的时候也要把扩展栏一同关闭 
                                                                   不然下次登录扩展栏还保持开启状态 */
        },
        // 显示登录组件，隐藏滚动条
        handleLoginBtn() {
            dispatch(actionCreators.getChangeShowLoginBtn(true));
            document.documentElement.style.overflowY = "hidden";
        },
        // 开启/关闭头像扩展栏
        // 开启的时候会关闭扩展栏，关闭的时候会打开扩展栏
        // 点击头像时用
        handleAvatarBtnToggle(e) {
            dispatch(actionCreators.getChangeShowAvatarBox("toggle"));
            e.stopPropagation();
        },
        // 关闭头像扩展栏
        // 任何时候都是关闭扩展栏
        // 点击头像以外的区域时用
        handleAvatarBtnClose() {
            dispatch(actionCreators.getChangeShowAvatarBox(false));
        },

        // 这里要用到 userpage 组件的 actionCreator
        clearCollectionList() {
            // 改变版块前，要清空 collectionList 为 null，这样下个板块才会显示懒加载样式
            dispatch(getClearCollectionListAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn)
