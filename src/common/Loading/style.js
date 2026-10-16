import styled, { keyframes } from "styled-components";



export const StyledLoading = styled.section`
    padding: 10px 20px;
    background-color: #fff;
`;

// 动画背景色
const back = "rgba(0,0,0,0.05)";
const top = "rgba(0,0,0,0.2)";
// 动画
const LoadingAnimation = keyframes`
    from {
        background-position: -798px 0; /* 1330px/2 = 655px 背景尺寸的一半（不是容器尺寸的一半哦） */
                                       /* 这里多加了一点，让动画看起来更顺滑 */ 
    to {
        background-position: 0px 0;
    }
`

// 动画条
export const LoadingBar = styled.div`
    margin-bottom: 10px;
    height: 16px;
    width: ${props => (props.length + "%")};
    background-size: 1330px;
    background-image: linear-gradient(to right, ${back} 50%, ${top} 60%, ${back} 70%);
    /* background-repeat: no-repeat; */
    border-radius: 20px;
    animation: 1s linear infinite ${LoadingAnimation};
`;