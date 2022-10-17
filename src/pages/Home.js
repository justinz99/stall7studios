import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
import { slogans } from '../texts';

export default function Home() {

  return (
    <Container className="home">
      <TypeAnimation sequence={slogans} className='home-sloganText' wrapper='h1' speed={20} repeat={Infinity} cursor={false}/>
      <Row className="home-vidRow">
        <Col sm='4'>
          <img src='https://via.placeholder.com/2000x1000' alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
        <Col>
          <img src='https://via.placeholder.com/2000x1000' alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
      </Row>
      <Row className="home-vidRow">
        <Col sm='5'>
          <img src='https://via.placeholder.com/2000x1000' alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
        <Col>
          <img src='https://via.placeholder.com/2000x1000' alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
      </Row>
    </Container>
  );
}



