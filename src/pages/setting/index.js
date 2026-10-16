import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams, Switch, Route } from "react-router-dom";

import EditProfile from "./components/EditProfile.js";
import EditAccount from "./components/EditAccount.js";

import {
    StyledSetting,
    SecondNav
} from "./style.js";

export const Setting = (props) => {
    const params = useParams();
    return (
        <StyledSetting>
            <SecondNav className="second-nav">
                <div className="links">
                    <NavLink to={`/userpage/${params.id}`} className="return">返回个人主页</NavLink>
                    <NavLink to={`/setting/${params.id}/profile`} className="profile">个人设置</NavLink>
                    <NavLink to={`/setting/${params.id}/account`} className="account">账户设置</NavLink>
                </div>
            </SecondNav>
            <div className="edit-main">
                <Switch>
                    <Route path={`/setting/${params.id}/profile`} exact component={EditProfile}></Route>
                    <Route path={`/setting/${params.id}/account`} exact component={EditAccount}></Route>
                </Switch>
            </div>
        </StyledSetting>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
