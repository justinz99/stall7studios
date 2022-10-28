import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
import { useMediaQuery } from '@mui/material';
import { slogans } from '../texts';
import { videos } from '../videos';


export default function Home() {
  const isBigScreen = useMediaQuery('(min-width: 576px)')
  const typeAnimationStyle = 
    isBigScreen 
    ? { fontWeight: 500, fontSize: '4rem' } 
    : { fontWeight: 300, fontSize: '200%' }
  const videoStyle = isBigScreen ? { height: 600 } : { height: 400 }
  const featuredVideos = videos.filter(video => video.featured)

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
        <Row className="home-vidRow" key={video.id}>
          <Col sm={10}>
            <iframe
              width="100%"
              height={videoStyle.height}
              src={`https://www.youtube.com/embed/${video.embedId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}



