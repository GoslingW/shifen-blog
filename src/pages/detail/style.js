import styled from "styled-components";


export const StyledDetail = styled.main`
    padding-top: 20px;
    background-color: #f4f5f5;
    min-height: calc(100vh - 81px);
    & > .detail-main {
        width: 960px;
        margin: 0 auto;
        display: grid;
        gap: 20px;
        grid-template-columns: 3fr 1fr;
    }
`;


/**************************************************************************************************
 * 左边栏的样式
 **************************************************************************************************/
export const DetailLeft = styled.div`
    width: 100%;
`

// 页面懒加载的样式
export const StyledLazyLoading = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 3fr 1fr;
`;

export const StyledMainArticle = styled.div`
    padding: 24px 24px 0 24px;
    background-color: #fff;
`

// 文章部分的作者信息
export const AuthorInfoInArticle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    & > img {
        flex: none;
        margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    & > .data-info {
        & > .name {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 5px;
            color: #333;
        }
        & > .meta-box {
            font-size: 13px;
            color: #909090;
            & > span {
                margin-left: 7px;
            }
            & .edit-btn {
                color: #1264b6;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

// markdown 转化后的 html 文章的样式
export const MainContent = styled.article`
    line-height: 25px;
    color: #333;
    width: 100%;
    & img {
            display: block;
            width: 80%;
            height: 80%;
    }
    & h1 {
        font-size: 30px;
        font-weight: 800;
        line-height: 60px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        color: rgba(0,0,0,0.9);
    }
    & h2 {
        font-size: 28px;
        font-weight: 700;
        line-height: 50px;
        color: rgba(0,0,0,0.8);
    }
    & h3 {
        font-size: 26px;
        font-weight: 600;
        line-height: 40px;
        color: rgba(0,0,0,0.7);
    }
    & h4 {
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        color: rgba(0,0,0,0.6);
    }
    & h5 {
        font-size: 22px;
        font-weight: 400;
        line-height: 40px;
        color: rgba(0,0,0,0.5);
    }
    & h6 {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: rgba(0,0,0,0.4);
    }
    & p {
        margin-top: 10px;
    }
    & li {
        margin-left: 20px;
    }
    & ul > li {
        list-style: circle;
    }
    & ol > li {
        list-style: decimal;
    }
    /* inline-code */
    /* 块代码有第三方库高亮无需担心 */
    & > p > code{
            padding: 2px 4px;
            border-radius: 4px;
            background-color: rgba(11, 112, 112, 0.1);
            color: rgba(0, 224, 224, 1);
        }
    & > pre {
        /* user-modify: read-write;
        -webkit-user-modify: read-write;
        -moz-user-modify: read-write; */
    }
`;


/**************************************************************************************************
 * 右边栏的样式
 **************************************************************************************************/

export const DetailRight = styled.div`
    display: flex;
    flex-flow: column;
    gap: 20px;
`


// 侧边栏的作者信息
export const StyledAuthorInfo = styled.section`

    background-color: #fff;

    & > .title {
        font-size: 14px;
        padding: 12px 16px;
        border-bottom: 1px solid hsla(0,0%,58.8%,.1);
        color: #333;
    }

    & > .base-info{
        display: flex;
        align-items: center;   
        padding: 16px;

        & > img {
            flex: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 12px;
        } 

        & > .data-box {
            & > .name {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #000;
            }
            & > .desc {
                font-size: 15px;
                color: #72777b;
            }
        }
    }
`;

export const StatusItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    padding: 0 16px;
    margin-bottom: 12px;
    color: #000;

    & > .iconfont {
        margin-right: 12px;
        padding: 5px;
        border-radius: 50%;

        color: rgb(123, 185, 255);
        background-color: rgb(225, 239, 255);
    }
`;


// 相关文章部分
export const StyledRelatedArticles = styled.section`

    background-color: #fff;
    & > .title {
        font-size: 14px;
        padding: 12px 16px;
        border-bottom: 1px solid hsla(0,0%,58.8%,.1);
        color: #333;
}
`;

// 相关文章单个文章item
export const RelatedArticleItem = styled.div`
    padding: 10px 16px;

    & > .title {
        font-size: 14px;
        line-height: 20px;
        color: #333;
    }
    & > .status-info {
        margin-top: 5px;

        & > .like {
            margin-right: 30px;
            & > .iconfont {
                font-size: 15x;
                margin-right: 10px;
                color: #c2c2c2;
            }
            & > span {
                font-size: 16px;
                color: #b2bac2;
            }
        }
        & > .comment {
            margin-right: 30px;
            & > .iconfont {
                font-size: 13px;
                margin-right: 10px;
                color: #c2c2c2;
            }
            & > span {
                font-size: 16px;
                color: #b2bac2;
            }
        }
    }
`;