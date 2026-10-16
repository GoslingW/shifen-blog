import React from 'react'

import { StyledFavoriteCollection } from "./style";

export default function FavoriteCollection(props) {
    return (
        <StyledFavoriteCollection>
            <h1>{props.title}</h1>
            <div className="meta-box">
                <span>1 篇</span>
                <span> · </span>
                <span>0 人关注</span>
                <span> · </span>
                <span>{props.creator}</span>
            </div>
        </StyledFavoriteCollection>
    )
}
