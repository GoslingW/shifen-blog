import styled from "styled-components"


export const StyledLogin = styled.section`
    position: fixed; top: 0px; left: 0px;

    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 999; /* 显示在最前端 */
`;

export const LoginMain = styled.form`
    box-sizing: border-box;
    font-size: 14px;
    width: 318px;
    padding: 24px;
    border-radius: 2px;
    background-color: #fff;

    & > .close {
        font-size: 14px;
        font-weight: bold;
        float: right;
        opacity: 0.4;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }

    & > .title {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 24px;
        color: #333;
    }

    & >.input-box {
        margin-bottom: 6px;
        & > input {
            box-sizing: border-box;
            font-size: 14px;
            padding: 10px;
            width: 100%;
            margin-bottom: 10px;
            border: 1px solid #e9e9e9;
            border-radius: 2px;
            outline: none;
            &:focus {
                border: 1px solid #007fff;
            }
        }
    }
    & > .login {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        margin-top: 5px;
        padding: 6px 16px;
        border: none;
        border-radius: 2px;
        background-color: #007fff;
        color: #fff;
        cursor: pointer;
    }
`;
