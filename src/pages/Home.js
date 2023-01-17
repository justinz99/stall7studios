import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from '@mui/material';
import { slogans } from '../texts';
import { videos } from '../videos';

import ReactGA from 'react-ga4';

export default function Home() {
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  const isBigScreen = useMediaQuery('(min-width: 576px)');
  const typeAnimationStyle =
    isBigScreen
      ? { fontWeight: 500, fontSize: '4rem' }
      : { fontWeight: 300, fontSize: '200%' };
  const featuredVideos = videos.filter(video => video.preview);


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
      <h3>watch the 2022 reel:</h3>
      <iframe
          className='home-showreel'
          width="2240"
          height="630"
          src={`https://www.youtube.com/embed/e_8HQwqB5xQ`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
      <h3>featured work:</h3>
      {featuredVideos.map(video => (
        <VideoPlayer video={video} key={video.id} isBigScreen={isBigScreen}/>
      ))}
    </Container>
  );
}

function VideoPlayer(props) {
  const { title, id, thumbnail, preview } = props.video;
  const isIOS = navigator.userAgent.indexOf("like Mac") !== -1 ? true : false;

  return (
    <Row className="home-vidRow">
      <Col sm={10}>
        <Link to={`/work/${id}`}>
          <div className='home-vidContainer'>
            <h3 className='home-vidTitle'>{title}</h3>
            <img src={thumbnail} className='home-vidThumbnail' alt='featured video thumbnail' />
            {!isIOS && <video
              src={preview}
              type='video/mp4'
              preload='metadata'
              className='home-vidPreview'
              loop
              playsInline
              muted
              onMouseEnter={e => e.target.play()}
              onMouseLeave={e => e.target.pause()}
            />}
          </div>
        </Link>
      </Col>
    </Row>
  )
}



