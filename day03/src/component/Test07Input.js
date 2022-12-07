import React from 'react';

const Test07Input = ({ form, onInput, onNext} ) => {
    const {name, age, addr, phone} = form

    return (
        <>
         <p>
            <label>이름</label>    
            <input type='text' name='name' value={ name } onChange={ onInput } />
        </p>
        <p>
            <label>나이</label>    
            <input type='text' name='age' value={ age } onChange={ onInput } />
        </p>
        <p>
            <label>주소</label>    
            <input type='text' name='addr' value={ addr } onChange={ onInput } />
        </p>
        <p>
            <label>핸드폰</label>    
            <input type='text' name='phone' value={ phone } onChange={ onInput } />
        </p>
        <p>
            <button onClick={ onNext }>다음</button>
        </p>

        </>
    );
};

export default Test07Input;