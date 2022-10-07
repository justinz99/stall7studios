// import { useState } from 'react';
import {jzInfo, bfInfo, cvInfo, sdInfo, studioBio} from '../texts'


export default function About() {

  return (
    <div className='crew'>
      <ProfileCard person={jzInfo}/>
      <ProfileCard person={bfInfo}/>
      <ProfileCard person={cvInfo}/>
      <ProfileCard person={sdInfo}/>

      <div className='description'>
        <p>{studioBio.intro}</p>
        <p>{studioBio.mission}</p>
      </div>
    </div>
  );
}

const ProfileCard = (props) => {
  const {name, pic, title, insta, bio} = props.person

  return (
    <div className='profile-card'>
      <img src={pic}  alt='headshot' />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <br />
      <p>{bio}</p>
      <a href={'https://instagram.com/' + insta}><i className="fa-brands fa-instagram fa-xl social" />@{insta}</a>
    </div>
  )
}
