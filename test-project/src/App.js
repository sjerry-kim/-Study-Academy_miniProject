import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceKiss, faBagShopping, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <NavbarComp />
      <CardComp />
      <Button variant="outline-primary" onClick={()=>{alert("클릭")}}>
        <FontAwesomeIcon icon={faFaceKiss} />
        <FontAwesomeIcon icon={faBagShopping} />
      </Button>{' '}
      <Container>
      <Row>
        <Col xs lg="2">1 of 3</Col>
        <Col md="3">1 of 2</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
    </Slider>
    </div>
  );
}

export default App;
