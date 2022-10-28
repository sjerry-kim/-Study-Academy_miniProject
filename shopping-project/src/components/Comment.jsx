import { ListGroup } from "react-bootstrap";

const Comment = () => {
  return ( 
    <div>
      <ListGroup.Item>
        <h4>이름</h4>
        <p>댓글 내용</p>
      </ListGroup.Item>
    </div>
  );
}

export default Comment;