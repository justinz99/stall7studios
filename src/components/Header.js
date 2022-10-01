import logo from '../images/logo192.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} className='logo' alt='header logo' />
            <h1>Stall7 Studios</h1>
            
            <div className='nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/work'>work</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/contact'>contact</NavLink>
            </div>
        </div>
    )
}