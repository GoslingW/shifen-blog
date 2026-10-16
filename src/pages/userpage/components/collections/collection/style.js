import styled from 'styled-components';

// 动态-文章
export const StyledArticleCollection = styled.div`
    
    padding-top: 16px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    /* 作者信息 */
    & > .author-info-box {
        display: flex;
        align-items: center;
        margin: 0 20px;

        & > img {
            width: 45px;
            height: 45px;
            margin-right: 12px;
            border-radius: 50%;
        }
        & > .text-box {
            & > .name {
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 3.6px;
                color: #17181a;
            }
            & > span {
                font-size: 13px;
                color: #8a9aa9;
            }
        }
    }
    /* 文章标题和描述 */
    & > .article-info-box {
        display: block;
        padding: 6px 20px 10px 57px;
        text-decoration: none;
        & > .title {
            font-size: 17px;
            font-weight: bold;
            line-height: 1.5;
            color: #17181a;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        & .desc {
            display: flex;
            align-items: center;
            & > p {
                font-size: 15px;
                line-height: 1.5;
                margin-top: 3px;
                margin-right: 16px;
                padding: 3px 0;
                color: #5c6066;
            }

            & > img {
                width: 65px;
                height: 65px;
            }
        }
    }
    /* 互动信息 */
    & > .social {
        display: flex;
        margin-top: 3px;
        border-top: 1px solid #ebebeb;
        cursor: pointer;
        & > div {
            flex: 1;
            font-size: 13.5px;
            text-align: center;
            padding: 7px 0;
            color: #999;
            &:hover {
                color: rgba(0,0,0,0.3);
            }

            & > .iconfont {
                font-size: 16px;
                margin-right: 6px;
            }
        }
        /* 评论两边的分割线，由于不是填满高度，要使用伪元素 */
        & > .comment {
            position: relative;
            &::before {
                content: "";
                position: absolute; left: 0; top: 5px;
                width: 1px;
                height: 20px;
                background-color: #ebebeb;
            }
            &::after {
                content: "";
                position: absolute; right: 0; top: 5px;
                width: 1px;
                height: 20px;
                background-color: #ebebeb;
            }
        }
    }
`;


// 动态-关注标签
export const StyledFollowTopicCollection = styled.div`
    display: flex;
    padding: 16px 20px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);

    & > .author-info-box {
        display: flex;
        align-items: center;
        margin: 0 20px;

        & > img {
            width: 45px;
            height: 45px;
            margin-right: 12px;
            border-radius: 50%;
        }
        & > .text-box {
            & > .name {
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 3.6px;
                color: #17181a;

                /* "关注了标签" 这几个字 */
                & >.did-what {
                    margin: 0 4px;
                    font-weight: normal;
                    color: #8a9aa9;
                }
                /* 标签图片 */
                & > .target-image {
                    width: 24px;
                    height: 20px;
                }
                /* 标签名 */
                & > .target-name {
                    margin-left: 6px;
                }
            }
            & > span {
                font-size: 13px;
                color: #8a9aa9;
            }
        }
    }
`;

// 收藏
export const StyledFavoriteCollection = styled.div`
    padding: 14px 29px;
    background-color: #fff;
    color: #b2bac2;
    & > h1 {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.4;
        color: #2e3135;
        margin-bottom: 8px;
    }
`;
