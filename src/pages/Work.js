import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated} from 'react-spring';
import { useMediaQuery } from '@mui/material';
import { videos } from '../videos';

export default function Work() {
  const isBigScreen = useMediaQuery('(min-width: 576px)')

  const VideoCard = (props) => {
    const { id, title, thumbnail } = props.video
    const [onHover, setOnHover] = useState(false)
    
    const spring = useSpring({
      to: onHover ? { scale: 1.2, transform: 'rotate(5deg)', boxShadow: 'rgba(17, 12, 46, 0.3) 0px 48px 100px 0px' } : { scale: 1, transform: 'rotate(0deg)', boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' },
      config: { mass: 7, tension: 200, friction: 30 }
  })

    const handleHover = () => {
      if (isBigScreen) {
        setOnHover(!onHover)
      }
    }

    return (
      <Row className='works-row'>
        <Col md={7}>
          <Link to={`${id}`} >
            <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <animated.img src={thumbnail} className='works-thumbnail' alt='video thumbnail' style={spring}/>
              <p className='works-title'>{title}</p>
            </div>
          </Link>
        </Col>
      </Row>
    )
  }

  return (
    <Container fluid='md'>
      {videos.map(video => <VideoCard video={video} key={video.id}/>)}
    </Container>
  );
}

