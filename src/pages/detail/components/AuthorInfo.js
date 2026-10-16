import React from 'react'
import { connect } from 'react-redux'

import {
    StyledAuthorInfo,
    StatusItem
} from "../style.js";


export const AuthorInfo = (props) => {

    let authorName, authorDesc, authorAvatar, authorLikes, authorReads;
    if (props.articleMeta) {
        authorName = props.articleMeta.getIn(["author", "name"]);
        authorDesc = props.articleMeta.getIn(["author", "desc"]);
        authorAvatar = props.articleMeta.getIn(["author", "avatar"]);
        authorLikes = props.articleMeta.getIn(["author", "likes"]);
        authorReads = props.articleMeta.getIn(["author", "reads"]);
    }

    return (
        <StyledAuthorInfo>
            <div className="title">关于作者</div>
            <div className="base-info">
                <img src={authorAvatar} alt="头像" />
                <div className="data-box">
                    <p className="name">{authorName}</p>
                    <p className="desc">{authorDesc}</p>
                </div>
            </div>
            <StatusItem>
                <i className="iconfont">&#xe60c;</i>
                <span className="status">获得点赞 {authorLikes}</span>
            </StatusItem>
            <StatusItem>
                <i className="iconfont">&#xe633;</i>
                <span className="status">文章被阅读 {authorReads}</span>
            </StatusItem>
        </StyledAuthorInfo>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"]),
    articleMeta: state.getIn(["Detail", "articleMeta"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorInfo)
