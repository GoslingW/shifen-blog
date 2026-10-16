// 左上角的个人信息
import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from "react-router-dom";

import {
    StyledUserData
} from "../style.js";


export const UserData = (props) => {
    const params = useParams();
    return (
        <StyledUserData>
            <img src={props.userInfo.get("avatar")} alt="头像" />
            <div className="text-info">
                <div className="name">
                    <h1>{props.userInfo.get("name")}</h1>
                </div>
                <div className="desc">
                    <i className="iconfont">&#xe608;</i>
                    无
                </div>
                <div className="desc">
                    <i className="iconfont">&#xe6bc;</i>
                    头像自己画的
                </div>
            </div>
            <Link
                className="edit-profile"
                to={"/setting/" + params.id + "/profile"}
            >
                编辑个人资料
            </Link>
        </StyledUserData>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserData)
