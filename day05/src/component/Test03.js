import React, { useMemo, useState } from 'react';

const Test03 = () => {
    const [count1, setCount1] = useState(1)//state로하면 새로고침 (리렌더링)할때마다 다시 
    const [count2, setCount2] = useState(1)
    
    //사용자가 함수를 만들어서 return 할 경우 (return 값을 기억)
    const isEven = useMemo(() => {
        return count1 % 2 === 0
    }, [count1])//count1변할때마다
    
    return (
        <div>
            <h2>카운트 : { count1 }</h2>
            <button onClick={ () => setCount1(count1+1) }>증가</button>

            <h2>카운트 : { count2 }</h2>
            <button onClick={ () => setCount2(count2+1) }>증가</button>

            <h2>
                결과 : { isEven ? '짝수' : '홀수'}
            </h2>
        </div>
    );
};

export default Test03;

/*
useMemo
- 리랜더링, 최적화
- useMemo는 컴포넌트의 성능을 최적화시킬 수 있는 대표적인 react hooks 중 하나이다.
- useMemo에서 Memo는 Memoization을 뜻한다.

memoization?
- 기존에 수행한 연산의 결괏값을 어딘가에 저장해 두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법을 말한다. 
*/
