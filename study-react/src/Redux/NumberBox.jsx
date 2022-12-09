import { useDispatch, useSelector } from "react-redux";
import { increase, setNumber } from "./modules/number";

const NumberBox = () => {
  // 리덕스를 사용해서 그 값을 가져오려고 함
  // useSelector의 화살표함수를 통해서 modules/index.js의 전체 state에 접근
  // state.number는 module/index.js에 연결해준 number.js의 {number}를 의미

  // state.number.number는
  // number.js의 state객체의 number의 숫자값을 가져옴
  const number = useSelector((state)=>(state.number.number))
  const numberObj = useSelector((state)=>(state.number))

  // 리덕스에서 작성한 리듀서를 가져오기 위한 useDispatch
  // dispatch를 사용해줄 때,
  // dispatch({type:값}) 전달 - type 통해서 리듀서를 찾아감
  const dispatch = useDispatch();
  return (  
    <div>
      <h3>리덕스를 사용할 공간입니다</h3>
      <p>useSelecor를 통해서 가져온 값 : {number}</p>
      <p>useSelecor를 통해서 가져온 값 : {numberObj.number}</p>
      <button onClick={()=>{dispatch({type:"increase"})}} >1증가</button>
      {/** 액션함수 ...? number.js로 가보삼 */}
      <button onClick={()=>{dispatch(increase())}}>1증가(함수)</button>

      {/** setNumber를 통해서 값을 수정 : 객체형태 : 이 객체는 action으로 들어간다 */}
      <button onClick={()=>{dispatch({type:"setNumber", payload:0})}}>0으로 초기화</button>
      <button onClick={()=>{dispatch(setNumber(100))}}>100으로 초기화</button>
    </div>
  );
}

export default NumberBox;