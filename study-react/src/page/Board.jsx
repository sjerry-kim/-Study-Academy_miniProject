import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Board = () => {
  const [boardlist, setBoardlist] = useState([1,2,3,4,5])
  return ( 
    <div>
      <h1>Board페이지 입니다</h1>
      <Link to='/board/1'>페이지1로 이동합니다</Link>
      {/**값이 여러개 일 경우 배열을 가져와 map으로 출력 */}
      <hr />
      {
        boardlist.map((b)=>(
          <Link to={`/board/${b}`}>{b}{" "}</Link>
        ))
      }

      <Outlet />
    </div>
  );
}

export default Board;