import React from 'react';

const WriteForm = () => {
    const [member, setMember] = useState(
        () => JSON.parse(localStorage.getItem("member")) || []
    );

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onSave = () => {
        setMember([
            ...member,
            {
                id: id,
                name: name,
                password: password,
            },
        ]);

        localStorage.setItem("member", JSON.stringify(member));
    };
    
    return (
        <div>
            <h1>회원등록</h1>
            <div>
                <span>아이디 </span>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                ></input>
                <br></br>
                <span>이름 </span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <br></br>
                <span>비밀번호 </span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br></br>
                <input onClick={onSave} type="button" value="등록"></input>
            </div>
        </div>
    );
};

export default WriteForm;