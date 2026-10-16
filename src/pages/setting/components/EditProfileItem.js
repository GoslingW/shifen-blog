import React, { useState, useRef } from 'react'

import {
    StyledEditProfileItem
} from "../style.js";

export default function EditProfileItem(props) {

    const [focus, setFocus] = useState(false);

    const inputRef = useRef();
    function handleEditFocus() {
        inputRef.current.select();
        setFocus(true);
    }
    function handleEditBlur(e) {
        inputRef.current.blur();
        setFocus(false);
        e.stopPropagation();
    }
    return (
        <StyledEditProfileItem>
            <span className="item-title">{props.title}</span>
            <div className="edit-item">
                <input name={props.submitName}
                    defaultValue={props.storedValue}
                    spellCheck={false}
                    autoComplete="off"
                    placeholder={props.placeholder}
                    ref={inputRef}
                    onFocus={handleEditFocus}
                    onBlur={handleEditBlur}
                />
                <span className="edit-button">
                    {focus
                        ? (
                            <React.Fragment>
                                <span className="save">保存</span>
                                <span className="cancel" onClick={handleEditBlur}>取消</span>
                            </React.Fragment>
                        )
                        : (
                            <React.Fragment>
                                <div className="edit-btn" onClick={handleEditFocus}>
                                    <i className="iconfont">&#xe652;</i>
                                    <span>修改</span>
                                </div>
                            </React.Fragment>
                        )
                    }
                </span>

            </div>
        </StyledEditProfileItem>
    )
}
