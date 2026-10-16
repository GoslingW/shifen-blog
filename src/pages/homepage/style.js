import styled, { keyframes } from 'styled-components';

// 整个主页样式
export const StyledHomepage = styled.main`
    background-color: #f4f5f5;
    min-height: calc(100vh - 81px);
    /* 主页的主体部分 */
    & > .Homepage-main {
        width: 960px;
        margin: 0 auto;
        padding-top: 15px;
        display: grid;
        gap: 20px;
        grid-template-columns: 3fr 1fr;
    }
`;

/***********************************************************************************************
* 左边的样式
************************************************************************************************/
export const HomepageLeft = styled.div`
    display: flex;
    flex-flow: column;
    gap: 20px;

    & > img {
        background: linear-gradient(to bottom, #639bff 25%, #5b71c3 50%, #222034 75%);
        width: 705px;
        height: 300px;
        object-fit: contain;
    }
`

// 标签区域
export const StyledTopics = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    row-gap: 10px;
    column-gap: 20px;
    padding: 20px 16px;
    background-color: #fff;
`;
// 每一个标签
export const Topic = styled.button`
    display: block;
    font-size: 14px;
    line-height: 30px;

    height:32px;
    padding: 0px;
    padding-right: 10px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(38,38,38,0.75);
    cursor: pointer;

    & > img {
        float: left;
        width: 25px;
        height: 25px;
        margin-top: 2px;
        margin-left: 2px;
        margin-right: 10px;
    }    
    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }
`

// 首页文章列表
export const StyledArticles = styled.section`
    /* background-color: #fff; */
`;
// 首页文章列表 item
export const StyledArticle = styled.li`
    position: relative;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    padding: 18px 24px;
    background-color: #fff;
    &:hover {
        cursor: pointer;
        /* box-shadow: 0 0 3px rgba(0,0,0,0.2); */
        background-color: rgb(240,240,244);
        z-index: 1;
    }
    & > .text-info {
        text-decoration: none;
    }
    /* 文章作者 */
    & > .text-info > .author {
        font-size: 12px;
        color: #b2bac2;
    }
    /* 文章标题 */
    & > .text-info > .title > .title {
        display: block;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.2;
        margin: 6px 0 12px;
        color: #2e3135;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        &:visited {
            color: #909090;
        }
    }
    /* 文章描述 */
    & > .text-info > p {
        font-size: 13px;
        margin-bottom: 12px;
        color: #b2bac2;
        text-overflow: ellipsis;
    }
    /* 魔法社交按钮 */
    & > .text-info > .social > button {
        box-sizing: border-box;
        height: 26px;
        margin-left: -1px;
        padding: 0 10px;
        border: 1px solid #edeeef;
        border-radius: 2px;
        background-color: #fff;
        color: #b2bac2;
        cursor: pointer;
        & > i {
            font-size: 13px;
            line-height: 24px;
        }
        & > span {
            margin-left: 5px;
        }
        &:hover {
            background-color: #999;
            color: #f0f0f0;
        }
    }
    /*文字信息（除开图片的所有）*/
    & > .text-info {
        flex: 1;
    }
    /* 文章标题图 */
    & > img {
        flex: none;
        width: 70px;
        height: 70px;
    }
`;

// 加载更多
export const MoreArticles = styled.div`
    text-align: center;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;

    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`;
// 加载更多的 loading 动画
const LoadingAnimation = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`
// 加载更多的 loading 动画组件
export const MoreArticlesLoadingAnimation = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    background-color: rgba(0,0,0,0.1);
    & > .iconfont {
        font-size: 20px;
        display: block; /* 内联元素无法 transform */
        -webkit-animation: 0.5s linear infinite ${LoadingAnimation};
        animation: 1s ease infinite ${LoadingAnimation};
    }
`;


/***********************************************************************************************
* 右边的样式
************************************************************************************************/
export const HomepageRight = styled.aside`  
    display: flex;
    flex-flow: column;
    row-gap: 20px;
`

export const StyledAdvertisement = styled.div`
    position: relative;
    display: block;
    border: 2px solid #999;
    border-radius: 4px;
    & > a > img {
        display: block;
        width: 240px;
        height: 200px;
    }
    & > .tag {
        position: absolute; top: 0; left: 0;
        font-size: 8px;
        text-align: center;
        line-height: 19px;

        /* width: 36px; */
        height: 19px;
        margin: 5px 0 0 5px;
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 0 8px;
        background-color: rgba(0,0,0,.2);
        color: #fff;
    }
    & > i.close {
        position: absolute; top: 0; right: 0;
        font-size: 8px;
        font-weight: 800;
        margin: 5px 5px 0 0;
        color: rgba(200,200,200,0.8);
        cursor: pointer;
        &:hover {
            color: #909090;
        }
        &.hidden {
            opacity: 0;
        }
    }
`
// 推荐作者栏
export const StyledRecommendedAuthors = styled.section`
    background-color: #fff;
    & > header {
        display: block;
        padding: 12px 16px;
        line-height: 100%;
        border-bottom: 1px solid #f4f5f5;
        color: #333;
    }
`;
// 每个推荐作者
export const RecommendedAuthor = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 70px;
    padding: 12px 16px;
    & > img {
        flex: none;
        width: 46px;
        height: 46px;
        margin-right: 6px;
        border-radius: 23px; /* 高的一半就是圆形，当然 50% 也行 */
    }
    & > .data-info > .name {
        font-size: 14px;
        margin-bottom: 5px;
        color: #333;
    }
    & > .data-info > .desc {
        width: 149px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #909090;
    }
`;

export const MoreRecommendedAuthors = styled.a`
    display:block;
    font-size: 14px;
    text-align: center;
    padding: 12px 0;
    border-top: 1px solid hsla(0,0%,59.2%,.1);
    color: #007fff;
`

// 页脚，网站相关信息等（没有被细分成组件）
export const StyledFooter = styled.footer`
    font-size: 12px;
    color: #909090;
`

