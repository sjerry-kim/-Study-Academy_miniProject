import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';

// Routes와 Route를 이용하여 화면 관리
function App() {
  return (
    <div className="App">
      {/* 고정할 화면이 있다면 Route의 바깥에 두거나, Layout사용 */}
      <Routes>
        <Route path='/' index element={<Home />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
