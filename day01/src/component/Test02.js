import React from 'react';

const Test02 = () => {
    //함수 영역
    /*  주석 */
        let title ='신상명세서'
        const name = '홍길동'
        const age = 25
        const phone = '010-123-5678'
        const address = ' 서울시 강남구 강남대로'

        const css1 ={
            color: 'red',
            backgroundColor: 'yellow',
            fontSize: '30pt',
            padding: 20,
            margin: 10,
            border: '3px solid #000'
        }
        
        const css2 = {
            wieth: 400,
            color: '#fff',
            backgroundColor: 'hotpink',
            fontSize: 20,
            padding: 15,
            margin: 30
        }

    return (
        //<React.Fragment></React.Fragment>
        <>
         <h2>JSX 영역</h2>   {/* 주석 */}
            <h3 style={css1}>{title}</h3>
            <ul>
                <li style={css2}>이름 : {name}</li>
                <li style ={{backgroundColor: 'greenyellow',padding:15, margin: 'auto'}}>나이 : {age}살 {age>19 ? '성인': '청소년'} </li>
                <li>핸드폰 : {phone}</li>
                <li>주소 : {address}</li>                
            </ul>
        </>
    );
};

export default Test02;