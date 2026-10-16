import styled from "styled-components";

export const StyledShortcutBtn = styled.aside`
    position: fixed; right: 24px; bottom: 24px;
    display: flex;
    flex-flow: column;
    z-index: 999; /* 和登录组件同级 */

    & > .functional-button {

        width: 40px;
        height: 40px;
        margin-top: 12px;
        border: 1px solid #f1f1f1;
        border-radius: 50%;
        box-shadow:0 0 5px rgba(0,0,0,0.05);
        background-color: #fff;
        outline: none;
        cursor: pointer;

        &:hover, &:active {
            box-shadow:0 0 5px rgba(0,0,0,0.2);
        }

        /* 右下角的图标字体 */
        & > .iconfont {
            &.back-top {
                font-size: 12px;
                color: #909090;
            }
            &.talk {
                font-size: 18px;
                color: #007fff;
            }
        }
    }
`;