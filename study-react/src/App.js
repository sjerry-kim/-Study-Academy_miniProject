import logo from './logo.svg';
import './App.css';
import StateBox from './components/StateBox';
import PropsParents from './components/PropsParents';
import TestState from './components/TestState';
import EventBox from './components/EventBox';
import TestEvent from './components/TestEvent';
import EventOBJ from './components/EventOBJ';

// App 안에 원하는 내용을 바로 작성할 수 있지만
// 각 내용으 컴포넌트로 만들어서 화면에 출력을 하고 있다
// 빈컴포넌트를 먼저 만들고 App으로 불러와서 화면 보고 작성
function App() {
  // function 안에서는 자바스크립트의 내용을 자유롭게 사용할 수 있음

  // return은 렌더될 html의 내용 + {}을 통해서 자바스크립트 함께 사용
  // return 안에서 실행 순서는 위에서 아래로 실행이 된다
  // 오류가 났을 때는 전체가 출력되지 않는다
  return (
    <div className="App">
      <EventOBJ />
    </div>
  );
}

// export를 통해서 모듈 형식으로 함수나 변수를 내보내줄 수 있다
// default가 붙게 되면 {} 없이 들고올 수 있다
export default App;
// export로만 보내주면 {}를 통해서 값을 들고올 수 있다
// export {App}; ...?
