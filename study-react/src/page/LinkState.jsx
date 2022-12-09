import { Link } from "react-router-dom";

/**Link를 통해서 state에 값을 담아 전달하려고 함 - linkState.jsx
 * 이 값은 uselocation을 이용해서 값을 가져올 수 있다 - LocationState.jsx
 */
const LinkState = () => {
  const varInput = "작성한 값입니다";
  return ( 
    <div>
      <h3>Link를 이용해서 값을 전달하기</h3>
      <p>
        LinkState의 path는 /link,
        LocationState의 path는 /location
      </p>
      <Link to='/location' state={'값전달'}>LocationState로 문자열 이동</Link> <br />
      <Link to='/location'state={varInput}>LocationState로 변수 값 이동</Link> <br />
      <Link to='/query?name=안녕'>쿼리스트링을 가지고 이동</Link>
    </div>
  );
}
export default LinkState;