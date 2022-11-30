const PropsChildren = (props) => {
  // props의 값의 여러개가 들어오기 때문에
  // 객체의 형태로 사용 > 구조화분해 이용
  const {name, count, setCount, onClick} = props;
  // props으로 받아올 수 있는 값들 
  // : 문자열, {}로 감싸 보내진 자바스크립트의 변수/함수(함수만, 괄호까지 -> 함수자체, 함수 결과값)
  // * 작성한 컴포넌트에 on~이벤트를 작성하면 props 값으로 들어온다
  const {children} = props;
  // children은 태그와 태그 사이에 작성한 값을 들고온다

  return ( 
    <div onClick={onClick}>
      <h3>PropsChildren : name:{name}, count:{count}</h3>
      <button onClick={()=>{setCount(count+1)}}>+1</button>
      {children}
    </div>
  );
}

export default PropsChildren;