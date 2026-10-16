import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

import { getClearCollectionListAction } from "../../../pages/userpage/store/actioncreators.js";

import LoginBtn from "./LoginBtn.js";

// header 组件里的所有样式(不包括登录组件)
import {
    StyledNormalHeader,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchHint,
    NavSearchHintTag,
    NavAddition
} from "../style.js";

import * as actionCreators from "../store/actionCreators.js";

// 自定义的节流函数
function throttle(func, delay) {
    let time;
    let timer;
    return function () {
        let currentTime = new Date().getTime();
        let _this = this;
        let _args = arguments;
        // 此时 this 为 window，这是正常的，因为监听函数被加在 window 上
        if (!time || (currentTime - time) >= delay) {
            func.apply(_this, _args)
            time = currentTime;
        } else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                // 其实这次刚好可以不用 _this，因为碰巧就是要加在 window 上
                func.apply(_this, _args)
            }, delay)
        }
    };
}

export const NormalHeader = (props) => {

    // 导航栏的滚动事件
    useEffect(() => {
        const func = throttle(props.handleShowHeader, 100);
        window.addEventListener("scroll", func);
        return () => {
            window.removeEventListener("scroll", func);
        }
    }, [props.handleShowHeader])

    const spin = useRef(null); // 搜索提示框的"换一批"的旋转 icon
    // 获取搜索提示框的标签们
    useEffect(() => {
        const func = props.getAdvisedTagList; // 分开写纯粹为了去除警告
        func();
    }, [props.getAdvisedTagList]) // 不能依赖 tagList
    
    // 因为 getAdvisedTagList 会改变 tagList，**这样会无限运行**
    // 获取搜索框推荐标签
    function getAdvisedTagList() {
        const { tagList } = props;
        const page = props.page % props.totalPage; // page 取模
        const shownTagList = tagList.slice(page * 8, (page + 1) * 8); // end 超过了会被无视所以不用担心
        if (props.searchFocus || props.mouseEnter) {
            return (
                <NavSearchHint
                    onMouseEnter={props.handleMouseEnter}
                    onMouseLeave={props.handleMouseLeave}
                >
                    <p className="advised">
                        推荐搜索
                        <span className="change-tag" onClick={() => { props.handleChangePage(spin.current) }}>
                            <i
                                className="iconfont spin"
                                ref={spin}
                            >
                                &#xe851;
                            </i>
                            换一批
                        </span>
                    </p>
                    <ul className="search-hint-tag-list">
                        {shownTagList.map((tag) => {
                            return (<NavSearchHintTag key={tag}>{tag}</NavSearchHintTag>)
                        })}
                    </ul>
                </NavSearchHint>
            );
        } else {
            return null;
        }
    }

    // 渲染
    return (
        <React.Fragment>
            <CSSTransition
                in={props.showHeader}
                timeout={200}
                classNames="header-appear"
            >
                <StyledNormalHeader>
                    <Nav>
                        <Logo>
                            <Link to="/" alt="logo">
                                <h1>Oyishyi 的博客</h1>
                            </Link>
                        </Logo>
                        <Link to="/">
                            <NavItem className="left homepage">首页</NavItem>
                        </Link>
                        <NavItem className="left">占位1</NavItem>
                        <NavItem className="left">占位2</NavItem>

                        {/* 左右浮动分割线 */}

                        {/* 登录按钮 */}
                        <LoginBtn />
                        {/* 消息按钮只有登录时显示 */}
                        {props.loginStatus
                            ? (
                                <NavAddition className="msg">
                                    <i className="iconfont">&#xe602;</i>
                                </NavAddition>
                            )
                            : null
                        }

                        {/* 写文章 */}
                        <NavAddition className="write-article">
                            {props.loginStatus
                                // 登录的话点击跳转到响应界面
                                ? (
                                    <Link to="/write">
                                        <button className="article">
                                            <i className="iconfont">&#xe615;</i>
                                        写文章
                                    </button>
                                    </Link>
                                )
                                // 未登录的话，点击弹出登录组件
                                : (
                                    <button className="article" onClick={props.handleLoginBtn}>
                                        <i className="iconfont">&#xe615;</i>
                                    写文章
                                    </button>
                                )
                            }

                            <button className="more">
                                <i className="iconfont">&#xe629;</i>
                            </button>
                        </NavAddition>

                        <NavSearch>
                            <input type="search"
                                maxLength="32"
                                placeholder="探索本站"
                                onFocus={props.handleFocus}
                                onBlur={props.handleBlur}
                            />
                            {getAdvisedTagList()}
                        </NavSearch>
                        <NavItem className="right">活动</NavItem>
                    </Nav>
                </StyledNormalHeader>
            </CSSTransition>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        searchFocus: state.getIn(["Header", "searchFocus"]), // 连续 get 可以通过 getIn 简写
        mouseEnter: state.getIn(["Header", "mouseEnter"]),
        tagList: state.getIn(["Header", "tagList"]),
        page: state.getIn(["Header", "page"]),
        totalPage: state.getIn(["Header", "totalPage"]),
        loginStatus: state.getIn(["Header", "loginStatus"]),
        showHeader: state.getIn(["Header", "showHeader"])
    }
}

const mapDispatchToProps = (dispatch) => {

    let lastScroll = 0; // 导航栏滚动处理函数需要

    return {
        // 广告的鼠标事件
        handleMouseEnter() {
            dispatch(actionCreators.getChangeMouseEnterStateOnSearchHintAction(true));
        },
        handleMouseLeave() {
            dispatch(actionCreators.getChangeMouseEnterStateOnSearchHintAction(false));
        },
        // 搜索框动画
        handleFocus(e) {
            e.target.placeholder = "搜索项目/像素画";
            dispatch(actionCreators.getChangeFocusStateOnSearchBarAction(true));
        },
        handleBlur(e) {
            e.target.placeholder = "探索本站";
            const action = actionCreators.getChangeFocusStateOnSearchBarAction(false);
            dispatch(action);
        },
        // 异步获取搜索框的提示列表
        getAdvisedTagList() {
            dispatch(actionCreators.getGetAdvisedTagListAction());
        },
        // 搜索框的提示列表的“换一批”动画以及功能
        handleChangePage(spin) { // 已经 current 过了
            let deg = spin.style.transform.replace(/[^0-9]/ig, "");
            if (deg === "") {
                spin.style.transform = `rotate(${360}deg)`;
            } else {
                deg = Number(deg);
                spin.style.transform = `rotate(${deg + 360}deg)`;
            }
            dispatch(actionCreators.getChangePageAction());
        },
        // 未登录时点击写文章会要求登录
        handleLoginBtn() {
            dispatch(actionCreators.getChangeShowLoginBtn(true));
            document.documentElement.style.overflowY = "hidden";
        },
        // 导航栏滚动处理函数，决定是否显示导航栏
        handleShowHeader() {
            const scrollTop = document.documentElement.scrollTop;
            let up;
            if (scrollTop < lastScroll) {
                up = true;
            } else if (scrollTop > lastScroll) {
                up = false;
            } else { // 防止节流函数的最后一次运行改变状态
                return;
            }

            lastScroll = scrollTop; // 闭包

            if (!up && scrollTop > 500) {
                const action = actionCreators.getChangeShowHeaderAction(false);
                dispatch(action);
            } else {
                const action = actionCreators.getChangeShowHeaderAction(true);
                dispatch(action);
            }
        },
        // 清理 userpage 的 colletionList，否则下次进入 userpage 的时候数据不会刷新
        clearCollectionList() {
            dispatch(getClearCollectionListAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalHeader)
