/**
 * 个人主页左下角的动态和其他 tab 有很多重复的框框
 * collection 里的正是这些小组件
 */

import React from 'react'

import {
    StyledFollowTopicCollection
} from "./style.js";

export default function FollowTopicCollection(props) {
    return (
        <StyledFollowTopicCollection>
            {/* 作者信息 */}
            <div className="author-info-box">
                <img src={props.avatar} alt="头像" />
                <div className="text-box">
                    <h1 className="name">
                        {props.name}
                        <span className="did-what">关注了标签</span>
                        <img className="target-image" src={props.targetImg} alt="像素画标签" />
                        <span className="target-name">{props.targetName}</span>
                    </h1>
                    <span>无</span>
                    <span> · </span>
                    <span>18 小时前</span>
                </div>
            </div>
        </StyledFollowTopicCollection>
    )
}
