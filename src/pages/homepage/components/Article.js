/**
 * 除了首页，个人主页等地方也会用到，因此抽离出为单独的组件
 * 和 userpage 的不一样的地方是：这里的样式还是 homepage 的总样式
 * 为了一个复用组件，把样式单独抽离出来实在是感觉过度分解了
 */

import React from 'react'
import { Link } from 'react-router-dom'

import {
    StyledArticle
} from "../style.js";

// 详情页面的网址前缀
const HASH_DETAIL_URL = "/#/detail/"; // 使用 window.open 的话，要手动加 hashtag
const DETAIL_URL = "/detail/";  // 使用 Link 的话，不用加，或者说不能加，不然就有两个 #，页面跳转错误

export default function Article(props) {
    function handleStopPropagation(e) {
        e.stopPropagation();
    }
    return (
        <StyledArticle
            onClick={() => { window.open(HASH_DETAIL_URL + props.id); }}
        >
            <span className="text-info">
                <div className="author">
                    {props.author} · {props.time} · {props.tag}
                </div>
                {/* 在 parents 元素上让 Link 的点击事件停止传播 */}
                <div className="title" onClick={handleStopPropagation}>
                    <Link
                        className="title"
                        to={DETAIL_URL + props.id}
                        target="_blank"
                    >
                        {props.title}
                    </Link>
                </div>
                <p>{props.desc}</p>
                {/* 点击 button 的时候不需要进入网页 */}
                <span className="social" onClick={handleStopPropagation}>
                    <button>
                        <i className="iconfont">&#xe60c;</i>
                        <span>点赞</span>
                    </button>
                    <button>
                        <i className="iconfont">&#xe63a;</i>
                        <span>评论</span>
                    </button>
                    <button><i className="iconfont">&#xe6d1;</i></button>
                </span>
            </span>
            <img src={props.titlePicUrl} alt="标题图" />
        </StyledArticle>
    )
}
