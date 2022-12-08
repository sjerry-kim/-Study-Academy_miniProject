import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {
  const [boardlist, setBoardlist] = useState([1,2,3,4,5])
  return ( 
    <div>
      <h1>Board페이지 입니다</h1>
      <Link to='/board/1'>페이지1로 이동합니다</Link>
      {/**값이 여러개 일 경우 배열을 가져와 map으로 출력 */}
      <hr />
      {/* {
        boardlist.map((b)=>(
          <Link to={`/board/${b}`}>{b}{" "}</Link>
        ))
      } */}

      {
        boardlist.map((boardid)=>(
          <NavLink
          // NavLink에 isActive값을 화사룦 함수로 가져와서 사용
          style={({isActive})=>isActive? {color:"blue"}:{color:"black"}}
          to={`/board/${boardid}`}
          >
            {boardid}{" "}
          </NavLink>
        ))
      }

      <Outlet outletname="아울렛" />
    </div>
  );
}

export default Board;