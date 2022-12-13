//component가 아니라 순수 자바스트립트JS 파일이다.

//1. action 생성
// '파일명 + action명' (중복 방지로 파일명 써준다)
const RED = 'color/RED'
const YELLOW = 'color/YELLOW'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const MAGENTA = 'color/MAGENTA'
const SKYBLUE = 'color/SKYBLUE'

//2. action 보내기
export const red = () => ({ type: RED })
export const yellow = () => ({ type: YELLOW })
export const green = () => ({ type: GREEN })
export const blue = () => ({ type: BLUE })
export const magenta = () => ({ type: MAGENTA })
export const skyblue = () => ({ type: SKYBLUE })

//3. 초기값
const initialState = { color: 'hotpink'}
//4. 리듀서 함수 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//                     - state: 현재상태, action: 액션 객체
const reducer = (state = initialState, action) => {
    switch(action.type){
        case RED:
            return { color: 'red' }
        case YELLOW:
            return { color: 'yellow' }
        case GREEN:
            return { color: 'green' }
        case BLUE:
            return { color: 'blue' }
        case MAGENTA:
            return { color: 'magenta' }
        case SKYBLUE:
            return { color: 'skyblue' }
        default:
            return state
    }
}

export default reducer


