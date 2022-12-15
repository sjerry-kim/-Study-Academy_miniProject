import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date()); // new Date() : 값을 넣어주지 않으면 현재 시각을 반환함

  // 현재 페이지가 실행됐을 때, setInterval을 이용하여 
  // 시간값을 1초마다 바꿔서 출력
  // setInterval은 한 번만 작성해주면 됨
  useEffect(()=>{
    setInterval(()=>{setTime(new Date())},1000)
  },[]) // 현재 페이지가 마운트 되었을 때, 한번만 실행되어야하기 때문에 []빈배열을 넣어줌

  return ( 
    <div>
      {/* 현재 시간 출력 */}
      <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
    </div>
  );
}

export default Home;