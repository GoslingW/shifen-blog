import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import axios from "axios";

import {
    getGetArticlesAction
} from "../../store/actioncreators.js";

// 这里用到的是主页部分的组件
import Article from "../../../homepage/components/Article.js";
import Loading from "../../../../common/Loading/index.js";

export const Articles = (props) => {

    // 这里和主页、文章不一样，那里组件存在的时候只会获取一次。重新获取同时意味着组件卸载和装载。
    // 但这里如果重新点击相同版块，就会发生组件不卸载的情况下再次获取异步数据。
    // 而重新点击会复用 source，但是source 只能使用一次，因此每次都要重新生成
    const cancelTokenSource = axios.CancelToken.source();
    useEffect(() => {
        if (!props.collectionList) {
            const func = props.getArticles;
            func(cancelTokenSource);
        }
        return (() => {
            cancelTokenSource.cancel("取消'文章'的异步请求");
        });
    }, [props.collectionList, props.getArticles, cancelTokenSource]);

    // 条件渲染
    let element;
    if (props.collectionList === null) {
        // 优雅降级
        element = (<Loading />);
    } else if (props.collectionList.size === 0) {
        element = (<p>您目前还没有任何动态</p>);
    } else {
        element = (
            <ul>
                {props.collectionList.map((article) => {
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
        );
    }

    return element;
}

const mapStateToProps = (state) => ({
    collectionList: state.getIn(["UserPage", "collectionList"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        // 异步获取文章
        getArticles(cancelTokenSource) {
            setTimeout(() => {
                console.log("文章这里延时了500ms 用于演示懒加载");
                axios.get("/api/articles.json", { cancelToken: cancelTokenSource.token })
                    .then((res) => {
                        console.log(2);
                        if (res.data.success) {
                            const action = getGetArticlesAction(res.data.data);
                            dispatch(action);
                        } else {
                            throw console.error("请求失败");;
                        }
                    }).catch((error) => {
                        if (axios.isCancel(error)) {
                            console.log(error.message);
                        } else {
                            console.log(error);
                        }
                    });
            }, 500);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
