import React from 'react'
import { connect } from 'react-redux'

import Achievements from "./Achievements.js";
import Follow from "./Follow.js";
import MetaInfo from "./MetaInfo.js";

import { StyledUserPageRight } from "../style.js";

export const UserPageRight = (props) => {
    return (
        <StyledUserPageRight showHeader={props.showHeader}>
            <Achievements />
            <Follow />
            <MetaInfo />
        </StyledUserPageRight>
    )
}

const mapStateToProps = (state) => ({
    showHeader: state.getIn(["Header", "showHeader"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageRight)
