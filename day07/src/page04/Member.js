import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({ item }) => {
    const { id, name, email} = item //비구조할당
    const navigate = useNavigate()

    const css = {
        border: '1px solid cyan', margin: 20, padding: 20 
    }

    const onGo = () => {
        navigate(`/member/${id}`)
    }

    return (
        <div style={ css }>
            <p>id : { id }</p>
            <h4>이름 : { name }</h4>
            <h5>이메일 : { email }</h5>
            
            <p><Link to={`/member/${id}`}>자세히 보기</Link></p>
            <button onClick={ onGo }>상세보기</button>
        </div>
    );
};

export default Member;