import React from 'react';
import CatItem from './CatItem';
import '../css/style.css';

const CatList = ({ data }) => {
    return (
        <ul className='list2'>
            {
                data.map(item => <CatItem key={item.id} item={ item }/>)
            }
        </ul>
    );
};

export default CatList;