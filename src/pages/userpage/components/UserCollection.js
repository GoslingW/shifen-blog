// 左下角的用户发布过的文章，点赞，收藏等
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, NavLink, Switch, useParams, useLocation } from "react-router-dom";

import Activities from "./collections/Activities.js";
import Articles from "./collections/Articles.js";
import Favorites from "./collections/Favorites.js";

import * as actionCreators from "../store/actioncreators";

import {
    StyledUserCollection,
    CollectionNav,
    BlueSlide
} from "../style.js";


export const UserCollection = (props) => {

    useEffect(() => {
        const func = props.clearCollectionList;
        func();
    }, [props.clearCollectionList])

    const params = useParams();
    const location = useLocation();
    const collectionType = location.pathname.split("/")[3];
    // 获取哪种类型的 collections
    function getCollections() {
        return (
            <Switch>
                <Route path={"/userpage/" + params.id} exact component={Activities} />
                <Route path={"/userpage/" + params.id + "/activities"} exact component={Activities} />
                <Route path={"/userpage/" + params.id + "/articles"} exact component={Articles} />
                <Route path={"/userpage/" + params.id + "/favorites"} exact component={Favorites} />
            </Switch>
        );
    }
    function getPositionOfSelectBox(collectionType) {
        if (collectionType === undefined) {
            return "0px";
        }
        const collectionTypeList = ["activities", "articles", "favorites", "likes", "comments"];
        const index = collectionTypeList.indexOf(collectionType);
        const position = index * 92 + "px";
        return position;
    }
    return (
        <StyledUserCollection>
            <CollectionNav>
                {/* 选中区块的底部蓝色滑块 */}
                <BlueSlide className="blue-slide" position={getPositionOfSelectBox(collectionType)} />
                <NavLink
                    className="activities"
                    isActive={(match) => {
                        // url 参数没有的情况，默认为 activities
                        if (match || collectionType === undefined) {
                            return true;
                        }
                    }}
                    to={"/userpage/" + params.id + "/activities"}
                    onClick={props.clearCollectionList}>
                    动态
                </NavLink>
                <NavLink
                    className="articles"
                    to={"/userpage/" + params.id + "/articles"}
                    onClick={props.clearCollectionList}>
                    文章
                </NavLink>
                <NavLink
                    className="favorites"
                    to={"/userpage/" + params.id + "/favorites"}
                    onClick={props.clearCollectionList}>
                    收藏
                </NavLink>
                <NavLink
                    className="likes"
                    to={"/userpage/" + params.id + "/likes"}
                    onClick={props.clearCollectionList}>
                    <span>赞 </span>
                    <span className="number">
                        {"17.2k"}
                        <i className="iconfont">&#xe629;</i>
                    </span>
                </NavLink>
                <NavLink
                    className="comments"
                    to={"/userpage/" + params.id + "/comments"}
                    onClick={props.clearCollectionList}>
                    评论
                </NavLink>
            </CollectionNav>
            <main>
                {getCollections()}
            </main>
        </StyledUserCollection>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        clearCollectionList() {
            // 改变版块前，要清空 collectionList 为 null，这样下个板块才会显示懒加载样式
            dispatch(actionCreators.getClearCollectionListAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCollection)
