import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
import { useMediaQuery } from '@mui/material';
import { slogans } from '../texts';
import wyattThumb from '../images/videoThumbnails/wyattThumb.jpg'
import gannonThumb from '../images/videoThumbnails/gannonThumb.jpg'
import depThumb from '../images/videoThumbnails/depThumb.jpg'

export default function Home() {
  const isBigScreen = useMediaQuery('(min-width: 576px)')
  const typeAnimationStyle = 
    isBigScreen ? { fontWeight: 500, fontSize: '4rem' } : {fontWeight: 300, fontSize: '200%' }
  
  return (
    <Container className="home">
        <TypeAnimation sequence={slogans} className='home-sloganText' wrapper='h1' speed={20} repeat={Infinity} cursor={false} style={{ typeAnimationStyle }}/>
      <Row className="home-vidRow">
        <Col>
          <img src={wyattThumb} alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
      </Row>
      <Row className="home-vidRow">
        <Col>
          <img src={gannonThumb} alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
      </Row>
      <Row className="home-vidRow">
        <Col>
          <img src={depThumb} alt="home thumbnailplaceholder" className='home-vidThumbnail' />
        </Col>
      </Row>
    </Container>
  );
}



