import styled from 'styled-components';

// 页面懒加载的样式
export const StyledLazyLoading = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 3fr 1fr;
`;

export const StyledUserPage = styled.main`
    background-color: #f4f5f5;
    min-height: calc(100vh - 81px);
    & > .user-page-main {
        width: 960px;
        padding-top: 20px;
        margin: 0 auto;
    }
    &::after {
        content: "";
        display: block;
        clear: both;
    }
`;

/**************************************************************************************************
 * 左边栏的样式
 **************************************************************************************************/


export const UserPageLeft = styled.div`
    display: flex;
    flex-flow: column;
    gap: 12px;
    width: 75%;
    float: left;
`;
export const StyledUserData = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    padding: 30px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);

    /* 头像 */
    & > img {
        width: 90px;
        height: 90px;
        margin-right: 29px;
        border-radius: 50%;
    }
    /* 昵称，介绍信息等 */
    & > .text-info {
        /* 昵称 */
        & > .name > h1 {
            font-size: 26px;
            font-weight: 600;
            color: #000;
            line-height: 1.2;
            margin-bottom: 12px;
        }
        /* 介绍信息 */
        & > .desc {
            font-size: 15px;
            line-height: 1.5;
            color: #72777b;
            & > .iconfont {
                margin-right: 15px;
            }
        }
    }
    /* 编辑个人资料按钮 */
    & > .edit-profile {
        position: absolute; bottom: 30px; right: 30px; /* padding 值为 30px */
        font-size: 16px;
        font-weight: 500;
        padding: 9px 7px;
        border: 1px solid #3780f7;
        border-radius: 4px;
        text-decoration: none;
        color: #3780f7;
        cursor: pointer;
    }
`;

export const StyledUserCollection = styled.section`
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
`;

// 左下角的导航栏
export const CollectionNav = styled.nav`
    position: relative;
    display: flex;
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;
    /* 每个区块 */
    & > a {
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 500;
        
        display: block;
        /* 和蓝条长度一致 */
        width: 92px;
        padding: 20px 0;
        text-align: center;
        color: rgb(49, 68, 91);
        cursor: pointer;
        text-decoration: none;
        z-index: 1;
        &:hover {
            opacity: 0.7;
        }
        &.active {
            color: #007fff;
            /* 点赞数字的css优先度较高，因此这里要写全 */
            &.likes > .number{
                color: #007fff;
            }
        }
        /* 点赞数字颜色 */
        &.likes > .number{
            color: #b2bac2;
        }
    }
`;
// 导航栏的标识选中 tab 的蓝色滑块
export const BlueSlide = styled.div`
    position: absolute; bottom: 0px;
    left: ${props => props.position};
    padding: 20px 30px;
    width: 32px;
    box-shadow: inset 0 -2px 0px #007fff;
    z-index: 0;
    transition: left 0.2s;
`;

// 动态的最外层样式，每个框框的样式在 collection 文件夹里
export const StyledActivities = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 8px;
`;
// 收藏的样式，每个框框的样式在 collection 文件夹里
export const StyledFavorites = styled.div`
    display: flex;
    flex-flow: column;
    gap: 2px;
    & > nav {
        line-height: 50px;
        height: 50px;
        padding: 0 29px;
        background-color: #fff;
        & > .title {
            font-size: 15px;
            font-weight: 600;
            color: #000;
        }
        /* 选择查看创建的收藏还是关注的收藏 */
        & > .select-type {
            float: right;
            font-size: 14px;
            & > .created {
                position: relative;
                margin-right: 24px;
                &::after {
                    content: "";
                    position: absolute; right: -9px; top: 2px;
                    width: 1px;
                    height: 17px;
                    background-color: #b2bac2;
                }
            }
            & > span {
                cursor: pointer;
                &:hover {
                    opacity: 0.7;
                }
            }
            /* 选中的显示蓝色 */
            & > .${props => props.favoriteType} {
                color: #007fff;
            }
        }
    }
`;

/**************************************************************************************************
 * 右边栏的样式
 **************************************************************************************************/
export const StyledUserPageRight = styled.div`
    position: fixed; top: ${props => props.showHeader ? 81 : 20}px; right: 281.2px;

    display: flex;
    flex-flow: column;
    gap: 12px;

    /* margin-left: 20px; */
    width: 220px;
    /* float: right; */

    transition: top 0.2s;

`;

// 个人成就
export const StyledAchievements = styled.section`
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    background-color: #fff;
    /* 标题“个人成就” */
    & > .title {
        padding: 16px;
        font-size: 16px;
        font-weight: 600;
        color: #31445b;
        border-bottom: 1px solid rgba(230,230,231,0.5);
    }
    /* 数据部分 */
    & > .data-box {
        display: flex;
        flex-flow: column;
        gap: 10px;
        padding: 16px;
        /* 每行数据 */
        & > div {
            font-size: 15px;
            line-height: 1.2;
            display: flex;
            align-items: center;
            color: #000;
            /* 图标 */
            & > .iconfont {
                margin-right: 14.4px;
                padding: 2.4px 4px;
                border-radius: 50%;
                background-color: rgb(225, 239, 255);
                color: rgb(123, 185, 255);
            }
        }
    }
`;

export const StyledFollow = styled.section`
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: #fff;
    color: #31445b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    & > div {
        line-height: 19px;
        flex: 1;
        display: flex;
        flex-flow: column;
        gap: 6px;
        align-items: center;
        padding: 16px 0;
        cursor: pointer;
        & > .text {
            font-size: 16px;
            font-weight: 500;
        }
        & > .num {
            font-size: 15px;
            font-weight: 600;
        }
    }
    &::after {
        content: "";
        position: absolute; left: 50%; top: 0; bottom: 0;
        margin: auto 0;
        width: 1px;
        height: 50%;
        background-color: #ebebeb;
    }
`;

export const StyledMetaInfo = styled.section`
    & > div {
        font-size: 15px;
        padding: 15px 5px;
        border-top: 1px solid rgba(230,230,231,.5);
        color: #000;
        cursor: pointer;
        & > .data {
            float: right;
        }
    }
    & .anniversary {
        border-bottom: 1px solid rgba(230,230,231,.5);
    }
`;