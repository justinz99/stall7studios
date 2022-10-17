import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { videos } from "../videos"

export default function Work() {


  const VideoCard = (props) => {
    const { id, title, thumbnail } = props.video

    const [onHover, setOnHover] = useState(false)

    const styles = useSpring({ 
      transform: onHover ? 'scale(1.03)' : 'scale(1)'
    })

    const toggleHover = () => {
      setOnHover(!onHover)
    }


    return (
      <Row className='works-row'>
        <Col className='works-col' md='6'>
          <animated.div 
            style={styles} 
            onMouseEnter={() => toggleHover()} 
            onMouseLeave={() => toggleHover()}
          >
            <Link to={`${id}`} >
              <img src={thumbnail} className='works-thumbnail' alt='video thumbnail' />
              <p className='works-title'>{title}</p>
            </Link>
          </animated.div>
        </Col>
      </Row>
    )
  }

  return (
    <Container>
      {videos.map(video => (<VideoCard video={video} key={video.id} />))}
    </Container>
  );
}

