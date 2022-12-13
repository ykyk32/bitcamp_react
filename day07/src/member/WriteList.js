import React from 'react';

const WriteList = () => {
    const member = JSON.parse(localStorage.getItem("member")) || [];

    return (
        <div>
            <h2>회원목록</h2>
            <div>
                <table>
                    <tr>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>비밀번호</th>
                    </tr>
                    {member.map((item, index) => (
                        <tr key={index}>
                            <th>{item.name}</th>
                            <th>{item.id}</th>
                            <th>{item.password}</th>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default WriteList;