import React from 'react'
import { connect } from 'react-redux'

import {
    StyledFollow
} from "../style.js";

export const Follow = (props) => {
    return (
        <StyledFollow>
            <div className="idol">
                <span className="text">关注了</span>
                <span className="num">0</span>
            </div>
            <div className="fans">
                <span className="text">关注者</span>
                <span className="num">23</span>
            </div>
        </StyledFollow>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Follow)
