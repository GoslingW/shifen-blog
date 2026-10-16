import React, { useRef } from 'react'
import { connect } from 'react-redux'

import EditProfileItem from "./EditProfileItem.js";

import {
    StyledEditProfile,
    EditProfileItemAvatar
} from "../style.js";


export const EditProfile = (props) => {

    const avatarUploadRef = useRef();

    let avatar, username, userdesc, userwebsite;
    if (props.userInfo) {
        avatar = props.userInfo.get("avatar");
        username = props.userInfo.get("name");
        userdesc = null;
        userwebsite = null;
    } else {
        avatar = null;
        username = null;
        userdesc = null;
        userwebsite = null;
    }

    function handleUploadAvatar() {
        avatarUploadRef.current.click();
    }

    return (
        <StyledEditProfile>
            <h1 className="title">个人资料</h1>
            <ul className="edit-profile-item-list">
                {/* 头像的样式比较特殊 */}
                <EditProfileItemAvatar>
                    <span className="item-title">头像</span>
                    <div className="edit-item">
                        <img src={avatar} alt="头像" />
                        <div className="action-box">
                            <span className="hint">支持 jpg、png、jpeg 格式大小 5M 以内的图片</span>
                            <button className="upload" onClick={handleUploadAvatar}>点击上传</button>
                            <input type="file" name="avatar-upload" ref={avatarUploadRef} accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>
                </EditProfileItemAvatar>
                <EditProfileItem title="用户名" submitName="username" storedValue={username} placeholder="填写你的用户名" />
                <EditProfileItem title="个人介绍" submitName="userdesc" storedValue={userdesc} placeholder="填写你的个人介绍" />
                <EditProfileItem title="个人网站" submitName="userwebsite" storedValue={userwebsite} placeholder="填写你的个人网站" />
            </ul>
        </StyledEditProfile>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
