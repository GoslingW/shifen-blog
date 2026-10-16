import React from 'react'
import { connect } from 'react-redux'

import {
    StyledEditAccount,
    EditAccountItem
} from "../style.js";

export const EditAccount = (props) => {
    return (
        <StyledEditAccount>
            <h1 className="title">账户信息</h1>
            <ul className="edit-account-item-list">
                <EditAccountItem>
                    <div className="item-title">密码</div>
                    <span className="action-box">
                        <span className="current-value">******</span>
                        <span className="action">重置</span>
                    </span>
                </EditAccountItem>
            </ul>
        </StyledEditAccount>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
