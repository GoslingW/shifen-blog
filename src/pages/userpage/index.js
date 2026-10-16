import React from 'react'
import { connect } from 'react-redux'

import UserData from "./components/UserData.js";
import UserCollection from "./components/UserCollection.js";
import UserPageRight from "./components/UserPageRight.js";

import {
    StyledUserPage,
    UserPageLeft
} from "./style.js";

export const UserPage = (props) => {
    let element;
    if (!props.loginStatus) {
        // 未登录的时候，通过更改网址进入到这个页面的时候
        element = (
            <div>您还没有登录</div>
        );
    } else {
        element = (
            <StyledUserPage>
                <div className="user-page-main">
                    <UserPageLeft>
                        <UserData />
                        <UserCollection />
                    </UserPageLeft>

                    {/* 页面右边的因为要根据导航栏位置重新渲染，单独提出为一个组件。
                        如果在这里重新渲染的话，整个页面都要渲染，那样太耗性能了 */}
                    <UserPageRight />
                </div>
            </StyledUserPage>
        );
    }
    return element;
}

const mapStateToProps = (state, props) => ({
    loginStatus: state.getIn(["Header", "loginStatus"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
