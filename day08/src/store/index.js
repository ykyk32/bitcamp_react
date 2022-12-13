import { combineReducers } from "redux";
import color from './modules/color.js';//얘가 리듀서 파일이다 라고 알려줌(이름은 상관없음)
import count from './modules/count.js';
import animal from './modules/animal.js';

export default combineReducers({
    //이름 : 리듀서 파일
    colorReducer : color,
    countReducer : count,
    animalReducer : animal
})

