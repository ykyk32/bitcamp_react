import React, { useReducer } from 'react';

const initialState = 'black'

const reducer = (state, action) => {
    switch(action.type){
        case 'RED' :
            return  'red'
        case 'GREEN' :
            return 'green'
        case 'BLUE' :
            return  'blue'   
        case 'PINK' :
            return  'pink'
        case 'RESET' :           
            return initialState
        default :
            return state

    }        
}


const Test02 = () => {
    const [color, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1 style ={{ color : color}}>color : { color }</h1>
            <p>
                <button onClick={ () => dispatch({type: 'RED'})}>red</button>
                <button onClick={ () => dispatch({type: 'GREEN'})}>green</button>
                <button onClick={ () => dispatch({type: 'BLUE'})}>blue</button>
                <button onClick={ () => dispatch({type: 'PINK'})}>pink</button>
                <button onClick={ () => dispatch({type: 'RESET'})}>reset</button>                
            </p>
        </div>
    );
};

export default Test02;