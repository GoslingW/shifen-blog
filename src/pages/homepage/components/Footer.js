// 主页页脚
import React from 'react'
import { connect } from 'react-redux'

import {
    StyledFooter
} from "../style.js";

export const Footer = (props) => {
    return (
        <StyledFooter>
            <p>
                关于
                友情链接
                ©2021 oyishyi
            </p>
            <br />
            <p>仿掘金。</p>
        </StyledFooter>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
