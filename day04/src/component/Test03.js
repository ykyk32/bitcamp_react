import React from 'react';
import '../css/Test03.css';
import myStyle from '../css/Test03.module.css';

const Test03 = () => {
    return (
        <div>
            <div className='box'>Test(Test03.css)  </div>
            <div className={ myStyle.box }>Test(Test03.module.css) </div>
        </div>
    );
};

export default Test03;

/*
컴포넌트별로 CSS 작성
- 파일명 .module.css
- import 참조변수 from './파일명.module.css';
- 개발자 도구 -> 파일명_클래스명_아무말 이라고 설정된다
 */