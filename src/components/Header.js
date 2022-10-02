import logo from '../images/logo192.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const activeStyle = ({isActive}) => {
        return isActive ? {textDecoration: 'underline'} : undefined
    }

    return (
        <div className='header'>
            <img src={logo} className='logo' alt='header logo' />
            <h1>Stall7 Studios</h1>
            
            <div className='nav'>
                <NavLink to='/' end style={activeStyle}>Home</NavLink>
                <NavLink to='/work' style={activeStyle}>work</NavLink>
                <NavLink to='/about' style={activeStyle}>about</NavLink>
                <NavLink to='/contact' style={activeStyle}>contact</NavLink>
            </div>
        </div>
    )
}