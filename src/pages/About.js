// import { useState } from 'react';
import { jzInfo, bfInfo, cvInfo, sdInfo, studioBio } from '../texts'
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {

  const ProfileCard = (props) => {
    const { name, pic, title, insta, bio } = props.person
  
    return (
      <div className='profile-card'>
        <img src={pic} alt='headshot' className='about-headshot' />
      </div>
    )
  }  

  return (
    <div className='aboutPage'>
      <Container className='about-crew'>
        <Row className='about-row'>
          <Col className='about-col'>
            <ProfileCard person={jzInfo} />
            <ProfileCard person={bfInfo} />
            <ProfileCard person={cvInfo} />
            <ProfileCard person={sdInfo} />
          </Col>
          <Col className='works-studioBio'>
            {studioBio}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

