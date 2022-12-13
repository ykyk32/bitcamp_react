import React from 'react';

const LoginForm = () => {
    const member = JSON.parse(localStorage.getItem("member")) || [];

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const memberLogin = member.filter(
        (item) => item.id === id && item.password === password
    );

    const onLogin = () => {
        if (memberLogin.length > 0) {
            alert("로그인");
        } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    };

    return (
        <div>
             <h2>로그인</h2>
            <div>
                <span>아이디 </span>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                ></input>
                <br></br>
                <span>비밀번호 </span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br></br>
                <input onClick={onLogin} type="button" value="로그인"></input>
            </div>
        </div>
    );
};

export default LoginForm;