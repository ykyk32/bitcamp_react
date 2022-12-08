import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test02 = () => {
    const [id, setId] = useState('1')
    const [dto, setDto] = useState({})
    const [search, setSearch] =useState(1)

    // const onInput = (e) => {
    //     const { value }=e.target
    //     setId(value)
    // }


    const onSearch =(id) => {
        setSearch(id)
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${ id }`
        axios.get(url).then(res => setDto(res.data))
    //},[id])//id의 값이 바뀔때마다 실행
    },[search])//버튼을 누를때마다 실행

    return (
        <div>
            <input type ='text' value ={ id } onChange={ e => setId(e.target.value)} />
            <button onClick={ onSearch }>검색</button>
            <h3>{ dto.id } : { dto.title }</h3>
        </div>
    );
};

export default Test02;