/**
 * 个人主页左下角的动态和其他 tab 有很多重复的框框
 * collection 里的正是这些小组件
 */

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
    StyledArticleCollection
} from "./style.js";

export function ArticleCollection(props) {
    const [showComment, setShowComment] = useState(false);

    function handleCommentBtn() {
        if(!showComment) {
            setShowComment(true);
        } else {
            setShowComment(false);
        }
    }

    return (
        <StyledArticleCollection>
            {/* 作者信息 */}
            <div className="author-info-box">
                <img src={props.avatar} alt="头像" />
                <div className="text-box">
                    <h1 className="name">{props.name}</h1>
                    <span>无</span>
                    <span> · </span>
                    <span>18 小时前</span>
                </div>
            </div>
            {/* 文章信息 */}
            <Link to={"/detail/1"} className="article-info-box">
                <div className="title">{props.title}</div>
                <div className="desc">
                    <p>{props.desc}</p>
                    <img src={props.titlePicUrl} alt="文章标题图片" />
                </div>
            </Link>
            {/* 互动信息 */}
            <div className="social">
                <div className="like">
                    <i className="iconfont">&#xeb7c;</i>
                    <span>{props.likes}</span>
                </div>
                <div className="comment" onClick={handleCommentBtn}>
                    <i className="iconfont">&#xe8b4;</i>
                    <span>{props.comments}</span>
                </div>
                <div className="share">
                    <i className="iconfont">&#xe60b;</i>
                    <span>分享</span>
                </div>
            </div>
            {showComment
                ? (
                    <div className="comment-span">
                        评论
                    </div>
                )
                : (null)
            }
        </StyledArticleCollection>
    )
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(ArticleCollection);
