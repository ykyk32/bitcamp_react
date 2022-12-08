import React,{ useEffect, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import styles from '../css/Todos.module.css';
import TodoList from './TodoList';

const Todos = () => {
    //const [data, setData] = useState([])

    //로컬 스토리지 읽어오기
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) ||  [] )//로컬스토리지에서 가져온다 || 거짓이라면 빈 배열
    
    //로컬 스토리지 저장
        useEffect(() => {
            localStorage.setItem('data',JSON.stringify(data))
        }, [data])//data가 바뀔때마다 처리



    const seq = useRef(data.length +1)

    const onAdd = (text) => {
        setData([
            ...data,
            {
                seq: seq.current++,
                text //text: text 이름이 같을때는 한번만 써도 ㅇㅋ

            }
        ])
    }  
    
    const onDel =(seq) => {
        setData(data.filter(item => item.seq !== seq))        
    }

    return (
        <div className= { styles.Todos }>
            <h1>일정관리</h1>
            <TodoForm onAdd={ onAdd }/>
            <TodoList data={ data } onDel={ onDel }/>
        </div>
    );
};

export default Todos;


/* 
데이터 읽기, 쓰기

웹 스토리지
HTML5에서 추가된 기술로 로컬스토리지와 세션스토리지로 구분된다.

특징
- 웹 스토리지는 Key와 Value 형태로 이루어졌다.
- 웹 스토리지는 클라이언트에 대한 정보를 저장한다.
- 웹 스토리지는 로컬에만 정보를 저장하고 쿠키는 서버와 로컬에 정보를 저장한다.

종류
로컬스토리지 (localStorage) - 클라이언트에 대한 정보를 영구적으로 저장
세션스토리지 (sessionStorage) - 세션 종료 시(브라우저 닫을 경우) 클라이언트에 대한 정보 삭제

장점
- 서버에 불필요하게 데이터를 저장하지 않는다. (백엔드에 절대로 전송되지 않는다.)
- 저장 가능한 데이터의 용량이 크다. (약 5Mb, 브라우저마다 차이 존재)

단점
- HTML5를 지원하지 않는 브라우저의 경우 사용 불가. (현재는 거의 없다고 봐야 한다.)
*/