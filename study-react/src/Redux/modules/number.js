// 초기값 - 원하는 변수값을 다 넣을 수 있음.
// 여러개의 값을 사용하기 때문에 객체
const intialState = {
  number : 0,
}

// 값으 수정 또는 사용하는 리듀서 함수
// 함수의 매개변수로 들어갈 값 : state와 action
function number(state = intialState, action){
  // switch문을 사용해서 action.type 따른 코드를 작성
  switch(action.type){
    case "increase": 
      // increse 액션이 발생했을 때
      // 값을 1 증가
      // ...(스프레드 연산자)를 통해서 그대로 들고옴
      // 이때 접근하는 state는 현재 number.js에서 작성한 intialState임
      return {...state, number : state.number +1};
    case "setNumber" :
      return {...state, number : action.payload}
    default :
      return state;
  }
}

// 액션함수 : {type: "리듀서이름"}을 return해서 사용하는 함수
// 다른 js, jsx 사용을 하게됨 > export를 통해서 내보내줌
export const increase = () => ({type:"increase"});
// 값을 가져와서 사용해 줄 때는, 매개변수로 값을 가져와서 사용
export const setNumber = (num) => (
  {type: "setNumber", payload : num}
);


// 리듀서함수 number를 module/index.jsd에 연결하기 위해 내보내줌
export default number;