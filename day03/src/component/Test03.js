import React, { useState } from 'react';
import Test03Modal from './Test03Modal';
import '../css/Test03.css';

const Test03 = () => {
    const [isOpen, setIsOpen] = useState(false) 

    const onOpen = () => {
        setIsOpen(true)
    }

    //onClose가 필요한건 자식인데 구현은 부모에서 해준다 -상태변수를 부모가 갖고있어서-react
    const onClose = () =>{
        setIsOpen(false)
    }
    return (
        <div>
            <button className='button' onClick={ onOpen }>팝업창</button>
            {
                isOpen && <Test03Modal onClose={ onClose }/>
            }
        </div>
    );
};

export default Test03;