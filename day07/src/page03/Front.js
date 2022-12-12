import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({ data }) => {
    const { name } = useParams()

    return (
        <div>
            <h1>Front Page</h1>
            <h2>{ name }</h2>
            <hr/>
            {
                //아이템의 title과 받은 name이 일치하는것 뽑기
                data.filter(item => item.title === name)
                    .map((item, index) => <div key={ index }>
                        <h2>{ item.title } / { item.info }</h2>
                </div>)
            }
        </div>
    );
};

export default Front;