import { Col, Container, Row } from 'react-bootstrap';
import thumb1 from '../images/stills/1.png'
import thumb2 from '../images/stills/2.png'
import thumb3 from '../images/stills/3.png'
import thumb4 from '../images/stills/4.png'

export default function Home() {



  return (
    <Container className="Home">
      <h2 className="sloganText">Our innovative approach to visual storytelling</h2>
      <Container className="vidGallery">
        <Row className="vidRow">
          <Col>
          <img className="vidColLeft" src={thumb1} alt='header logo'></img>
          </Col>
          <Col>
          <img className="vidColRight" src={thumb2} alt='header logo'></img>
          </Col>
        </Row>
        <Row className="vidRow">
          <Col>
          <img className="vidColLeft" src={thumb3} alt='header logo'></img>
          </Col>
          <Col>
          <img className="vidColRight" src={thumb4} alt='header logo'></img>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

