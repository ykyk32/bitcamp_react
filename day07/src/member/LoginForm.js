import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <h1>로그인</h1>
             
             <table>
                <tr>
                    <label>아이디</label>
                    <input type='text' value={ id } /> 
                </tr>                   
                <tr>
                    <label>비밀번호</label>
                    <input type='password' value={ pwd } /> 
                </tr>
             </table>
        </div>
    );
};

export default LoginForm;