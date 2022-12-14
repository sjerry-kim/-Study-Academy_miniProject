/**
 * ReduxToolkitIndex는 index에서 진행되어야할
 * 리덕스 초기화 내용입니다
 * 공부를 위해 따로 컴포넌트를 만들어서 사용하고 있습니다
 * 새로 프로젝트를 만들어서 진행할때는 index에서 진행하면 됩니다
 * *여기서 index는 public/index.html와 app.js를 연결해주는 src/index.js
 * 
 */
// 리액트에서 리덕스를 사용하기위해 프로바이더를 가져옴
import { Provider } from 'react-redux'
import BookBox from './BookBox';
// 리덕스를 사용할때는 createStore를 통해서 store생성
// > 리덕스 툴킷을 사용하면, js파일에서 store를 내보내서 가져옴
// *store.js 작성한 이후에 추가
import store from './modules/store';
import NumberBox from './NumberBox';

const ReduxToolkitIndex = () => {
    return ( 
        <Provider store={store}>
            <BookBox />
        </Provider>
     );
}
 
export default ReduxToolkitIndex;