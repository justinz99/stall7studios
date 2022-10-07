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
    <Row>
      <Col>
        <Link to={`${id}`}>
          <img src={thumbnail} className='videos-thumbnail' alt='video thumbnail' />
        </Link>
      </Col>
      <Col>
        <p>{title}</p>
      </Col>
    </Row>
  )
}