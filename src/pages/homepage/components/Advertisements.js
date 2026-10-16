// 首页广告就那么多，没必要再细分。
import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

// 广告图片
import advertisement1 from "../../../static/img/advertisement1.png";
import advertisement2 from "../../../static/img/advertisement2.png";

import {
    StyledAdvertisement
} from "../style.js";


const Advertisement = (props) => {
    const adRef = useRef(null)
    const cbRef = useRef(null)
    const [mouseEnter, setMouseEnter] = useState(false);
    function handleMouseEnter() {
        setMouseEnter(true);
    }
    function handleMouseLeave() {
        setMouseEnter(false)
    }
    // 处理广告的鼠标进入事件
    const closeBtn = mouseEnter
        ? (<i className="iconfont close" ref={cbRef}>&#xe607;</i>)
        : (<i className="iconfont close hidden" ref={cbRef}>&#xe607;</i>);
    useEffect(() => {
        cbRef.current.onclick = () => {
            adRef.current.style.display = "none";
        }
    }, []);
    return (
        <StyledAdvertisement
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={adRef}
        >
            <a
                href={props.url}
                rel="noopener noreferrer"
                target="_blank"
            >
                <img src={props.ad} alt="广告，像素宝典" />
            </a>
            <span className="tag">{props.tag}</span>
            {closeBtn}
        </StyledAdvertisement>
    );
}


export const Advertisements = (props) => {
    return (
        <>
            <Advertisement
                tag="推荐，像素画教程"
                url="https://www.bilibili.com/read/readlist/rl38114"
                ad={advertisement2}
            >
            </Advertisement>
            <Advertisement
                tag="强烈推荐，ytb 上的乐理教程"
                url="https://www.youtube.com/watch?v=B2HdaiEm3U0&list=PLeHRa-xAEiYRpSdsxpdmr9SQqEw5jw-jX"
                ad = {advertisement1}
            >
            </Advertisement>
        </>
    )

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Advertisements)
