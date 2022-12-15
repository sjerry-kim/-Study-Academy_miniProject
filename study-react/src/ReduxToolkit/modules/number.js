// reduxjs/toolkit의 createSlice를 이용하여
// 간단하게 액션함수를 만들 수 있다
import { createSlice } from "@reduxjs/toolkit"
// 초기값
const initialState = {
  num : 1
}

// 리듀서함수 작성
const numberSlice = createSlice({
  name: "number",
  initialState: initialState,
  reducers : {
    increase: (state)=>{
      // 함수 안에 state값을 직접 접근하여 바꿀 수 있다
      // 이전에 직접 접근하지 못할때는 값을 한번에 바꿈
      // >> 갑 전체가 바뀌는 것을 막기 위해서, ...스프레드 연산자 사용
      // toolkit을 사용하면 직접 접근해서 바꿀 수 있다
      state.num += 1;
    },
    decrease: (state)=>{
      state.num -= 1;
    },
    setNum : (state, action)=>{state.num = action.payload}
  }
})

// 사용할 액션 함수 내보내기 - numberSlice에서 가져옴
export const {increase, decrease, setNum} = numberSlice.actions;
// 사용할 리듀서 내보내기 - numberSlice에서 가져옴
export default numberSlice.reducer;