import styled from "styled-components";
import logo from "../../static/logo/logo64.png"

// Login组件的样式和组件代码在同一个文件夹里

// 导航栏整体样式
export const StyledNormalHeader = styled.header`

    position: sticky; top: 0px; left: 0;

    height: 60px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.05);
    color: #999;
    background-color: #fff;
    z-index: 998; /*仅次于登陆弹窗*/

    /***********************************
    * 导航栏隐藏/显示动画
    ***********************************/
    &.header-appear-exit {
        top: 0;
    }
    &.header-appear-exit-active {
        top: -60px;
        transition: top 0.2s;
    }
    &.header-appear-exit-done {
        top: -60px;
    }
    &.header-appear-enter {
        top: -60px;
    }
    &.header-appear-enter-active {
        top: 0px;
        transition: top 0.2s;
    }
    &.header-appear-enter-done {
        top: 0px;
    }
`

export const Nav = styled.nav`
    position: absolute; left: 0; right: 0; /*absolute 只有这样才能用margin: 0 auto 来水平居中*/
    
    width: 960px;
    height: 60px;

    margin: 0 auto;
`;

// logo
export const Logo = styled.div`
    float: left;
    display: flex;

    height: 60px;
    width: 180px;

    > a {
        display: block;
        height: 60px;
        width: 100%;
        background: url(${logo});
        background-repeat: no-repeat;
        background-position: 0 -7px;
        text-decoration: none;
    }
    > a > h1 {
        color: #007fff;
        line-height: 60px;
        margin-left: 60px;
    }
    > a > h1:hover {
        color: red;
    }
`;

// 搜索框左边的全部左浮动，右边的全部右浮动
export const NavItem = styled.span`
    line-height: 60px;
    text-align: center;

    height: 60px;
    padding: 0 18px;

    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    /* 首页标签 */
    &.homepage {
        color: #007fff;
        text-decoration: none;
    }
    &.homepage:hover {
        color: red;
    }

`;

// 搜索框
export const NavSearch = styled.div`
    position: relative;

    float: right;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;

    
    > input {
        width: 168px;
        height: 32px;
        font-size: 13px;

        padding: 7px;
        border: 1px solid rgba(151, 151, 151, 0.2);
        border-radius: 2px;
        outline: none;
        background-color: #fff;

        transition: width 0.3s;
        &::placeholder {
            color: #999;
        }
    }

    > input:focus {
        border: 1px solid #007fff;
        width: 200px;
    }

    /* 搜索框内右边的图标，使用了图标字体 */
    &::after {
        content: "\\e633";
        font-family: "iconfont";
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        position: absolute;
        right: 5px;

        background-color: white;
    }
    &:focus-within::after{
        color: #007fff;
    }
`;
// 搜索框辅助框
export const NavSearchHint = styled.div`
    position:absolute;
    top: 50px;
    z-index: 2; /* 防止被盖住 */
    
    width: 200px;
    padding: 15px 0px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    & > .advised {
        margin: 0px 15px 15px 10px;
        font-size: 14px;
        color: #969696;
    }
    /* 换一批 */
    & > p >.change-tag {
        font-size: 10px;
        float: right;
        padding: 3px;
        border: 1px solid #999;
        border-radius: 2px;
        cursor: pointer;


        & > .spin {
            display: block;
            float: left;
            font-size: 10px;
            transition: transform 0.5s;
            transform: rotate(0deg);
            transform-origin: 5px 6px; /*垃圾图标字体，中点都不准确，要手动找中点*/
        }

    }
    & > .search-hint-tag-list {
        display: flex;
        flex-flow: wrap;
        column-gap: 10px;
        row-gap: 7px;
        
        width: 168px;
        padding-left: 10px;
    }
`

export const NavSearchHintTag = styled.a`
    font-size: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 3px;
    color: #787878;
`;


/******************************************************************************************
 * 右侧的各种功能按钮
 ******************************************************************************************/
export const NavAddition = styled.div`
    display: flex;
    align-items: center;
    float: right;
    height: 60px;
    line-height: 60px;

    /* 登录按钮 */
    &.login > button{
        font-size: 16px;

        width: 72px;
        height: 30px;
        border: 1px solid #007fff;
        border-radius:2px;

        background: #fff;
        color: #007fff;
        cursor: pointer;
        &:hover {
            background-color: #007fff;
            color: #fff;
        }
    }

    /* 写文章按钮 */
    &.write-article {
        padding: 0 15px;
    }
    /* 中间有可能会有 Link 组件隔着，因此不用 > */
    &.write-article button.article {
        height: 32px;
        padding: 0 10px;
        border: none;
        border-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        background-color: #007fff;
        color: #fff;
        cursor: pointer;
        &:hover {
            background-color: #0371df;
        }
    }
    &.write-article > button.more {
        width: 15px;
        height: 32px;
        padding: 0;
        border: none;
        border-radius: 3px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid hsla(0,0%,100%,.1);

        background-color: #007fff;
        color: #fff;
        cursor: pointer;

        &:hover {
            background-color: #0371df;
        }

        & > i {
            font-size: 12px;
        }
        
    }

    /* 消息按钮 */
    &.msg {
        padding: 0 14px;
        & > .iconfont {
            font-size: 19px;
            color: #71777c;
            cursor: pointer;
            &:hover {
                color: #007fff;
            }
        }
    }

    /* 登录后显示的头像 */
    &.avatar {
        position: relative; /* 为了让子元素定位 */
        & > img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 14px;
            cursor: pointer;
        }
    }
`;

/* 点击头像显示的方框 */
export const AvatarItems = styled.ul`
    position:absolute;
    top: 60px; right: 0px;
    z-index: 2; /* 防止被盖住 */

    font-size: 14.4px;
    
    display: flex;
    flex-flow: column;
    width: 159px;
    border: 1px solid rgba(177,180,185,0.45);
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`
export const AvatarItem = styled.li`
    padding: 12px 0;
    border-bottom: 1px solid rgba(0,0,0,.04);
    /* 每行按钮 */
    & > a {
        line-height: normal;
        font-size: 15.6px;
        display: flex;
        padding: 6px 12px;
        color: #71777c;
        text-decoration: none;
        cursor: pointer;
        & > .iconfont {
            font-size: 18px;
            margin-right: 9.6px;
            color: #b2bac2;
        }
        &:hover {
            background-color: #f0f0f0;
        }
    }
`