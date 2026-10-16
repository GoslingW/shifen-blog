import React from "react"
import { connect } from "react-redux";

// 导入样式
import Topics from "./components/Topics.js"; // 太丑了，改好看了再用
import Articles from "./components/Articles.js";
import Advertisements from "./components/Advertisements.js";
import RecommendedAuthors from "./components/RecommendedAuthors.js";
import Footer from "./components/Footer.js";

import {
    StyledHomepage,
    HomepageLeft,
    HomepageRight
} from "./style.js";


export const Homepage = (props) => {

    return (
        <StyledHomepage className="Homepage-whole">
            {/* 主页中间那 960px 宽的部分 */}
            <div className="Homepage-main">
                <HomepageLeft>
                    <img alt="还没想好放什么" />
                    {/* <Topics /> */}
                    <Articles />
                </HomepageLeft>
                <HomepageRight>
                    <Advertisements />
                    <RecommendedAuthors />
                    <Footer />
                </HomepageRight>
            </div>
        </StyledHomepage>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);