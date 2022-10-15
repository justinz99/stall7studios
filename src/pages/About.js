// import { useState } from 'react';
import { jzInfo, bfInfo, cvInfo, sdInfo, studioBio, companyInfo } from '../texts'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default function About() {

  return (
    //<div className='crew'>
    //<ProfileCard person={jzInfo}/>
    //<ProfileCard person={bfInfo}/>
    //<ProfileCard person={cvInfo}/>
    //<ProfileCard person={sdInfo}/>

    //<div className='description'>
    //<p>{studioBio.intro}</p>
    //<p>{studioBio.mission}</p>
    // </div>
    //</div>
    <div className='aboutPage'>
      <Container className='crew'>
        <Row className='aboutRow'>
          <Col lg={6} className='aboutCol'><ProfileCard person={jzInfo} /></Col>
          <Col lg={6} className='aboutCol'><ProfileCard person={bfInfo} /></Col>
        </Row>
        <Row className='aboutRow'>
          <Col lg={6} className='aboutCol'><ProfileCard person={cvInfo} /></Col>
          <Col lg={6} className='aboutCol'><ProfileCard person={sdInfo} /></Col>
        </Row>
      </Container>
      <Container className='aboutCompanyGrid'>
        <Row className='aboutCompanyRow'>
          <Col className='aboutCompanyText'><p>{companyInfo.p1}</p><p>{companyInfo.p2}</p></Col>
        </Row>
      </Container>
    </div>
  );
}

const ProfileCard = (props) => {
  const { name, pic, title, insta, bio } = props.person

  return (
    <div className='profile-card'>
      <img src={pic} alt='headshot' />
      <h3>{name}</h3>
      <h4>{title}</h4>
      {/* <p>{bio}</p> */}
      {/* <a href={'https://instagram.com/' + insta}><i className="fa-brands fa-instagram fa-xl social" />@{insta}</a> */}
    </div>
  )
}
