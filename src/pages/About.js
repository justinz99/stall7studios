import { useState } from 'react';
import {jzInfo, bfInfo, studioBio} from '../texts'
import crew from '../images/crew.jpg'

export default function About() {
  const [profileOpen, toggleProfileOpen] = useState(false)

  return (
    <div className='crew'>
      <img src={crew} className='crew-pic' alt='everybody' />

      {profileOpen && <ProfileCard person={jzInfo}/>}

      <div className='description'>
        <p>{studioBio.intro}</p>
        
        <p>{studioBio.mission}</p>
        
        <p>Click on any person to view individual details</p>
        <button onClick={() => toggleProfileOpen((prevState) => (!prevState))}>temp person</button>
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
