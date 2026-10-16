import styled from "styled-components";


// 页面懒加载的样式
export const StyledLazyLoading = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 81px;
    display: grid;
    gap: 20px;
    grid-template-columns: 3fr 1fr;
`;

// 页面主样式
export const StyledWrite = styled.main`
    margin-top: 61px; /* 不能被导航栏遮住 */
    display: flex;
    & > .edit {
        box-sizing: border-box;
        height: calc(100vh - 61px); /*减去导航栏的高度*/
        width: 50%;
        padding: 28px;
        overflow-y: scroll;
        outline: none;

        font-size: 14px;
        line-height: 24px;
    }
    & > .preview {
        box-sizing: border-box;
        height: calc(100vh - 61px);
        width: 50%;
        padding: 20px;
        overflow-y: scroll;

        /* 具体样式 */
        line-height: 25px;
        color: #333;
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
        /* & > pre {
            user-modify: read-write;
            -webkit-user-modify: read-write;
            -moz-user-modify: read-write;
        } */
    }
`;