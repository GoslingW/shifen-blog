import React from 'react'
import { connect } from 'react-redux'

import {
    StyledTopics,
    Topic
} from "../style.js";

export const Topics = (props) => {
    return (
        <StyledTopics className="topics">
            {props.topicList.map((topic) => {
                return (
                    <Topic key={topic.get("id")}>
                        <img src={topic.get("url")} alt="像素画" />
                        {topic.get("title")}
                    </Topic>
                )
            })}
        </StyledTopics>
    )
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(["Homepage", "topicList"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Topics)
