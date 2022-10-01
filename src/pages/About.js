import {jzInfo, bfInfo, studioDescription} from '../texts'

export default function About() {

  return (
    <div className='crew'>
      <ProfileCard person={jzInfo} />
      <ProfileCard person={bfInfo} />
      <div className='description'>
        {studioDescription}
      </div>
    </div>
  );
}

const ProfileCard = (props) => {
  const {name, pic, title, insta} = props.person

  return (
    <div className='profile-container'>
      <img src={pic}  alt='Justin Zhao headshot' />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <a href={'https://instagram.com/' + insta}><i className="fa-brands fa-instagram fa-xl social" />@{insta}</a>
    </div>
  )
}
