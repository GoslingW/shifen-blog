import styled from "styled-components";


// 页面懒加载的样式
export const StyledLazyLoading = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 3fr 1fr;
`;

// 第二导航栏
export const SecondNav = styled.nav`
    position: fixed; top: 61px; left: 0px; right: 0px;
    margin: 0 auto;
    height: 46px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    & > .links {
        font-size: 14px;
        line-height: 46px;
        display: flex;
        width: 960px;
        margin: 0 auto;
        /* 所有按钮设置 */
        & > a {
            text-decoration: none;
            padding: 0 12px;
            color: #909090;
            &:hover {
                color: #007fff;
            }
            &.active {
                color: #007fff;
            }
        }
        /* 返回个人主页按钮 */
        & > .return {
            position: relative;
            &::before {
                content: "<";
                font-weight: 800;
                position: absolute; left: 0;
            }
        }
    }
`;


// 主要页面
export const StyledSetting = styled.main`
    background-color: #f4f5f5;
    min-height: calc(100vh - 91px);
    & > .edit-main {
        width: 960px;
        margin: 0 auto;
        padding-top: 56px;
    }
`;

// 个人资料组件
export const StyledEditProfile = styled.section`
    width: 600px;
    padding: 32.4px 48px 84px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    & > .title {
        font-size:24px;
        font-weight: bold;
        padding: 16px 0;
        color: #333;
        border-bottom: 1px solid #f1f1f1;
    }    
`;

// 个人资料组件，编辑头像
export const EditProfileItemAvatar = styled.li`
    padding: 12px 0;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    & > .item-title {
        font-size: 14px;
        width: 120px;
        color: #333;
    }
    /* 编辑头像的编辑部分 */
    & > .edit-item {
        display: flex;
        /* 头像 */
        & > img {
            width: 72px;
            height: 72px;
            margin-right: 24px;
        }
        /* 头像右边的互动部分 */
        & > .action-box {
            & > .hint {
                display: block;
                font-size: 12px;
                color: #909090;
                margin-bottom: 18px;
            }
            & > .upload {
                display: block;
                font-size: 12px;
                padding: 6px 15.6px;
                border: none;
                border-radius: 2px;
                color: #fff;
                background-color: #007fff;
                cursor: pointer;
                outline: none;
                &:hover {
                    box-shadow: 0 0 5px #007fff;
                }
            }
            & > input {
                display: none;
            }
        }
    }
`;
// 个人资料组件，的每一行
export const StyledEditProfileItem = styled.li`
    padding: 24px 0;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    & > .item-title {
        font-size: 14px;
        width: 120px;
        color: #333;
    }
    & > .edit-item {
        display: flex;
        width: 100%;
        & > input {
            flex: 1;
            font-size: 15.6px;
            border: none;
            outline: none;
            color: #909090;
        }
        & > .edit-button {
            font-size: 14.4px;
            color: #007fff;
            & > .edit-btn > .iconfont {
                font-size: 13.5px;
                margin-right: 6px;
            }
            /* 所有按钮都有点击鼠标 */
            & > .edit-btn, & > .save, &> .cancel {
                cursor: pointer;
            }
            /* 取消按钮 */
            & > .cancel {
                margin-left: 20px;
                color: #909090;
            }
        }
    }
`;

// 账户设置组件
export const StyledEditAccount = styled.section`
    width: 600px;
    padding: 32.4px 48px 84px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    & > .title {
        font-size:24px;
        font-weight: bold;
        padding: 16px 0;
        color: #333;
        border-bottom: 1px solid #f1f1f1;
    }    
`;

// 账户设置组件,的每一行
export const EditAccountItem = styled.li`
    padding: 24px 0;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    & > .item-title {
        font-size: 14px;
        width: 120px;
        color: #333;
    }
    & > .action-box  {
        
        display: flex;
        width: 100%;
        & > .current-value {
            flex: 1;
            font-size: 14px;
            color: #909090;
        }
        & > .action {
            flex: none;
            color: #007fff;
            cursor: pointer;
        }
    }
`;