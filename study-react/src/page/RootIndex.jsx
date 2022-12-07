/** 현재 페이지는 라우터의 내용을 정리하기 위한 컴포넌트임
 * 아래 내용에 BrowserRouter와 Routes를 정리
 * 아래 내용을 app.js와 index.js에 분리해서 넣어도 상관없음
 */

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './About';
import AboutTest from './AboutTest';
import AboutMain from './AboutMain';
import Home from './Home';
import Error from './Error';
import Board from './Board';
import BaordPage from './BoardPage';

const RootIndex = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}>
          <Route path='/about/test' element={<AboutTest />}>
            <Route path='/about/test/outlet' element={<AboutTest />}></Route>
          </Route>
          <Route path='/about/main' element={<AboutMain />}></Route>
          <Route path='/about' element={<AboutMain />}></Route>
          { /** 기본주소로 들어왔을 때 가장 처음 위치 : index
           * 기본 주소: 자신을 감싸고 있는 path
           */}
        </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Routes>
        {/** 첫번째 Route에서 사용하지 않은 주소에 연결하면 현재 화면만 보인다
         * 단, *을 사용할 경우, 
         * 사용하지 않는 주소가 없기에 *를 사용한 주소는 항상 보인다
         */}
        <Route path='/' element={<Home />}></Route>
        {/** 주소를 통해 값 전달 */}
        <Route path='/board' element={<Board />}>
          {/** 주소로 전달하는 값을 params 값이라고 한다
           * 이 값은 {path의:이름 : "주소에 저장해준 값"}
           * :id는 그 사용할 공간의 이름이기 때문에 원하는 이름으로 작성해서 사용
           * 이와같이 params값을 사용한 주소는
           * 어떤 값이 들어와도 같은 컴포넌트를 출력한다
           */}
          <Route path='/board/:id/:num' element={<BaordPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootIndex;