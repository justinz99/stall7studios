import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col } from 'react-bootstrap';
import { jzInfo, bfInfo, cvInfo, sdInfo, studioBio } from '../texts'

export default function About() {
  const [profileOpen, setProfileOpen] = useState(null)

  const toggleProfileOpen = (profile) => {
    if (profileOpen === profile) {
      return setProfileOpen(null)
    }
    setProfileOpen(profile)
  }

  const styles = useSpring({
    from: { width: '5rem' },
    to: { width: '10rem' }
  })

  function ProfileCard(props) {
    const { id, name, pic, title, insta, bio } = props.person
    const animStyles = profileOpen === id ? props.styles : null 

    return (
      <animated.div className='profile-card' onClick={() => props.toggle(id)} style={animStyles}>
        <img src={pic} alt='headshot' className='about-headshot' />
      </animated.div>
    )
  }
  
  return (
    <div className='aboutPage'>
      <Container className='about-container'>
        <Row>
          {/* <Col className='about-studioBioCol' lg='6'>
            {studioBio}
          </Col> */}
          <Col className='about-crewCol'>
            <div className='about-crew'>
              <ProfileCard person={jzInfo} toggle={toggleProfileOpen} styles={styles} />
              <ProfileCard person={bfInfo} toggle={toggleProfileOpen} styles={styles} />
              <ProfileCard person={cvInfo} toggle={toggleProfileOpen} styles={styles} />
              <ProfileCard person={sdInfo} toggle={toggleProfileOpen} styles={styles} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

