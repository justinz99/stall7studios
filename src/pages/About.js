import { useEffect, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { crewInfo, studioBio } from '../texts'
import { useMediaQuery } from '@mui/material';


export default function About() {
  const isBigScreen = useMediaQuery('(min-width: 576px)')

  useEffect(() => {
    console.log(isBigScreen)
  }, [isBigScreen])

  const studioBioParagraph = (studioBio) => {
    return studioBio.split('\n').map((line) => (<p key={line.length}>{line}</p>))
  }

  const staticStyles = {
    crewContainer: 'about-crewContainer',
    headshot: 'about-headshot',
    cardInfo: 'about-cardInfo',
    animatedWidth: '15vw'
  }

  const bigScreenStatictyles = {
    crewContainer: 'about-crewContainer-bigScreen',
    headshot: 'about-headshot-bigScreen',
    cardInfo: 'about-cardInfo-bigScreen',
    animatedWidth: '20vw'
  }

  return (
    <div className='aboutPage'>
      <Container fluid>
        <Row>
          <Col className='about-studioBioCol' sm={3}>
            {studioBioParagraph(studioBio)}
            <small className='about-footNote'>Website built by Brandon and Justin</small>
          </Col>
          <Col className='about-crewCol'>
            <ProfileCard crew={crewInfo} styles={ isBigScreen ? bigScreenStatictyles : staticStyles}/>
          </Col>
        </Row>
      </Container>
    </div>
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
      { to: { width: props.styles.animatedWidth, scale: 1.2, display: 'block', opacity: 1, y: 0 }, config: { mass: 5, tension: 200, friction: 24 } }
      : { to: { width: '7vw', scale: 0.8, display: 'none', opacity: 0, y: 100 }, config: { mass: 2, tension: 200, friction: 20 } }

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
                <a href={`https://www.instagram.com/${insta}`}><i className="fa-brands fa-instagram fa-xl social" /></a>
                <a href={`mailto: ${email}`}><i className="fa-regular fa-envelope fa-xl social" /></a>
                {extraLink && <a href={extraLink}><i class="fa-regular fa-lightbulb fa-xl social" /></a>}
              </Card.Text>
            </animated.div>
          </div>
        )
      })}
    </div>
  )
}