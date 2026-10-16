// 主页的文章组件
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import axios from "axios";

import {
    getGetInitialHomepageDataAction,
    getLoadMoreAction,
    getChangeLoadingStateAction,
    getClearArticleListAction
} from "../store/actionCreators.js";

// 文章框框单独拿出来作为组件，个人主页里需要
import Article from "./Article.js";

import Loading from "../../../common/Loading/index.js";


import {
    StyledArticles,
    MoreArticles,
    MoreArticlesLoadingAnimation
} from "../style.js";


export const Articles = (props) => {

    const cancelTokenSourceRef = useRef(axios.CancelToken.source());

    useEffect(() => {
        const cancelTokenSource = cancelTokenSourceRef.current;
        const func = props.getInitialHomepageData;
        func(cancelTokenSource);
        return (() => {
            cancelTokenSource.cancel("中止首页文章的异步请求");
        });
    }, [props.getInitialHomepageData, cancelTokenSourceRef])

    // 每次进入主页时清空列表，不然还保留着上次的文章记录
    // 不过即使不要下面这段，数据依然会更新就是了，只是说更新前还会保持原来的数据
    useEffect(() => {
        const func = props.clearArticleList;
        func();
    }, [props.clearArticleList])


    let element;
    if (props.articleList.size === 0) {
        element = (<Loading />);
    } else {
        element = (
            <StyledArticles>
                <ul>
                    {props.articleList.map((article) => {
                        return (
                            <Article
                                key={article.get("id")}
                                id={article.get("id")}
                                author={article.get("author")}
                                time={article.get("time")}
                                tag={article.get("tag")}
                                title={article.get("title")}
                                desc={article.get("desc")}
                                titlePicUrl={article.get("titlePicUrl")}
                            />
                        );
                    })}
                </ul>
                {/* 加载更多 */}
                {props.loading
                    ? (
                        <MoreArticlesLoadingAnimation>
                            <i className="iconfont">&#xe668;</i>
                        </MoreArticlesLoadingAnimation>
                    )
                    : (<MoreArticles onClick={props.handleLoadMoreClick}>加载更多···</MoreArticles>)
                }
            </StyledArticles>
        );
    }

    return element;
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(["Homepage", "articleList"]),
    loading: state.getIn(["Homepage", "loading"]),
})

const mapDispatchToProps = (dispatch) => {
    return ({
        // 获取主页起始所需所有数据
        getInitialHomepageData(cancelTokenSource) {
            const action = getGetInitialHomepageDataAction(cancelTokenSource);
            dispatch(action)
        },
        handleLoadMoreClick() {
            dispatch(getChangeLoadingStateAction(true));
            dispatch(getLoadMoreAction());
        },
        clearArticleList() {
            dispatch(getClearArticleListAction());
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
