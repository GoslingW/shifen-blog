import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
    getChangeShowBackToTopBtnAction
} from "./store/actionCreators.js";


import {
    StyledShortcutBtn
} from "./style.js";

// 自定义的节流函数
function throttle(func, delay) {
    let time;
    let timer;
    return function () {
        let currentTime = new Date().getTime();
        let _this = this;
        let _args = arguments;
        // 此时 this 为 window，这是正常的，因为监听函数被加在 window 上
        if (!time || (currentTime - time) >= delay) {
            func.apply(_this, _args)
            time = currentTime;
        } else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                // 其实这次刚好可以不用 _this，因为碰巧就是要加在 window 上
                func.apply(_this, _args)
            }, delay)
        }
    };
}

export const ShortcutBtn = (props) => {
    useEffect(() => {
        const func = throttle(props.changeShowBackToTopBtn, 250); // 对滚动事件节流
        window.addEventListener("scroll", func);
        return (() => {
            window.removeEventListener("scroll", func); // 有两个原因：
                                                        // 1. 因为是挂载在 window 上的监听函数，不清理就会永远存在，当然要清理
                                                        // 2. 清除监听后，没有人再引用 func。func 自身，以及闭包引用的 time 和 timer 会在下一次垃圾回收的时候被清理
        })
    }, [props.changeShowBackToTopBtn]);

    function handleBackTop() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <StyledShortcutBtn className="right-bottom-stuff">
            {/* 回到顶部按钮 */}
            {props.showBackToTopBtn
                ? (
                    <button className="functional-button back-top" onClick={handleBackTop}>
                        <i className="iconfont back-top">&#xe67c;</i>
                    </button>
                )
                : null
            }
            {/* 还没想好按钮 */}
            <button className="functional-button talk">
                <i className="iconfont talk">&#xe620;</i>
            </button>
        </StyledShortcutBtn>
    )
}

const mapStateToProps = (state) => ({
    showBackToTopBtn: state.getIn(["ShortcutBtn", "showBackToTopBtn"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeShowBackToTopBtn() {
            if (document.documentElement.scrollTop > 600) {
                const action = getChangeShowBackToTopBtnAction(true);
                dispatch(action)
            } else {
                const action = getChangeShowBackToTopBtnAction(false);
                dispatch(action)
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShortcutBtn)
