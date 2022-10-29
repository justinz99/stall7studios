import { useEffect, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { crewInfo, studioBio } from '../texts';
import { useMediaQuery } from '@mui/material';


export default function About() {
  const isBigScreen = useMediaQuery('(min-width: 576px)')

  const studioBioParagraph = (studioBio) => {
    return studioBio.split('\n').map((line) => (<p key={line.length}>{line}</p>))
  }

  const staticStyles = {
    crewContainer: 'about-crewContainer',
    headshot: 'about-headshot',
    cardInfo: 'about-cardInfo',
    animatedWidth: '30vw',
    animatedMinWidth: '20vw',
  }

  const bigScreenStaticStyles = {
    crewContainer: 'about-crewContainer-bigScreen',
    headshot: 'about-headshot-bigScreen',
    cardInfo: 'about-cardInfo-bigScreen',
    animatedMaxWidth: '20vw',
    animatedMinWidth: '7vw',
  }

  return (
    <Container className='about-container'>
      <Row>
        <Col className='about-studioBioCol' sm={6}>
          {studioBioParagraph(studioBio)}
          <small className='about-footNote'>Website built by Brandon and Justin</small>
        </Col>
        <Col sm={4} className='about-playlist'>
          <iframe
            title="spotify playlist"
            src="https://open.spotify.com/embed/playlist/2ggX4FMmcaCKznNFD4VqDU?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Col>
      </Row>
      <Row>
        <Col className='about-crewCol'>
          <ProfileCard crew={crewInfo} styles={isBigScreen ? bigScreenStaticStyles : staticStyles} />
        </Col>
      </Row>
    </Container>
  );
}

function ProfileCard(props) {
  const [profileOpen, setProfileOpen] = useState(null)
  const lastProfileOpen = useRef(null)

  const toggleProfileOpen = (profile) => {
    if (profileOpen === profile) {
      setProfileOpen(null)
    }
    setProfileOpen(profile)
  }

  useEffect(() => {
    lastProfileOpen.current = profileOpen
  }, [profileOpen])

  const handleClick = (profile) => {
    toggleProfileOpen(profile)
    setSprings.start(animatedStyles(profile))
  }

  const animatedStyles = (targetProfile) => profile =>
    targetProfile === profile
      ?
      { to: { width: props.styles.animatedMaxWidth, scale: 1.2, display: 'block', opacity: 1, y: 0 }, config: { mass: 5, tension: 200, friction: 24 } }
      : { to: { width: props.styles.animatedMinWidth, scale: 0.8, display: 'none', opacity: 0, y: 100 }, config: { mass: 2, tension: 200, friction: 20 } }

  const [springs, setSprings] = useSprings(
    props.crew.length,
    animatedStyles(profileOpen)
  )
  return (
    <div className={props.styles.crewContainer}>
      {springs.map(({ width, scale, display, opacity, y }, i) => {
        const { name, pic, title, insta, email, bio, extraLink } = props.crew[i]
        return (
          <div
            onClick={() => handleClick(i)}
            key={i}
            className='about-profileCard'
          >
            <animated.div style={{ width, overflow: 'hidden' }}>
              <animated.img style={{ scale }} src={pic} alt='headshot' className={props.styles.headshot} />
            </animated.div>
            <animated.div style={{ display, opacity, transform: y.to(val => `translateY(${val}px)`) }} className={props.styles.cardInfo}>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>{title}</Card.Subtitle>
              <br />
              <Card.Text>{bio}</Card.Text>
              <Card.Text>
                <a href={`https://www.instagram.com/${insta}`}><i className="fa-brands fa-instagram fa-xl" style={{marginRight: '10px'}}/></a>
                <a href={`mailto: ${email}`}><i className="fa-regular fa-envelope fa-xl" style={{marginRight: '10px'}}/></a>
                {extraLink && <a href={extraLink}><i className="fa-regular fa-lightbulb fa-xl" style={{marginRight: '10px'}}/></a>}
              </Card.Text>
            </animated.div>
          </div>
        )
      })}
    </div>
  )
}