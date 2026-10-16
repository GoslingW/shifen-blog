import React, { useEffect, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'

import ReactMarkdown from "react-markdown/with-html";
import { useAuth } from '../../auth';
import gfm from "remark-gfm"
import { renderers } from "../../common/markdown/renderers.js";


import {
    getChangePreviewAction
} from "./store/actionCreators.js";

import {
    StyledWrite
} from "./style.js";

// 自定义防抖函数
function debounce(func, delay) {
    let timer;
    return function () {
        let that = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(that, args);
        }, delay);
    }
}

export const Write = (props) => {

    const dispatch = useDispatch();
    const {user} = useAuth();

    // 去掉最外层的滚动栏
    useEffect(() => {
        document.documentElement.style.overflowY = "hidden";
        return () => {
            document.documentElement.style.overflowY = "scroll";
        }
    }, [])

    // 清空文章数据
    useEffect(() => {
        return () => {
            dispatch(getChangePreviewAction(""));
        }
    }, [dispatch])

    // 实时渲染
    const editRef = useRef(null);
    const previewRef = useRef(null);
    function handleInstantRender(e) {
        dispatch(getChangePreviewAction(e.target.innerText));
        handleEditScroll();
    }
    // 同步滚动
    function handleEditScroll() {
        const editContentHeight = editRef.current.scrollHeight;
        const editContainerHeight = editRef.current.offsetHeight;
        const previewContentHeight = previewRef.current.scrollHeight;
        const previewContainerHeight = previewRef.current.offsetHeight;
        const scale = (previewContentHeight - previewContainerHeight) / (editContentHeight - editContainerHeight);
        // 当右方不能滚动的时候，计算scale的分母会为0，scale会为 infinity 或者 NaN（分子分母都为0），不过反正此时也没必要滚动
        if (scale) {
            const previewPosition = (editRef.current.scrollTop * scale);
            previewRef.current.scrollTo(0, previewPosition);
        }
    }

    let element;
    if (!user) {
        // 未登录的时候，通过更改网址进入到这个页面的时候
        element = (
            <div style={{ marginTop: "61px" }}>您还没有登录</div>
        );
    } else {
        element = (
            <StyledWrite>
                <div
                    className="edit"
                    contentEditable="plaintext-only"
                    spellCheck={false}
                    // 防抖
                    onInput={debounce(handleInstantRender, 200)}
                    onScroll={handleEditScroll}
                    // 关闭 grammarly
                    data-gramm={false}
                    ref={editRef}
                ></div>
                <div className="preview" ref={previewRef}>
                    <ReactMarkdown
                        source={props.previewContent}
                        plugins={[gfm]}
                        renderers={renderers}
                        allowDangerousHtml
                    />
                </div>
            </StyledWrite>
        );
    }
    return element;
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(["Header", "loginStatus"]),
    previewContent: state.getIn(["Write", "previewContent"])
})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)
