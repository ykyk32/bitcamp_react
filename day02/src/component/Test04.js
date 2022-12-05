import React, { useState } from 'react';

const Test04 = () => {
    const [visible,  setVisible] = useState(true)//상태변수 visible
    
    const onShow=() => {
        setVisible(true)
    }

    const onHide=() => {
        setVisible(false)
    }
    const onToggle=() => {
        setVisible(!visible)
        //현재값과 반대 실행
    }




    return (
        <div>
            <button onClick={ onShow }>보이기</button>
            <button onClick={ onHide }>숨기기</button>
            <button onClick={ onToggle }>{ visible ? '숨기기' : '보이기'}</button>
            <hr/>
            {
              // visible ?  <div style={{width:300, height:300, margin: 20, background:'hotpink'}}></div> : null
                 visible &&  <div style={{width:300, height:300, margin: 20, background:'hotpink'}}></div>

            }
        </div>
    );
};

export default Test04;