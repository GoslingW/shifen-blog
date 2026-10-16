import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


import LoginBtn from "../../../common/header/components/LoginBtn.js";

import {
    StyledWriteHeader
} from "../styleForWriteHeader.js";

export const WriteHeader = (props) => {

    return (
        <StyledWriteHeader>
            <input type="text" name="title" id="title" placeholder="请输入文章标题..." autoComplete="off"/>
            <div className="draft">
                <span className="draft-state">已保存至</span>
                <Link to="./">草稿</Link>
            </div>
            <div className="titleImage">
                大图
            </div>
            <div className="publish">
                发布
                <i className="iconfont">&#xe629;</i>
            </div>
            <LoginBtn />
        </StyledWriteHeader>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteHeader)
