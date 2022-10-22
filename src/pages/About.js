import { useEffect, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { crewInfo, studioBio } from '../texts'


export default function About() {
  const studioBioParagraph = (studioBio) => {
    return studioBio.split('\n').map((line) => (<p>{line}</p>))
  }

  return (
    <div className='aboutPage'>
      <Container className='about-container'>
        <Row>
          <Col className='about-studioBioCol' lg='4'>
            <p>{studioBioParagraph(studioBio)}</p>
            <small className='about-footNote'>Website built by Brandon and Justin</small>
          </Col>
          <Col className='about-crewCol'>
            <ProfileCard crew={crewInfo} />
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
      return setProfileOpen(null)
    }
    setProfileOpen(profile)
  }

  useEffect(() => {
    lastProfileOpen.current = profileOpen
  }, [profileOpen])

  const handleClick = (profile) => {
    toggleProfileOpen(profile)
    setSprings.start(styles(profile))
  }

  const styles = (targetProfile) => profile =>
    targetProfile === profile
      ?
      { to: { width: '20rem', scale: 1.2, display: 'block', opacity: 1, y: 0}, config: { mass: 5, tension: 200, friction: 24}}
      : { to: { width: '5rem', scale: 0.8, display: 'none', opacity: 0, y: 100},config: { mass: 2, tension: 200, friction: 20}}

  const [springs, setSprings] = useSprings(
    props.crew.length,
    styles(profileOpen)
  )
  return (
    <div className='about-crew'>
      {springs.map(({ width, scale, display, opacity, y}, i) => {
        const { name, pic, title, insta, email, bio } = props.crew[i]
        return (
          <div
            onClick={() => handleClick(i)}
            key={i}
            className='about-profileCard'
          >
            <animated.div style={{  width, overflow: 'hidden' }}>
              <animated.img style={{ scale }} src={pic} alt='headshot' className='about-headshot' />
            </animated.div>
            <animated.div style={{ display, opacity, transform: y.to(val => `translateY(${val}px)`)}} className='about-cardInfo'>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{title}</Card.Subtitle>
                <br />
                <Card.Text>{bio}</Card.Text>
                <br />
                <Card.Text>
                  <a href={`https://www.instagram.com/${insta}`}><i className="fa-brands fa-instagram fa-xl" /></a>
                  <a href={`mailto: ${email}`}><i className="fa-solid fa-envelope fa-xl social"></i></a>
                </Card.Text>
            </animated.div>
          </div>
        )
      })}
    </div>
  )
}