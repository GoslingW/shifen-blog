import React from 'react'
import { connect } from 'react-redux'

import {
    StyledAchievements
} from "../style.js";

export const Achievements = (props) => {
    return (
        <StyledAchievements>
            <div className="title">个人成就</div>
            <div className="data-box">
                <div className="likes">
                    <i className="iconfont">&#xe60c;</i>
                    <span>获得点赞</span>
                </div>
                <div className="reads">
                    <i className="iconfont">&#xe6b2;</i>
                    <span>文章被阅读</span>
                </div>
                <div className="exp">
                    <i className="iconfont">&#xe622;</i>
                    <span>博客值</span>
                </div>
            </div>
        </StyledAchievements>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Achievements)
