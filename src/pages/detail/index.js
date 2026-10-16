import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import axios from "axios";

import {
    getGetArticleAction
} from "./store/actionCreators.js";


import MainArticle from "./components/MainArticle.js";
import AuthorInfo from "./components/AuthorInfo.js";
import RelatedArticles from "./components/RelatedArticles.js";

import {
    StyledDetail,
    DetailLeft,
    DetailRight
} from "./style.js";

export const Detail = (props) => {

    const cancelTokenSourceRef = useRef(axios.CancelToken.source())

    // 进入页面时加载异步数据
    useEffect(() => {
        const cancelTokenSource = cancelTokenSourceRef.current;
        const func = props.getArticle;
        func(cancelTokenSource);
        return () => {
            cancelTokenSource.cancel("中止 detail 页面的所有异步请求");
        }
    }, [props.getArticle, cancelTokenSourceRef]);

    return (
        <StyledDetail>
            <div className="detail-main">
                <DetailLeft>
                    <MainArticle />
                </DetailLeft>
                <DetailRight>
                    <AuthorInfo />
                    <RelatedArticles />
                </DetailRight>
            </div>
        </StyledDetail>
    )
}

const mapStateToProps = (state) => ({
    article: state.getIn(["Detail", "article"]),
    articleMeta: state.getIn(["Detail", "articleMeta"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle(cancelTokenSource) {
            dispatch(getGetArticleAction(cancelTokenSource));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
