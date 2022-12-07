// 데이터 API를 통해서 값을 뉴스 데이터를 가져오는 컴포넌트
// 데이터 API의 특징 
// 1. 데이터로 가져오기 위해 Ajax를 사용하여 

import { useEffect } from "react";
import { useState } from "react";

// 비동기로 값을 가져와서 사용 (http객체, fetchAPI, axios)
const APIComp = () => {
  // news를 저장할 공간 state
  const [news, setNews] = useState("");
  
  // api 내용이 많을 시 그 값이 빨리 전달되지 않을 때가 있기 때문에
  // 그값이 왔을 때 제어하기 위한 state
  const [newsloading, setNewsloading] = useState(false);

  useEffect(()=>{
    //시작하자마자 값을 들고오기 위해 useEffect에 작성
    // 비동기 함수로 작성
    const getData = async () => {
      // fetch는 주소를 통해서 값을 가져오기 때문에 await를 써서 값을 들고 온다
      // await를 쓰지 않으면 Promise데이터로 들고오게 된다
      // Promise는 ㄱ밧을 가져오겠다고 약속한 데이터 형식
      // => then, await를 이용하여 값을 가져와서 사용
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a")
      console.log(response);
      const body = await response.json();
      console.log(body);
      setNews(body);
      // useState에 들어가는 값이 클 때, 바로 반영되지 않는 경우가 있음
      console.log(news);

      // 그 값이 들어올 때까지 기다림
      if(!news){
        setNewsloading(true)
        console.log("내용이 들어왔습니다")
      }
    } 
    getData();
  },[newsloading]) // 다시 확인하기!

  return ( 
    <div>
      <h1>API 컴포넌트입니다</h1>
      {/** 리액트는 객체 형식을 바로 출력할 수 없다 
       * >> 객체 형식이 아닌 문자열이나, 숫지를 출력
      */}
      {/** 리액트는 undefined에서 값을 찾을 수 없다
       * : 외부값이 들어오기 전에는 undefined가 들어가있다
       * ex) 값이 들어가있지 않을 때 속성에서 값을 찾아오려고 함
       * >> 삼항연산자를 사용해서 값이 있을 때만 접그날 수 있게 해주면 됨
       */}
      {/** news를 조건식으로 넣으면, 
       * 값이 있을 때  : true, 없을 때 : false */}
      {
        news? news.status : "값이 아직 오지 않았습니다"
      }
      <h3>
        {
          /** 실습 : articles의 0번째 인덱스의 title 출력 */
          news? news.articles[0].title : "값 없음"
        }
      </h3>
      {
        /** map을 사용해서 api 데이터 출력하기
         * 1. 현재 가져오는 데이터가 배열인지 확인해야함
         * 2. 배열 안의 요소가 객체인지, 문자열인지 확인 후 출력 
         * */
      }
      {
        // 값이 없을 때, 출력하지 않도록 삼항 연산자 사용,
        // && 값이 있을 때만 출력할 수 있도록 코드 작성
        news && news.articles.map((article,i)=>(
          <div>
            <li>{article.title}</li>
          </div>
        ))
      }
      <hr />
      {
        news && news.articles.map((article)=>(
          <APIBox title={article.title} urlToImage={article.urlToImage} />
        ))
      }
    </div>
  );
}
export default APIComp;

// 여러개의 데이터를 동일한 화면으로 출력하기 위해
// 컴포넌트를 작성해서 사용 >> 그 값을 props으로 받아옴
const APIBox = (props) => {
  // props의 값은 객체로 들고오기 때문에,
  // 객체 기호로 감싸서 구조화할당 사용/ 배열은 배열기호로 감싸서
  const {title, urlToImage} = props;
  return ( 
    <div>
      <h3>{title}</h3>
      {
        /** 이미지가 없을 때 img 태그가 출력되지 않게 작성 */
      }{
        urlToImage ? <img src={urlToImage} alt="img" style={{width: "300px",}} />
        : <div style={{width:"300px", height:"300px", backgroundColor:"gray", display:"inline-block"}} />
      }
    </div>
  );
}
