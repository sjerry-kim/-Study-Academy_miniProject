import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ProductDisplay from "../components/ProductDisplay";
import DataContext from "../context/DataContext";

const ProductDetail = () => {
  const data = useContext(DataContext);
  const {id} = useParams();
  const [comments, setComments] = useState(
          data.state.allComments
          .filter((comment)=>(comment.productId == id)));


  // state.allComment 값이 바뀔 때마다 업데이트
  useEffect(()=>{
    setComments(data.state.allComments.filter((comment)=>(comment.productId==id)))
  },[data.state.allComments])

  const getProduct = () =>{return data.state.productList
                            .find((product)=>(product.productId == id ))}

  return (
    <div>
      <ProductDisplay product={getProduct()}/>
      <br />
      <CommentInput id={id} />
      <ListGroup style={{textAlign: "left"}}>
        {comments.map((comment)=>(<Comment key={comment.commentId} comment={comment} />))}
      </ListGroup>
    </div>
  );
}

export default ProductDetail;