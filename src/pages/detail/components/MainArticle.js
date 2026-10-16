import React from 'react'
import { connect } from 'react-redux'

import ReactMarkdown from 'react-markdown/with-html'
import gfm from "remark-gfm"
import { renderers } from "../../../common/markdown/renderers.js";

import {
    StyledMainArticle,
    AuthorInfoInArticle,
    MainContent
} from "../style.js";


export const MainArticle = (props) => {

    // 判断用户和文章作者是否同一人
    // 没有数据库，暂时用名字来判断
    let samePerson;
    if (props.userInfo && props.articleMeta && (props.userInfo.get("name") === props.articleMeta.getIn(["author", "name"]))) {
        samePerson = true;
    } else {
        samePerson = false;
    }

    // 由于 immutable 数据获取代码太长，这里全部存到变量里
    let articleCreatedTime, articleReads;
    let authorName, authorAvatar;
    if (props.articleMeta) {
        articleCreatedTime = props.articleMeta.get("articleCreatedTime");
        articleReads = props.articleMeta.get("articleReads")
        authorName = props.articleMeta.getIn(["author", "name"]);
        authorAvatar = props.articleMeta.getIn(["author", "avatar"]);
    }

    return (
        <StyledMainArticle>
            <AuthorInfoInArticle className="author-info">
                <img src={authorAvatar} alt="头像" />
                <div className="data-info">
                    <div className="name">{authorName}</div>
                    <div className="meta-box">
                        <time>{articleCreatedTime}</time>
                        <span className="view-counts">阅读 {articleReads}</span>
                        {/* 只有文章用户才能编辑 */}
                        {samePerson
                            ? (
                                <React.Fragment>
                                    <span className="dot">·</span>
                                    <span className="edit-btn">编辑</span>
                                </React.Fragment>
                            )
                            : null
                        }
                    </div>
                </div>
            </AuthorInfoInArticle>

            {/* markdown 被解析为 html */}
            <MainContent className="main-content">
                <ReactMarkdown
                    source={props.article}
                    // gfm 可以帮助识别 github flavored markdown 语法的删除，列表，表格，网址
                    plugins={[gfm]}
                    renderers={renderers}
                    allowDangerousHtml
                />
            </MainContent>
        </StyledMainArticle>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"]),
    article: state.getIn(["Detail", "article"]),
    articleMeta: state.getIn(["Detail", "articleMeta"])
})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArticle)
