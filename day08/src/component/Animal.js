import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cat, chick, puppy, tiger } from '../store/modules/animal';

const Animal = () => {
    const name = useSelector(state => state.animalReducer.name)
    const crying = useSelector(state => state.animalReducer.crying)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>동물의 울음 소리</h1>
            <h2>{ name } { crying }</h2>
            <p>
                <button onClick={ () => dispatch(tiger()) }>호랑이</button>
                <button onClick={ () => dispatch(puppy()) }>강아지</button>
                <button onClick={ () => dispatch(cat()) }>고양이</button>
                <button onClick={ () => dispatch(chick()) }>병아리</button>
            </p>
        </div>
    );
};

export default Animal;