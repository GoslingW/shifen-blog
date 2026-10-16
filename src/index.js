// 各种 React 库
import React from 'react';
import ReactDOM from 'react-dom';

// 最顶层应用组件
import App from './App';

// reset.js 全局样式和图标字体全局样式
import { GlobalStyle } from "./style.js";
import { IconFont } from "./static/iconfont/iconfont.js";

// react-redux 相关
import store from "./store/index.js";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>{/*react 的严格模式，可以检测一些弃用的函数*/}
        {/*webpack 自带原生JS的严格模式，因此不用加上*/}

        <GlobalStyle /> {/* reset.css */}
        <IconFont /> {/* 阿里图标字体 */}

        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

