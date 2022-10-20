import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col } from 'react-bootstrap';
import { jzInfo, bfInfo, cvInfo, sdInfo, studioBio } from '../texts'

export default function About() {
  const [profileOpen, setProfileOpen] = useState(null)
  const [selectedProfile, setSelectedProfile] = useState('')

  const toggleProfile = (profile) => (e) => {
    console.log(profile)
    if(selectedProfile === profile){
      setSelectedProfile('')
    }else{
      setSelectedProfile(profile)
    }
  }

  const profileStyle = (profile) => ({
    width:selectedProfile===profile? '10rem':'5rem',
    transition:'1s'
  })


  
  return (
    <div className='aboutPage'>
      <Container className='about-container'>
        <Row>
          {/* <Col className='about-studioBioCol' lg='6'>
            {studioBio}
          </Col> */}
          <Col className='about-crewCol'>
            <div className='about-crew'>
              <div className='profile-card' onClick={toggleProfile('jz')} style={profileStyle('jz')}>
                <img src={jzInfo.pic} alt='headshot' className='about-headshot' />
              </div>
              <div className='profile-card' onClick={toggleProfile('bf')}  style={profileStyle('bf')}>
                <img src={bfInfo.pic} alt='headshot' className='about-headshot' />
              </div>
              <div className='profile-card' onClick={toggleProfile('cv')}  style={profileStyle('cv')}>
                <img src={cvInfo.pic} alt='headshot' className='about-headshot' />
              </div>
              <div className='profile-card' onClick={toggleProfile('sd')}  style={profileStyle('sd')}>
                <img src={sdInfo.pic} alt='headshot' className='about-headshot' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

