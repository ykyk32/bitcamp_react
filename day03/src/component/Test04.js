import React, { useState } from 'react';
import Animal from './Animal';
import Display from './Display';


const Test04 = () => {
    const [name, setName] = useState('호랑이')

    //상태값이 있는 곳에 함수도 같이 있어야 한다.
    const onInputName = (e) => {
        const { value } = e.target
        setName(value)
    }

    return (
        <div>
            <Animal name={ name } onInputName ={ onInputName } />  
            {/* Anmimal 갈때 name이랑 onInputName보내기 */}
            <br/>
            <Display name= { name } />
        </div>
    );
};

export default Test04;