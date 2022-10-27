import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as activeHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as disactiveHeart } from '@fortawesome/free-regular-svg-icons';
import DataContext from '../context/DataContext';
import { useContext } from 'react';


function ProductCard(props) {
  const {product} = props;
  return (
    <Card style={{ width: '13rem' }}>
      {/* 이미지를 들고올 때 변수 사용 시 require 사용 */}
      <Card.Img variant="top" src={require(`../img/${product.productPicture}`)} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Button variant="outline-primary"> 
          <FontAwesomeIcon icon={disactiveHeart}/>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;