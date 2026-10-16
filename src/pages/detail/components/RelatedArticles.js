import React from 'react'
import { connect } from 'react-redux'

import {
    StyledRelatedArticles,
    RelatedArticleItem
} from "../style.js"

export const RelatedArticles = (props) => {
    return (
        <StyledRelatedArticles>
            <div className="title">相关文章</div>
            <RelatedArticleItem>
                <div className="title">前端学习笔记（二）解决解决军军军军军军军军军军军军军军</div>
                <div className="status-info">
                    <span className="like">
                        <i className="iconfont">&#xe60c;</i>
                        <span>6</span>
                    </span>
                    <span className="comment">
                        <i className="iconfont">&#xe63a;</i>
                        <span>0</span>
                    </span>
                </div>
            </RelatedArticleItem>
        </StyledRelatedArticles>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedArticles)
