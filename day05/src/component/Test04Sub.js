import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log('getColor')

    switch(color){
        case 'hotpink' : 
            return '진한 분홍색'
        case 'magenta' :
            return '보라색'
        case 'skyblue' :
            return '하늘색'
        case 'tomato' :
            return '토마토'
        
    }
}

const getFood =(food) => {
    console.log('getFood')

    switch(food){
        case '햄버거' :
            return '인스턴트'
        case '삼겹살' :
            return '고기'
        case '치킨' :
            return '닭고기'
        case '짜장면' :
            return '면요리'
    }
}

const Test04Sub = ({ color, food }) => {
    //색을 선택하던, 음식을 선택하던 로그가 색,음식 모두 찍힌다.
    // const colorInfo = getColor(color)
    // const foodInfo = getFood(food)

    //-> 해결방법
    //색을 선택하면 getColor만, 음식을 선택하면 getFood만 로그가 찍혀야 한다.

    const colorInfo = useMemo(() => {
        return getColor(color)//useMemo는 리턴값을 저장
    },[color])

    const foodInfo = useMemo(() => getFood(food), [food])//{}가빠지면return도 빠질수잇다      
   

    return (
        <div>
            <h3>선택한 색 : { color } </h3>    
            <h4>당신은 { colorInfo }을 좋아하시는 군요!</h4>

            <h3>선택한 음식 : { food } </h3>    
            <h4>당신은 { foodInfo }을 좋아하시는 군요!</h4>
        </div>
    );
};

export default Test04Sub;