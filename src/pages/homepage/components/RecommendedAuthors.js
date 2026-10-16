import React from 'react'
import { connect } from 'react-redux'

import {
    StyledRecommendedAuthors,
    RecommendedAuthor,
    MoreRecommendedAuthors
} from "../style.js";



export const RecommendedAuthors = (props) => {
    return (
        <StyledRecommendedAuthors>
            <header><span role="img" aria-label="奖牌">🎖️&nbsp;</span>推荐作者</header>
            {props.recommendedAuthorList.map((author) => {
                return (
                    <RecommendedAuthor key={author.get("id")}>
                        <img src={author.get("avatar")} alt="头像" />
                        <div className="data-info">
                            <div className="name">{author.get("name")}</div>
                            <div className="desc">{author.get("desc")}</div>
                        </div>
                    </RecommendedAuthor>
                );
            })}
            <MoreRecommendedAuthors className="more" href="/">
                更多推荐 {">"}
            </MoreRecommendedAuthors>
        </StyledRecommendedAuthors>
    )
}

const mapStateToProps = (state) => ({
    recommendedAuthorList: state.getIn(["Homepage", "recommendedAuthorList"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedAuthors)
