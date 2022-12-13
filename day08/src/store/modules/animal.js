//component가 아니라 순수 자바스트립트JS 파일이다.

//1. action 생성
// '파일명 + action명' (중복 방지로 파일명 써준다)
const TIGER = 'animal/TIGER'
const PUPPY = 'animal/PUPPY'
const CAT = 'animal/CAT'
const CHICK = 'animal/CHICK'


//2. action 보내기
export const tiger = () => ({ type: TIGER })
export const puppy = () => ({ type: PUPPY })
export const cat = () => ({ type: CAT })
export const chick = () => ({ type: CHICK })


//3. 초기값
const initialState = { name:'' ,crying: ''}
//4. 리듀서 함수 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//                     - state: 현재상태, action: 액션 객체
const reducer = (state = initialState, action) => {
    switch(action.type){
        case TIGER:
            return { name: '호랑이' ,crying: '흥' }
        case PUPPY:
            return { name: '멍멍이' ,crying: '멍'}
        case CAT:
            return { name: '고양이' ,crying: '냥' }
        case CHICK:
            return { name: '병아리' ,crying: '뺙' }        
        default:
            return state
    }
}

export default reducer


