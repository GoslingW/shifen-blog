import React from 'react'
import Loadable from 'react-loadable';

import Loading from "../../common/Loading/index.js";

import { StyledLazyLoading } from "./style.js";

const LoadableComponent = Loadable({
    loader: () => import('./index.js'),
    loading: LazyLoading,
    delay: 200
});

function LazyLoading(props) {
    if (props.pastDelay) {
        return (
            <StyledLazyLoading>
                <Loading />
            </StyledLazyLoading>
        );
    } else {
        return null;
    }
}

export default () => {
    return <LoadableComponent />;
}