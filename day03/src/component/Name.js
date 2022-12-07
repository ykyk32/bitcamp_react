import React from 'react';

const Name = ({name, onName}) => {
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            이름입력 :<input type='text' value={ name } onChange={onName}/>
            
        </div>
    );
};

export default Name;