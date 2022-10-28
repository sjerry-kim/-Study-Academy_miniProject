import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as activeHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as disactiveHeart } from '@fortawesome/free-regular-svg-icons';
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductCard(props) {
  const {product} = props;
  const data = useContext(DataContext); // 전체를 들고옴
  const[likeCheck, setLikeCheck] = useState(false);
  const navigate = useNavigate();

  // 로그아웃 되었을 때 likeCheck를 false로 만들기
  // data.state.user의 값을 확인해서 업데이트
  useEffect(()=>{ 
    if(!data.state.user){
      setLikeCheck(false);
    }
  },[data.state.user])

  // 버튼을 클릭했을때, 로그인이 되어있다면, 유저의 likelist에 추가하기
  // 토글 기능 (한번 누르면 추가, 선택된 상황에서 누르면 해제)
  const toggleLike = ()=>{
    if(!data.state.user){
      return; // 함수를 끝냄
    }
    // like가 선택이 되어있는지 확인
    // data.state.user.likelist[?].productId
    // > 배열 안에 상품의 아이디가 있다면 선택된 것을 알 수 있음 
    // find : 조건이 참일 때 하나의 값을 반환함, 없을 때는 undefined
    // 값이 있다면 값을 제거(filter), 없다면 추가(concat)
    const likes = data.state.user.likelist;
    // likelist의 like 중에서 아이디가 같은 것이 있다면 참
    if(likes.find((like)=>(like.productId == product.productId))){
      const newLikeList = likes.filter((like)=>(like.productId != product.productId))
      // user의 값이 객체이므로 이전의 값이 사라지지 않게 ...data.state.user를 통해 저장
      data.action.setUser({
        ...data.state.user,
        likelist : newLikeList,
      })
      setLikeCheck(false);
    }else{
      // 값이 없을 때, 찜리스트를 추가하는 내용
      // like(객체)를 만들어서 물건ID와 물건이름 추가
      const like = {productId : product.productId, productName: product.productName}
      // like가 추가된 새로운 배열 생성
      const newLikeList = likes.concat(like);

      data.action.setUser({
        ...data.state.user,
        likelist: newLikeList,
      })
      setLikeCheck(true);
    }

    console.log(data.state.user);

  };

  return (
    <Card style={{ width: '13rem' }}>
      {/* 이미지를 들고올 때 변수 사용 시 require 사용 */}
      <Card.Img 
      onClick={()=>{navigate('/product/'+product.productId)}}
      variant="top" src={require(`../img/${product.productPicture[0]}`)} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        {/* 로그인이 되어있다면, 버튼을 클릭했을 때 유저의 likelist 추가하기 */}
        <Button variant="outline-primary" onClick={toggleLike} > 
          <FontAwesomeIcon icon={ likeCheck? activeHeart : disactiveHeart}/>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;