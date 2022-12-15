import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "../css/Home.css";

const Home = () => {
  // [ 시계 ]
  // 시계 출력
  const [time, setTime] = useState(new Date()); // new Date() : 값을 넣어주지 않으면 현재 시각을 반환함

  // 시계내용을 출력하는 함수 : return값으로 시간을 돌려줌 - 문자열
  const printClock = () => {
    // Int를 String으로 바꿔서, 문자객체에 있는 0을 채우는 메소드 padStart() 사용
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // 현재 페이지가 실행됐을 때, setInterval을 이용하여
  // 시간값을 1초마다 바꿔서 출력
  // setInterval은 한 번만 작성해주면 됨
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []); // 현재 페이지가 마운트 되었을 때, 한번만 실행되어야하기 때문에 []빈배열을 넣어줌

  // 명언 배열
  const [words, setWords] = useState([
    {
      text: "There is only one success - to be able to spend your life in your own way.",
      author: "Christopher Morley",
    },
    {
      text: "You create your opportunities by asking for them.",
      author: "Patty Hansen",
    },
    {
      text: "A discovery is said to be an accident meeting a prepared mind.",
      author: "Albert Szent-Gyorgyi",
    },
    {
      text: "I am not sincere, even when I say I am not.",
      author: "Jules Renard",
    },
    {
      text: "It is a bad plan that admits of no modification.",
      author: "Publilius Syrus",
    },
  ]);

  // [ 명언 ]
  // 명언 랜덤 출력 함수
  // 버그 발생 : printWords를 실행할 때마다 random 값이 바뀜
  // >> 왜? : update를 할 때마다 printWords를 실행

  // >> 수정 방법 : useCallback, useMemo
  // return값을 고정: useMemo return 값고정
  // useMemo를 사용했을때, 변수 안에 들어가는 것 = return값 💛
  const printWords = useMemo(() => {
    const randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
  }, []);

  // 슬릭 화면 사용
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 슬릭에 출력할 배경이미지 배열
  const [imagelist, setImagelist] = useState([
    "background_1.jpg",
    "background_2.jpg",
    "background_3.jpg",
  ]);

  return (
    <div>
      {/* 슬릭화면 출력 */}
      {/* 슬라이더는 내용이 커지면 다음 페이지로 넘어간다 -> 크기 조절해서 사용 */}
      {/* 이미지를 주소로 바로 접근할 수 없기 때문에 require로 접근 */}
      <Slider {...settings}>
        {/* map을 사용하여 배열 출력*/}
        {imagelist.map((image) => (
          <div>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: "url(" + require("../img/" + image) + ")",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        ))}
      </Slider>
      <div className="Home-main">
        {/* 현재 시간 출력 */}
        <h1>{printClock()}</h1>{" "}
        {/* -> 함수의 결과값을 그대로 출력하는 방식으로 출력하고 있음 */}
        {/* 명언 출력 - 배열 요소 출력 */}
        {/* useMemo를 사용했을 경우, 그 함수의 return값이
                  변수 안에 들어가게 된다. 사용할 때 변수이름으로만 사용
                */}
        <p>{printWords.text}</p>
        <p>{printWords.author}</p>
      </div>
    </div>
  );
};

export default Home;
