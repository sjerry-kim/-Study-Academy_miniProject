import { useState } from "react";

const TestEvent = () => {
  const [memos, setMemo] = useState([
    {id : 1, text: "메모1"},
    {id : 2, text: "메모2"},
    {id : 3, text: "메모3"},
    {id : 4, text: "메모4"},
  ]);


  return (
    <div>
      <h3>이벤트 테스트 공간입니다</h3>
      {/*map을 통해서 전체 내용을 출력해주세요*/}
      {
        memos.map((memo)=>(
          <div key={memo.id}>
            {memo.text}
          </div>
        ))
      }
      {/* TestBox를 이용하여 내용을 출력해주세요*/}
      {
        memos.map((memo)=>(
          <TestBox memo={memo} setMemo={setMemo} memos={memos}/>
        ))
      }
    </div>
  );
};

//TestEvent에서 사용할 TestBox
const TestBox = (props) => {
  // m, memo와 setMemos를 props값으로 들고오기
  const { memo, memos, setMemo} = props;
  
  // 수정창을 닫고 여는 state
  const [modify, setModify] = useState(false);
  // 수정할 내용을 저장하는 state
  const [input, setInput] = useState("");

  return ( 
    <div>
      {/* memo의 값 들고오기 */}
      <h4>{memo.text}</h4>
      
      { // modify true일때 화면에 출력
        // true 일때, input의 값을 입력받고, 
        // 버튼을 누르면 그 값이 setMemos로 수정되고 modify가 false로 바뀜
        modify ? (
          <div> 
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={()=>{
              const modifyMemo = {...memos, text:input};
              setMemo(memos.map((m)=>(m.id== memo.id? modifyMemo : m)));
              setModify(false);
              }}>수정완료</button>
          </div>
        ):
        (// 버튼을 누르면 modify가 true
          <button onClick={()=>{setModify(true)}}>수정</button>
        )
      }

    </div>
  );
}


export default TestEvent;