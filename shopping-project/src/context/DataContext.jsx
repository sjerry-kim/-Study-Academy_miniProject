// Context 대한 내용은 공식홈페이지 참고
// Context를 사용해서, value값도 현재 파일에서 지정하고 내보내기
import { createContext } from "react";
import { useState } from "react";
// *이전엔 내보낸 DataContext에 value값을 넣어줘서 사용하였음
const DataContext =  createContext();

// *이번엔 미리 Provider를 작성해서 value값을 가진 컴포넌트를 내보냄
// return이 없음 -> 데이터만 들어감 😡😡😡
const DataProvider = ({children}) =>{
  // 사용할 값들을 useState를 통해 값을 들고옴
  // 유저 정보 {name:"홍길동", profile: 사진, likelist:[]}
  const [user, setUser] = useState({name: '홍길동', porfile: null, likelist:[]}); // 빈객체를 넣으면 true로 읽힘 null, "" 이 false
  // 상품정보
  const [productList, setProductList] = useState([
    {
      productId : 1,
      productName : "책",
      productDetail : "리액트를 알려주는 책입니다",
      productColor : ["white", "black"],
      productPicture : ["1.PNG", "1-2.PNG"]
    },
    {
      productId : 2,
      productName : "책2",
      productDetail : "리액트를 알려주는 책입니다",
      productColor : ["white", "black"],
      productPicture : ["1.PNG"]
    },
    {
      productId : 3,
      productName : "책3",
      productDetail : "리액트를 알려주는 책입니다",
      productColor : ["white", "black"],
      productPicture : ["1.PNG"]
    }
  ])
  // 댓글정보
  const [allComments, setAllComments] = useState([
    {
      commentId: 1,
      productId : 1,
      name: "green",
      text: "좋은 책입니다"
    },
    {
      commentId: 2,
      productId : 1,
      name: "blue",
      text: "괜찮습니다"
    },
  ]);
  // useState 사용하지 않은 변수는 리액트 업데이트를 일으키지 않는다 !!!
  const [commentCount, setCommentCount] = useState(3);

  // 사용할 value 값을 state와 action으로 분리해서 넣어둠
  const value = {
    state: {user, productList, allComments, commentCount},
    action: {setUser, setProductList, setAllComments, setCommentCount}
  }; 


  // DataProvider를 사용할 때 DataContext.Provider를 사용할 수 있도록 함
  // 이때 children은 Provider를 쓸 때 데이터를 공용으로 쓰는 컴포넌트들
  return <DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>
};


// consumer 작성
// DataContext의 값을 가져와서 DataConsumer으로 사용
const {Consumer : DataConsumer} = DataContext;

// 컴포넌트로 사용하기 위해 export > .Provider 대신 사용할 컴포넌트 : App전체를 감쌈
export {DataConsumer, DataProvider}
// 값을 사용하기 위해 가져오는 콘텍스트 export > 각컴포넌트에서 useContext로 가져올 것
export default DataContext;