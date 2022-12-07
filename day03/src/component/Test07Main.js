import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
//import '../css/Test07.css'
const Test07Main = () => {
    const [count, setCount] = useState(1)

    const [form, setForm] = useState({
        name: '',
        age: '',
        addr: '',
        phone: ''
    })
    
    const onInput = (e) => {
        const {name, value} =e.target//e.target의 name,value 속성 가져와
        
        setForm({
            ...form,
            [name] : value //name 키를 가진 값을 value로 설정
        })
    }
    const onPrev = () => {
        setCount(count-1)
    }
    const onNext = () => {
        setCount(count+1)
    }




    return (
        <div className='wrap'>  
            {
                count === 1 && <Test07Input form ={ form } onInput={ onInput } onNext={ onNext }/>
            }          
            {
                //count === 2 && <Test07Print form={ form } onPrev={onPrev} onNext={onNext}/>//form객체 주소값 넘기기
                count === 2 && <Test07Print { ...form } onPrev={onPrev} onNext={onNext}/> //복사해서 값으로 넘기기
            }
            {
                count === 3 && <Test07Output name={ form.name }/>
            }
        </div>
    );
};

export default Test07Main;