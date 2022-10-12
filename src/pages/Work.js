import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { videos } from "../videos"

export default function Work() {
  
  return (
    <Container>
      {videos.map(video => (<VideoCard video={video} key={video.id}/>))}
    </Container>
  );
}

const VideoCard = (props) => {
  const { id, title, thumbnail } = props.video
  return (
    <Row className='works-row'>
      <Col className='works-col' md='6'>
        <Link to={`${id}`}>
          <img src={thumbnail} className='works-thumbnail' alt='video thumbnail' />
          <p>{title}</p>
        </Link>
      </Col>
   
    </Row>
  )
}