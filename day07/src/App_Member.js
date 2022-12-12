import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './member/Main';

const App_Member = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to='/' >main</Link></li>                        
                    </ul>
                </nav>
            </>
            <Routes>
                <Route path='/' element={<Main />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App_Member;