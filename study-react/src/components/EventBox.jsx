// 자주 사용하는 이벤트 확인
// 객체와 배열, 객체들은 가진 배열에 대한 내용
// map, filter > 자바스크립트의 메소드(함수)
// 데이터 기능 > 자바스크립트의 메소드에서 확인

import { useEffect } from "react";
import { useState } from "react";
import StateBox from "./StateBox";

  // EventBox.jsx 전체영역에서 사용
  let name = "aa"; // 화면에 출력되지 않고 많이 바뀌는 값들에 사용
  // 이 값을 화면에 출력하고 싶다면 state에 담아서 화면이 바뀌도록

const EventBox = () => {
  const [changeName, setChangeName] = useState("");
  // state의 changename 받아옴
  const [clickName, setClickName] = useState("");
  // 
  const [varName, setVarName] = useState("");

  const funcName = (n) => {name = n; console.log(name)};
  useEffect(()=>{console.log("실행")},[name]);

  // 객체 state에 이벤트로 값 넣기 - 각각의 속성에 값을 넣어줘야 함
  // 1. 각각의 속성에 값을 넣어줘야 함
  // 2. 남은 속성의 값을 유지 > ...(스프레드 연산자): 객체나 배열 안에 있는 그 요서의 값을 꺼내줌
  const [user, setUser] = useState(
    {name: "", address:""}
  )

  // 이벤트에 들어갈 함수
  const changeUser = (e)=>{ // 변수의 값을 속성으 사용하기 위해 []
    setUser({...user, [e.target.name] :e.target.value})
  }

  // 변수 : 고정해서 슬값, 화면상에서 바뀌지 않을 값
  // 컴포넌트를 반복해서 출력하기 위해 배열 사용
  const info =[ 'name', 'address'];

  // 배열 안에 객체를 넣어서 진행
  const infoObj = [
    {name:"name", info: "이름", id:1},
    {name:"address", info: "주소", id:2}
  ]

  return ( 
    <div>
      <h3>이벤트 박스</h3>
      <h4>state로 작성한 이름 : {changeName}, 변수이름 : {name}</h4>
      <input type="text" onChange={(e)=>{setChangeName(e.target.value)}} />
      <button onClick={()=>{ setClickName(changeName) }} >state 값을 저장</button>
      <input type="text" onChange={(e)=>{funcName(e.target.value)}} />
      <button onClick={()=>{ setVarName(name)}}>변수값을 가져와서 저장</button>
      <h4>state값을 가져와서 저장 : {clickName}, 변수값을 가져와서 저장 : {varName}</h4>

      <h3>객체의 값 바꾸기</h3>
      <p>유저의 이름 : {user.name}, 유저의 주소: {user.address}</p>
      이름 :  <input type="text" name="name"
        // ...사용하여 객체 안의 값을 전부 가져오고,
        // 그 안에 값을 바꾸고 싶다면, 바구고 싶은 속성의 이름을 사용
      onChange={changeUser} // e객체는 값을 전달하지 않아도 사용할 수 있다 
      />
      <br />
      주소 :  <input type="text" name="address"
        // ...사용하여 객체 안의 값을 전부 가져오고,
        // 그 안에 값을 바꾸고 싶다면, 바구고 싶은 속성의 이름을 사용
      onChange={changeUser} 
      />
      <br />

      <h3>배열을 통해서 컴포넌트/태그 반복하기</h3>
      <p>배열의 값(문자열)도 html에 그대로 출력할 수 있다</p>
      <h4>{user.name},{user.address}</h4>
      {info}
      { // 배열을 map을 통해서 반복
        // map의 특성 : 배열의 메소드이기 때문에 배열에서만 사용할 수 있음
        // 배열의 값을 꺼내서 return하여 새로운 배열 
        // > 원하는 모양으로 출력
        // info : 배열
        // infomation : 배열 안에 있는 요소
        // index : 현자 가져온 배열에 있는 요소의 index
        // {}가 아니라 ()을 사용하는 이유
        // : return 값을 통해 태그, 컴포넌트 사용하기 위함
         info.map((infomation, index)=>(
          <div>
            {infomation} <input type="text" name={infomation} key={index}
                          onChange={changeUser}/>
          </div>
          ))
        }
      <hr />
      <h3>객체의 배열</h3>
      { 
        // infoObj // -> 화면이 안 뜸 : 객체는 리액트에서 바로 출력할 수 없기 때문임
        infoObj[0].info // 이와 같이 객체를 풀어서 출력해야 함
      } 
      {
        infoObj.map((infomation)=>{
          return(
            <div>
              {infomation.info}
              <input type="text" name={infomation.name} key={infomation.id} onChange={changeUser}/>
            </div>
          )
        })
      }
      <hr />
      <h3>filter함수 사용</h3>
      { // filter함수는 return 값이 true면 새로운 배열에 넣어주고, 
        // false면 새로운 배열에 넣지 않음
        // 원본 배열에는 영향을 미치지 않음
        info.filter((infomation)=>(infomation == "name"))
        // 원본 배열의 값을 바꾸고 싶다면,
        // 그 원본 배열의 값에 새로 만들어진 배열을 넣어주어야 한다
        // filter의 결과값이 배열이기 때문에
        // map을 이용해서 다시 화면에 출력할 수 있다
      }
      {
        // map을 이용해서 다시 화면에 출력할 수 있다
        // map을 통해서 객체의 값을 바꿔서 넣어줄 수 있다
        infoObj.filter((infomation)=>(infomation.id == 2)) // filter의  return값 : T/F
        .map((infomation)=>(infomation.id==2? {...infomation, info: "수정된 주소"}:infomation)) // map의 return값: 원본의 값 + 추가
        .map((infomation)=>(
          <div>
            {infomation.info}
          </div>
        ))
      }



    </div>
  );
}

export default EventBox;