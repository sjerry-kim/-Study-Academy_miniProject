import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <div>
      <h1>Home 화면입니다</h1>
      <Link to='/about'>About 이동</Link>
      <br />
      <a href="/about">a태그로 About이동</a>
      <p>
        : a태그는 새로고침이 되므로 컴포넌트 간의 이동을 할 때 사용하지 않는다. <br />
        만약 사용한다면, 클릭 이벤트를 이용해서 새로고침을 막아야 한다.
      </p>
    </div>
  );
}

export default Home;