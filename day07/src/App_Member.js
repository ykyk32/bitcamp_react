import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './member/Main';

const App_Member = () => {
    return (
        <BrowserRouter>
            <>
                <Main />

                <Routes>
                    <Route
                        path="/writeForm"
                        element={<WriteForm></WriteForm>}
                    ></Route>
                    <Route
                        path="/loginForm"
                        element={<LoginForm></LoginForm>}
                    ></Route>
                    <Route
                        path="/writeList"
                        element={<WriteList></WriteList>}
                    ></Route>
                </Routes>
            </>          
        </BrowserRouter>
    );
};

export default App_Member;