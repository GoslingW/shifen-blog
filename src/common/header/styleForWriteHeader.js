// 写文章网页的导航栏（WriteHeader 组件）和其他地方不一样
// 而且 style.js 实在太长了
// 因此 WriteHeader 组件的样式在这里写

import styled from "styled-components";


export const StyledWriteHeader = styled.header`
    box-sizing: border-box;
    position: fixed; top: 0px; left: 0;
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 17px;
    border-bottom: 1px solid #ddd;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.05);
    color: #999;
    background-color: #fff;
    z-index: 998; /*仅次于登陆弹窗*/

    /* 标题输入框 */
    & > #title {
        flex: 1;
        height: 100%;
        font-size: 24px;
        font-weight: 700;
        border: 0;
        padding: 0;
        outline: none;
        color: #000;
    }
    /* 草稿 */
    & > .draft {
        padding: 0 14.4px;
        color: #ddd;
        & > .draft-state {

        }
        & > a {
            margin-left: 6.4px;
            padding: 3.2px 6.4px;
            color: inherit;
            text-decoration: none;
            border: 1px solid #ddd;
            border-radius: 2px;
        }
    }
    /* 标题大图 */
    & > .titleImage {
        padding: 0 14.4px;
    }
    /* 发布 */
    & > .publish {
        padding: 0 14.4px;
        color: #007fff;
        cursor: pointer;
    }
`;