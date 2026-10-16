// 文字懒加载常用的加载组件，显示为一些长条，给人一种文章快加载出来的感觉

import React from 'react'

import {
    StyledLoading,
    LoadingBar
} from "./style.js";

export default function Loading() {
    return (
        <StyledLoading>
            <LoadingBar length="40"></LoadingBar>
            <LoadingBar length="100"></LoadingBar>
            <LoadingBar length="85"></LoadingBar>
            <LoadingBar length="55"></LoadingBar>
        </StyledLoading>
    )
}
