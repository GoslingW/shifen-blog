import React from 'react';
import {AuthProvider,AuthPage,RequireAuth,AccountPage} from './auth';

import { ReadingHeader as Header, ReadingHome as Homepage, ReadingDetail as Detail } from "./reading";



import Write from "./posts/Editor";
import UserPage from "./pages/userpage/loadable.js";
import Setting from './pages/setting/loadable.js';

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
    
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    {/* common 文件夹里的组件们 */}
                    <Header /> {/* 最上方导航栏 */}
                     {/* 右下角的两个按钮*/}

                    {/* pages 文件夹里的组件们 */}
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/detail/:id" exact component={Detail}></Route>
                    <Route path="/login" component={AuthPage}/><Route path="/register" component={AuthPage}/><Route path="/account"><RequireAuth><AccountPage/></RequireAuth></Route><Route path="/write"><RequireAuth><Write/></RequireAuth></Route>
                    <Route path="/userpage/:id" component={UserPage}></Route>
                    <Route path="/setting/:id" component={Setting}></Route>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
