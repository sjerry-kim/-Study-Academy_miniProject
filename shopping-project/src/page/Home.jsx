// 슬릭 라이브러리 추가
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  const {state} = useContext(DataContext);

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col className="px-5">
          <Slider {...settings}>
            {state.productList.map((product)=>(
              <div>
                <ProductCard key={product.productId} product={product} />
              </div>
            ))}
          </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronRight} 
    className={className}
    onClick={onClick}
    style={{color: "gray"}}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronLeft} 
    className={className}
    onClick={onClick}
    style={{color: "gray"}}/>
  );
}