import { useState } from "react";

const TestAPI = () => {
  const [news, setNews] = useState();

  const getData = async (country) => {
    const url = "https://newsapi.org/v2/top-headlines/sources?" + 
    "category=business&" +
    "country="+ country +
    "&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
    const response = await fetch(url);
    const body = await response.json();
    setNews(body);
  }

  return ( 
    <div>
      <h1>뉴스 API 확인</h1>
      <p>버튼 누를 때마다 관련 나라의 기사 가져오기</p>
      <button onClick={()=>{
        getData("us")}}>us</button>
      <button onClick={()=>{
        getData("fr")}}>fr</button>
      <button onClick={()=>{
        getData("kr")}}>kr</button>
      {/**아래에 기사 출력 */}
      <br />
      {
        news&&
        news.sources.map((article)=>(
          <div>
            <p>{article.description}</p>
          </div>
        ))
      }
      <hr />
      {/** 값이 들어왔지만 배열에 값이 없을 경우 
       *  삼항 연산자 안에 또 삼항연산자가 들어갈수 있다
      */}
      {
        news && news.sources.length>0 ? news.sources.map((source)=>(
          <li>{source.description}</li>
        ))
        : "검색 결과가 없습니다"
      }
    </div>
  );
}

export default TestAPI;