import React, { useState } from 'react';

const Main = () => {
    const [isNav, setIsNav] = useState(false);
    const onToggle = () => {
        setIsNav(!isNav);
    };
    
    return (
        <div>
             <span>React를 이용한 회원관리</span>
            <p className="all-menu" onClick={onToggle}>
                💙
            </p>
            <nav className={isNav ? "on" : ""}>
                <ul>
                    <li>
                        <Link to="/writeForm">회원등록</Link>
                    </li>
                    <li>
                        <Link to="/LoginForm">로그인</Link>
                    </li>
                    <li>
                        <Link to="/WriteList">회원목록</Link>
                    </li>
                    <li>
                        <button onClick={() => setIsNav(false)}>닫기</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Main;