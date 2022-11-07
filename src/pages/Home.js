import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from '@mui/material';
import { slogans } from '../texts';
import { videos } from '../videos';

export default function Home() {
  const isBigScreen = useMediaQuery('(min-width: 576px)')
  const typeAnimationStyle =
    isBigScreen
      ? { fontWeight: 500, fontSize: '4rem' }
      : { fontWeight: 300, fontSize: '200%' }
  const featuredVideos = videos.filter(video => video.preview)

  return (
    <Container className="home">
      <TypeAnimation
        sequence={slogans}
        className='home-sloganText'
        wrapper='h1'
        speed={20}
        repeat={Infinity}
        cursor={false}
        style={{ typeAnimationStyle }}
      />
      {featuredVideos.map(video => (
        <VideoPlayer video={video} key={video.id} />
      ))}
    </Container>
  );
}

function VideoPlayer(props) {
  const { id, thumbnail, preview } = props.video

  return (
    <Row className="home-vidRow">
      <Col sm={10}>
        <Link to={`/work/${id}`}>
          <div className='home-vidContainer'>
            <img src={thumbnail} className='home-vidThumbnail' alt='featured video thumbnail' />
            <video
              src={preview}
              type='video/mp4'
              preload='metadata'
              className='home-vidPreview'
              loop
              playsInline
              muted
              onMouseEnter={e => e.target.play()}
              onMouseLeave={e => e.target.pause()}
            />
          </div>
        </Link>
      </Col>
    </Row>
  )
}



